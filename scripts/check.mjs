#!/usr/bin/env node
/**
 * 书稿体检：结构、字数、语言禁令、引用。
 * 用法：node scripts/check.mjs
 * 有 error 时退出码为 1，CI 会拦下来。
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.join(import.meta.dirname, '..', 'docs')

const BANNED = [
  '赋能', '抓手', '闭环', '颠覆', '革命性', '史诗级', '王炸', 'yyds',
  '降维打击', '众所周知', '毋庸置疑', '综上所述', '值得注意的是',
  '不可否认', '随着……的发展'
]

const VAGUE_CITES = ['据说', '有研究表明', '研究表明', '业内普遍认为', '业内认为', '数据显示']

const SENSITIVE = [
  '政府', '监管机构', '领导人', '政局', '政策走向', '出口管制', '制裁', '审查制度'
]

// 每卷的篇幅区间与必需小节
const VOLUMES = {
  start: { min: 300, max: 620, sections: null },
  base: { min: 450, max: 700, sections: ['一句话', '饭桌上可以这么说', '它到底怎么转的', '说到这儿就该停了', '多说一句'] },
  words: { min: 450, max: 750, sections: ['一句话', '饭桌上可以这么说', '它到底怎么转的', '说到这儿就该停了', '这个词是怎么被用坏的'] },
  industry: { min: 650, max: 950, sections: ['一个场景', '它是怎么转的', '饭桌上可以这么说', '说到这儿就该停了', '最后'] },
  reflect: { min: 650, max: 950, sections: ['一个场景', '它是怎么转的', '饭桌上可以这么说', '说到这儿就该停了', '最后'] },
  now: { min: 550, max: 950, sections: ['发生了什么', '大家怎么说', '拆开看', '一年后再看', '这一篇的保质期'] },
  history: { min: 700, max: 1250, sections: ['它的来路', '当年为什么这么做', '走对的和走岔的', '现在还剩什么', '饭桌上怎么说', '时间线', '参考'] },
  appendix: { min: 300, max: 1600, sections: null }
}

// 人物篇与模型篇结构不同，单独覆盖
const historyPerson = {
  min: 600,
  max: 1050,
  sections: ['他是谁', '他信什么', '对在哪，错在哪', '他为什么这么说', '饭桌上怎么说', '参考']
}

const FILE_RULES = {
  'history/76-altman.md': historyPerson,
  'history/77-lecun.md': historyPerson
}

const errors = []
const warnings = []

function hanCount(text) {
  return (text.match(/[\u4e00-\u9fff]/g) || []).length
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      return entry.name === '.vitepress' || entry.name === 'public' ? [] : walk(full)
    }
    return entry.name.endsWith('.md') ? [full] : []
  })
}

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file)
  if (['index.md', '404.md', 'updates.md', 'citation.md'].includes(rel) || rel.endsWith('index.md')) continue

  const volume = rel.split(path.sep)[0]
  const rule = FILE_RULES[rel.split(path.sep).join('/')] || VOLUMES[volume]
  if (!rule) {
    warnings.push(`${rel}: 不在已知卷目录中`)
    continue
  }

  const raw = fs.readFileSync(file, 'utf-8')
  const body = raw.replace(/```[\s\S]*?```/g, '')

  // 结构
  const h2 = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim())
  if (rule.sections) {
    const missing = rule.sections.filter((s) => !h2.includes(s))
    if (missing.length) errors.push(`${rel}: 缺少小节 ${missing.join('、')}`)
    const extra = h2.filter((h) => !rule.sections.includes(h))
    if (extra.length) warnings.push(`${rel}: 多出小节 ${extra.join('、')}`)
  }

  // 篇幅
  const n = hanCount(body)
  if (n < rule.min || n > rule.max) {
    errors.push(`${rel}: ${n} 字，超出 ${rule.min}–${rule.max}`)
  }

  // 语言禁令
  if (/[！!]/.test(body)) errors.push(`${rel}: 出现感叹号`)
  if (/[\u{1F300}-\u{1FAFF}]/u.test(body)) errors.push(`${rel}: 出现 emoji`)
  for (const word of BANNED) {
    if (body.includes(word)) errors.push(`${rel}: 禁用词「${word}」`)
  }
  if (/[\u4e00-\u9fff],/.test(body)) errors.push(`${rel}: 中文后用半角逗号`)

  // 引用：有裸引用必须补链接
  for (const phrase of VAGUE_CITES) {
    let idx = body.indexOf(phrase)
    while (idx !== -1) {
      const lineStart = body.lastIndexOf('\n', idx) + 1
      const lineEnd = body.indexOf('\n', idx)
      const line = body.slice(lineStart, lineEnd === -1 ? body.length : lineEnd)
      if (!/https?:\/\//.test(line)) {
        errors.push(`${rel}: 「${phrase}」没有链接：${line.trim().slice(0, 40)}`)
      }
      idx = body.indexOf(phrase, idx + 1)
    }
  }

  // 数字：出现年份、百分比、金额时，要求全篇至少有一个链接
  // 台词与场景里的数字（「……」内）不算事实断言，先剥掉再看
  const plain = body.replace(/「[^」]*」/g, '')
  const hasTexualNumbers = /\d{4}\s*年|\d+(\.\d+)?\s*%|\d+\s*(元|美元|亿元|亿)/.test(plain)
  if (hasTexualNumbers && !/https?:\/\//.test(body)) {
    errors.push(`${rel}: 出现具体数字或年份，但全文没有来源链接`)
  }

  // 政治敏感：只提醒，不拦截
  for (const word of SENSITIVE) {
    if (body.includes(word)) warnings.push(`${rel}: 提到「${word}」，确认只描述事实、不评价`)
  }
}

const files = walk(ROOT).filter((f) => !f.includes('.vitepress')).length
if (errors.length) {
  console.error(`\n✗ ${errors.length} 处问题：\n`)
  for (const e of errors) console.error('  • ' + e)
}
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} 条提醒：\n`)
  for (const w of warnings) console.log('  • ' + w)
}
if (!errors.length) console.log(`\n✓ 检查通过，共 ${files} 个文件。`)
process.exit(errors.length ? 1 : 0)
