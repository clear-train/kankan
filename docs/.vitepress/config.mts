import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

// npm scripts 都在仓库根目录执行，所以用 cwd 定位 docs 目录
const docsRoot = path.join(process.cwd(), 'docs')

// GitHub Pages 部署在子路径下，本地开发用根路径
const base = process.env.KANKAN_BASE || '/'

const repo = 'https://github.com/clear-train/kankan'

function readTitle(file: string): string {
  const raw = fs.readFileSync(file, 'utf-8')
  const body = raw.replace(/^---[\s\S]*?---\s*/, '')
  const match = body.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : path.basename(file, '.md')
}

function sectionsOf(dir: string, order?: string[]) {
  const full = path.join(docsRoot, dir)
  if (!fs.existsSync(full)) return []
  const rank = (f: string) => {
    if (!order) return 0
    const i = order.indexOf(f.replace(/\.md$/, ''))
    return i === -1 ? order.length : i
  }
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
    .map((f) => ({
      text: readTitle(path.join(full, f)),
      link: `/${dir}/${f.replace(/\.md$/, '')}`
    }))
}

const appendixSidebar = () => [
  {
    text: '附录',
    items: [
      ...sectionsOf('appendix', ['cheat-sheet', 'scripts', 'red-flags']),
      { text: '引用规范', link: '/citation' },
      { text: '更新日志', link: '/updates' }
    ]
  }
]

function volume(title: string, dir: string, order?: string[]) {
  const items = sectionsOf(dir, order)
  return items.length ? [{ text: title, items }] : []
}

export default defineConfig({
  lang: 'zh-CN',
  title: '侃侃',
  description: '一本让你在饭桌上真的懂 AI 的书',
  base,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://clear-train.github.io'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#a8492e' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '侃侃' }],
    [
      'meta',
      { property: 'og:description', content: '一本让你在饭桌上真的懂 AI 的书' }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '上桌之前', link: '/start/why' },
      { text: '地基', link: '/base/10-next-token' },
      { text: '热词', link: '/words/20-llm' },
      { text: '生意', link: '/industry/40-coding' },
      { text: '反思', link: '/reflect/50-jobs' },
      { text: '当下', link: '/now/' },
      { text: '家谱', link: '/history/' },
      { text: '附录', link: '/appendix/cheat-sheet' },
      { text: '更新', link: '/updates' }
    ],
    sidebar: {
      '/start/': volume('卷零 · 上桌之前', 'start', [
        'why',
        'three-people',
        'how-to-use'
      ]),
      '/base/': volume('卷一 · 地基', 'base'),
      '/words/': volume('卷二 · 热词', 'words'),
      '/industry/': volume('卷三 · 生意', 'industry'),
      '/reflect/': volume('卷四 · 反思', 'reflect'),
      '/now/': [
        {
          text: '卷五 · 当下',
          items: [
            { text: '这一卷会过气', link: '/now/' },
            ...sectionsOf('now')
          ]
        }
      ],
      '/history/': [
        {
          text: '卷六 · 家谱',
          items: [
            { text: '这一行只有八年，已经有家谱了', link: '/history/' },
            ...sectionsOf('history')
          ]
        }
      ],
      '/appendix/': appendixSidebar(),
      '/citation': appendixSidebar(),
      '/updates': appendixSidebar()
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
    },
    editLink: {
      pattern: `${repo}/edit/main/docs/:path`,
      text: '在 GitHub 上改这一页'
    },
    footer: {
      message: '文字以 CC BY 4.0 发布，代码以 MIT 发布。可转载、可商用，注明来源即可。',
      copyright: '侃侃 · 会一直更新'
    },
    socialLinks: [{ icon: 'github', link: repo }]
  }
})
