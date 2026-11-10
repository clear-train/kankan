import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

// npm scripts 都在仓库根目录执行，所以用 cwd 定位 docs 目录
const docsRoot = path.join(process.cwd(), 'docs')

function readTitle(file: string): string {
  const raw = fs.readFileSync(file, 'utf-8')
  const body = raw.replace(/^---[\s\S]*?---\s*/, '')
  const match = body.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : path.basename(file, '.md')
}

function sectionsOf(dir: string) {
  const full = path.join(docsRoot, dir)
  if (!fs.existsSync(full)) return []
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => ({
      text: readTitle(path.join(full, f)),
      link: `/${dir}/${f.replace(/\.md$/, '')}`
    }))
}

function volume(title: string, dir: string) {
  const items = sectionsOf(dir)
  return items.length ? [{ text: title, items }] : []
}

export default defineConfig({
  lang: 'zh-CN',
  title: '侃侃',
  description: '一本让你在饭桌上真的懂 AI 的书',
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#b04a2f' }]],
  themeConfig: {
    nav: [
      { text: '上桌之前', link: '/start/why' },
      { text: '地基', link: '/base/10-next-token' },
      { text: '热词', link: '/words/20-llm' }
    ],
    sidebar: {
      '/start/': volume('卷零 · 上桌之前', 'start'),
      '/base/': volume('卷一 · 地基', 'base'),
      '/words/': volume('卷二 · 热词', 'words'),
      '/industry/': volume('卷三 · 生意', 'industry'),
      '/reflect/': volume('卷四 · 反思', 'reflect'),
      '/appendix/': volume('附录', 'appendix')
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '深浅',
    sidebarMenuLabel: '目录',
    lastUpdated: {
      text: '最近更新',
      formatOptions: { dateStyle: 'medium' }
    }
  }
})
