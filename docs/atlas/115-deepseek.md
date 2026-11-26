# DeepSeek：把成本打到别人不得不跟

## 这一族怎么长出来的

2024 年 1 月，第一代 DeepSeek LLM 以 670 亿参数开源，走的是当时最标准的那条路：大语料、稠密模型、把中文和代码喂饱（[DeepSeek](https://arxiv.org/abs/2401.02954)）。这条路上，它只是众多追赶者之一。

四个月后换道。2024 年 5 月，V2 出来，2360 亿总参数、每个 token 只激活 210 亿（[DeepSeek](https://arxiv.org/abs/2405.04434)）。技术报告写得很直白：相比 67B 那一代，训练成本省 42.5%，KV cache 减 93.3%，吞吐提到 5.76 倍。

年底 V3 把总参数堆到 6710 亿、激活 370 亿，预训练 14.8 万亿 token，API 三档价：缓存命中每百万 0.07 美元、未命中 0.27 美元、输出 1.10 美元（[DeepSeek](https://api-docs.deepseek.com/news/news1226/)）。

2025 年 1 月 20 日，R1 把推理模型开源，MIT 许可，权重、蒸馏小模型、训练方法一起给（[DeepSeek](https://api-docs.deepseek.com/news/news250120/)）。三档价变成 0.14、0.55、2.19。

2025 年 9 月 29 日，V3.2-Exp 换上稀疏注意力，官方说 API 价格降了一半以上（[DeepSeek](https://api-docs.deepseek.com/news/news250929/)）。

2026 年 4 月，V4 预览开源，Pro 版 1.6 万亿总参数、490 亿激活，Flash 版 2840 亿、130 亿，上下文到百万字级（[DeepSeek](https://api-docs.deepseek.com/news/news260424/)）。9 月 V4.1-Flash 反过来把 Pro 压过去：5520 亿总参数，输入只激活 80 亿、输出 160 亿（[DeepSeek](https://api-docs.deepseek.com/news/news260910/)）。

2026 年 11 月 13 日，它把 App 里那套能力拆成接口：联网搜索、文件输入、阅读链接、语音，单独卖（[DeepSeek](https://api-docs.deepseek.com/news/news261113/)）。

## 技术路线

**MLA。** 多头潜在注意力，把 KV cache 压成一个潜向量。V2 的报告里写着，相比 67B 那代，KV cache 减了 93.3%，吞吐提到 5.76 倍（[DeepSeek](https://arxiv.org/abs/2405.04434)）。长上下文贵在哪，贵在缓存；压住缓存，长上下文才跑得起。

**MoE。** 参数大、激活小。V2 是这个思路，V3 继续，V4.1-Flash 的 8B 输入激活是同一套逻辑推到极限。

**后训练。** R1 的关键不是数据，是不要数据：纯强化学习，让模型自己长出反思和验证（[DeepSeek](https://arxiv.org/abs/2501.12948)）。

**工程优先。** V4.1-Flash 用非对称的编码解码结构，输入 8B、输出 16B；KV cache 的显存需求降到上一代的四分之一，SSD 存储降到八分之一（[DeepSeek](https://api-docs.deepseek.com/news/news260910/)）。省钱的地方不在模型本身，在缓存。

一句话：它的技术选型几乎都能翻译成账单。

## 现在谁在用

把成本写进商业模式的调用方。批量处理、数据清洗、客服问答，这类活儿对文风没要求，对单价极敏感。

做 Agent 的团队。V4 起官方主打 Agentic，V4.1-Flash 明说按 Agent 的账单优化，缓存命中的费用在 Agent 场景里占大头。

自建的一批。权重开放，V4 也开源，能自己托管的就不租。

2026 年 11 月那次更新之后，多了一类人：想复刻一个 App 的开发者。它把对话产品背后的能力做成了积木。

判断：用 DeepSeek 的人多数不是爱它的文风，是爱它的报价单。

## 预期寿命

**低价这条护城河还能撑多久。** 估计值 12 到 24 个月，从 2026 年 11 月算起。到 2028 年年中以前，它大概仍是「每百万 token 多少钱」这一栏的标尺。

**判断依据。** 对手在降价，具体数字我不列，各家调价频繁，写出来第二天就过期，只看趋势：它曾经领先的那段价差，现在缩到几成。算力受限，供给一紧，最先变的是排队和缓存命中率，不是标价。开源被追上，它自己开源，等于把「更便宜的托管」这条路顺手送给了别人。

**过期的信号。** 一，单价不再低于同行；二，缓存命中不再是主要卖点；三，版本节奏从半年一代变成改个名字；四，权重不再开源；五，官方开始卖生态而不是卖单价。

第五条最难察觉，也最准。一家公司开始认真讲「全家桶」，通常意味着单点已经不够便宜了。

## 参考

- DeepSeek：《DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model》，2024-05，https://arxiv.org/abs/2405.04434，访问日期 2026-11-26
- DeepSeek：《Introducing DeepSeek-V3》，2024-12-26，https://api-docs.deepseek.com/news/news1226/，访问日期 2026-11-26
- DeepSeek：《DeepSeek-R1 Release》，2025-01-20，https://api-docs.deepseek.com/news/news250120/，访问日期 2026-11-26
- DeepSeek：《DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning》，2025-01-22，https://arxiv.org/abs/2501.12948，访问日期 2026-11-26
- DeepSeek：《Introducing DeepSeek-V3.2-Exp》，2025-09-29，https://api-docs.deepseek.com/news/news250929/，访问日期 2026-11-26
- DeepSeek：《DeepSeek V4 Preview Release》，2026-04-24，https://api-docs.deepseek.com/news/news260424/，访问日期 2026-11-26
- DeepSeek：《DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient》，2026-09-10，https://api-docs.deepseek.com/news/news260910/，访问日期 2026-11-26
- DeepSeek：《DeepSeek 全家桶应用 API 发布》，2026-11-13，https://api-docs.deepseek.com/news/news261113/，访问日期 2026-11-26
