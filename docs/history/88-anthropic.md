# Anthropic：先把宪法写好，再去上市

## 它的来路

2021 年 1 月 26 日，几个从 OpenAI 出来的人注册了一家公司（[Wikipedia](https://en.wikipedia.org/wiki/Anthropic)）。达里奥·阿莫代伊任 CEO，他妹妹达妮埃拉·阿莫代伊任总裁。

他们出来不是为了钱。2023 年 3 月，公司在博客里写得很直白：我们觉得 AI 的影响可能大到改写工业和科学的样子，但我们不确定这事会顺利，而且它可能就在这十年里到（[Anthropic](https://www.anthropic.com/news/core-views-on-ai-safety)）。

2022 年 12 月，他们把「宪法式 AI」写成论文：不再让人一条条挑好坏，改成给模型一份原则，让它自己照着判、照着改（[arXiv](https://arxiv.org/abs/2212.08073)）。2023 年 3 月 14 日 Claude 上线，两个版本，Claude 和 Claude Instant，早期客户是 Notion、Quora、DuckDuckGo 这些（[Anthropic](https://www.anthropic.com/news/introducing-claude)）。两个月后，Claude 的宪法被整篇贴了出来（[Anthropic](https://www.anthropic.com/news/claudes-constitution)）。

先写宪法，再发产品。顺序就是立场。

## 当年为什么这么做

当时的 OpenAI 是另一条路：先放出去，让社会跟着适应。Anthropic 反过来：先把原则写成条文，模型照着念，念错了改条文，不改人。

差别在成本。RLHF 要人两两比答案，慢、贵，标注的人还得天天看脏东西；宪法版让模型自己按条文判，人只负责写条文。省下的是人力，换来的是一份能摊在桌上的文件。

这也是 to B 的入场券。企业采购第一个问题不是「多聪明」，是「它凭什么这么答」。你拿得出一份文件，流程才走得下去。

我猜他们当时想的是：要是哪天有人追问「谁允许你这么做的」，答案最好是一份写好的东西，而不是一张嘴。

这也是它跟 OpenAI 真正的分歧所在。不是要不要赚钱，是谁有资格替人类做判断。一家把答案写进文件，一家把答案交给市场，两条路从第一天就分开了。

## 走对的和走岔的

走对的第一件，是找对了客户。企业和编程，按 token 收钱。2025 年底年化收入约 90 亿美元，2026 年 4 月过了 300 亿（[Reuters](https://en.aletihad.ae/news/ai/4660793/google-plans-to-invest-up-to--40-billion-in-anthropic--bloom)）。

第二件，是把「安全」做成了采购清单上的一行。算力、价格、合规、责任，几栏它都填得上。

第三件，是资本结构。谷歌和亚马逊既是股东，又是算力供应商，还是渠道（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）。这种关系不好看，但管用：钱、卡、客户，一次谈完。

走岔的地方，不在产品，在节奏。

走岔的第一件，是速度。安全叙事要慢，估值要快。2026 年 2 月的 G 轮，300 亿美元，投后 3800 亿（[Anthropic](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation)）；4 月，谷歌承诺最多再投 400 亿，先付 100 亿，按 3500 亿估值算（[Reuters](https://en.aletihad.ae/news/ai/4660793/google-plans-to-invest-up-to--40-billion-in-anthropic--bloom)）；5 月的 H 轮，650 亿，投后 9650 亿（[Anthropic](https://www.anthropic.com/news/series-h)）。五个月，估值翻了一倍半。

第二件，是上市。10 月 26 日，它公开递交 S-1，代码 ANT（[Anthropic](https://www.anthropic.com/news/s1-sec)）。11 月 9 日，路透看到一份发给银行的版本：8.667 亿股 A 类股，70 到 80 美元，按上限募 693 亿；公司自己卖 8.433 亿股，老股东卖 2330 万股；另配 260 亿美元的私募配售（Class N），谷歌、英伟达、AMD、博通、美光、微软、台积电按发行价买，IPO 后立即交割（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）。然后它把文件撤回了，说定价细节不准确，之后更新。

所以到今天，它没有定价，没有上市。递交了，不等于卖出去了。

第三件，是数字本身。截至 9 月 30 日的季度，收入接近 170 亿，但环比增速明显下滑；跟亚马逊、谷歌这些伙伴的算力承诺接近 9000 亿。市场一度讨论 2 万亿估值，现在 1.5 万亿算高位（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）。

起草文件的人和撤回文件的人是同一批。这很像它的产品：先把话说满，再补一句以最终版本为准。

## 现在还剩什么

位置：企业 AI 和编程的主力供应商之一。Claude Code 这类东西，是它现在最硬的收入来源之一。

习惯：把价值写成文件。宪法、使用政策、负责任扩展政策，一份一份往外贴。这个习惯比任何一次发布都活得久。

没解决的事：安全承诺没法被外人检验。宪法文本可以审计，「它有没有真的按宪法做」，只有它自己知道。这不是它一家的问题，是这一行的通病。

土话收尾：宪法写得再厚，也得有人按它判案。

## 饭桌上怎么说

- **同事局**：「它把价值观写成了文件，上市了也得照着念。」
- **老板局**：「安全是它的卖点，也是它最难被验的承诺。」
- **亲戚局**：「这家公司靠『小心』出名，现在也得赶着上市。」

## 时间线

- 2021 年 1 月 26 日，公司成立（[Wikipedia](https://en.wikipedia.org/wiki/Anthropic)）。
- 2023 年 3 月 14 日，Claude 上线（[Anthropic](https://www.anthropic.com/news/introducing-claude)）。
- 2023 年 5 月 9 日，Claude 的宪法公开（[Anthropic](https://www.anthropic.com/news/claudes-constitution)）。
- 2026 年 2 月 12 日，G 轮 300 亿美元，投后 3800 亿（[Anthropic](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation)）。
- 2026 年 10 月 26 日，公开递交 S-1，代码 ANT（[Anthropic](https://www.anthropic.com/news/s1-sec)）。
- 2026 年 11 月 9 日，定价版本流出后撤回（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）。

## 参考

- Anthropic：《Core views on AI safety》，2023-03-08. https://www.anthropic.com/news/core-views-on-ai-safety（访问于 2026-11-10）.
- Anthropic：《Introducing Claude》，2023-03-14. https://www.anthropic.com/news/introducing-claude（访问于 2026-11-10）.
- Anthropic：《Claude's constitution》，2023-05-09. https://www.anthropic.com/news/claudes-constitution（访问于 2026-11-10）.
- Anthropic：《Anthropic raises $30 billion in Series G funding at $380 billion post-money valuation》，2026-02-12. https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation（访问于 2026-11-10）.
- Echo Wang：《Anthropic's nearly $70bln IPO plan briefly circulated to banks, then retracted》，Reuters，2026-11-10. https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775（访问于 2026-11-10）.
