# 侃侃（kankan）

> 一本让你在饭桌上真的懂 AI 的书。

[![Deploy](https://github.com/clear-train/kankan/actions/workflows/deploy.yml/badge.svg)](https://github.com/clear-train/kankan/actions/workflows/deploy.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/text-CC%20BY%204.0-a8492e.svg)](LICENSE)
[![License: MIT](https://img.shields.io/badge/code-MIT-a8492e.svg)](LICENSE-CODE)

在线读：**https://clear-train.github.io/kankan/**

不是术语词典，不是行业报告，是一本**能说出口**的 AI 说明书。

## 这本书想解决什么

大多数人第一次听说「大模型」「Agent」「RAG」，不是在论文里，是在一次饭局上。信息在饭桌上被压缩、变形、加料，听的人记住了，却不知道哪些是技术，哪些是话术。

侃侃做两件事：

1. **把词讲回人话。** 每个概念只留一句能背下来、能说出口的解释。
2. **教你别翻车。** 常见错误说法、被追问时怎么接、哪些词已经被用坏了。

附带一点反思：我们谈 AI 的方式，其实暴露了我们怎么理解技术、工作和自己。

## 全书结构

| 卷 | 内容 | 状态 |
| --- | --- | --- |
| 卷零 · 上桌之前 | 这本书为什么存在、怎么用 | 完成 |
| 卷一 · 地基 | 猜下一个字、token、训练、向量、算力 | 完成 |
| 卷二 · 热词 | LLM、幻觉、RAG、Agent、MCP、AGI 等 16 个词 | 完成 |
| 卷三 · 生意 | 编程、搜索、陪伴、生成、To B、芯片、泡沫 | 完成 |
| 卷四 · 反思 | 替代、版权、安全、污染、AI 味 | 完成 |
| 附录 | 一分钟速查、饭局剧本、反装逼清单 | 完成 |

完整目录与写作计划见 [OUTLINE.md](OUTLINE.md)。

## 怎么读

- **想系统看**：从[为什么是饭桌](docs/start/why.md)开始，按卷一 → 卷四的顺序。
- **想临时抱佛脚**：直接翻[一分钟速查](docs/appendix/cheat-sheet.md)，然后看[饭局剧本](docs/appendix/scripts.md)。
- **想防身**：先读[反装逼清单](docs/appendix/red-flags.md)，二十条，两分钟。
- **想参与写作**：读 [STYLE.md](STYLE.md) 和 [CONTRIBUTING.md](CONTRIBUTING.md)。

每个词条独立成篇，五分钟够用，不必从头看到尾。

## 本地运行

```bash
npm install
npm run dev       # 本地预览 http://localhost:5173
npm run check     # 书稿体检：结构、字数、禁词、引用
npm run build     # 构建静态站点到 docs/.vitepress/dist
npm run preview   # 预览构建结果
```

需要 Node 18 以上。内容全部是 Markdown，不依赖站点也能读。

侧边栏由构建时读取目录生成，新增一个 `.md` 文件会自动出现在左侧目录里，不需要改配置。

## 目录结构

```
docs/
  start/      卷零 · 上桌之前
  base/       卷一 · 地基（机制）
  words/      卷二 · 热词（词条）
  industry/   卷三 · 生意
  reflect/    卷四 · 反思
  appendix/   附录：速查、剧本、反装逼清单
  citation.md 引用规范：什么必须给链接、怎么选源
  updates.md  更新日志
  .vitepress/ 站点配置与主题
templates/    新增篇目的骨架（词条 / 场景）
scripts/      书稿体检脚本，CI 会跑
OUTLINE.md    全书结构
STYLE.md      写作手册
CONTRIBUTING.md 参与方式
```

## 写作原则（摘要）

- 每个词条五节：一句话 / 饭桌上可以这么说 / 它到底怎么转的 / 说到这儿就该停了 / 这个词是怎么被用坏的。
- 前四节负责让你说得出，最后一节负责让你停下来。
- 幽默来自观察准确，不来自抖机灵。
- 不确定就说不确定。预测给条件，不给日期。
- 不编造参数、价格、版本号、日期。
- 引用互联网资料必须给链接和访问日期，规则见[引用规范](docs/citation.md)。
- 谈技术与处境，不谈政治立场；不拿地域、民族、性别、职业当笑点。规则见 [STYLE.md](STYLE.md) 第十二节。

## 部署

推送到 `main` 会自动构建并发布到 GitHub Pages，工作流见 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)。

## 参与

纠错、提词、补场景都欢迎。开 issue 或提 PR 之前，先看一眼 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 授权

- 文字内容：[CC BY 4.0](LICENSE)——可转载、可改编、可商用，注明来源即可。
- 站点代码：[MIT](LICENSE-CODE)。

不是「署名才能看」，是「署名就能随便用」。引用他人材料时给链接，规则见[引用规范](docs/citation.md)。

## 更新计划

- 每周 1–2 篇，保持口吻统一，不追新闻。
- 每季度回看一遍「被用坏的词」：有的词会过气，有的词会换壳。
- 新增词条前先问：它会不会在半年后变成一个没人提的词？如果会，写成附录，不进正文。
