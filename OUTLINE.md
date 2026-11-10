# 全书结构

> 结构逻辑：**认知阶梯 × 饭局场景**。
> 先讲清底层机制（地基），再拆热词（词条），再谈生意（产业），最后回到人（反思）。
> 每个词条自带「饭局等级」，读者可以按场合跳读，不必从头看到尾。

图例：✅ 已完成 ｜ 🟡 在写 ｜ ⬜ 待写

---

## 卷零 · 上桌之前

不讲技术，先讲这本书为什么存在、怎么用、以及你会变成什么样的人。

| 状态 | 篇目 | 文件 |
| --- | --- | --- |
| ✅ | 为什么是饭桌 | `docs/start/why.md` |
| ✅ | 饭桌上的三种人 | `docs/start/three-people.md` |
| ✅ | 怎么用这本书 | `docs/start/how-to-use.md` |

---

## 卷一 · 地基：AI 到底在干嘛

不懂地基的人谈 AI，只能复述别人的句子。这一卷只要七篇，但每一篇都是后面所有词条的底座。

| 状态 | 篇目 | 一句话 | 文件 |
| --- | --- | --- | --- |
| ✅ | 一切从「猜下一个字」开始 | 它做的唯一一件事，是猜下一个字 | `docs/base/10-next-token.md` |
| ✅ | Token：AI 眼里的世界是碎的 | 它不按字读，按碎片读，碎片还收费 | `docs/base/11-token.md` |
| ✅ | 神经网络：一台巨大的拟合机 | 它不是在想，它在逼近一个函数 | `docs/base/12-neural-net.md` |
| ✅ | 训练：把互联网吃进去 | 一次训练，就是一次大规模的纠错 | `docs/base/13-training.md` |
| ✅ | 参数与向量：意思可以被算出来 | 「国王 − 男人 + 女人 = 女王」不是玄学 | `docs/base/14-embedding.md` |
| ✅ | 算力：为什么这玩意儿这么贵 | 它烧的不是电，是并行计算 | `docs/base/15-compute.md` |
| ✅ | 开源与闭源：不是道德问题 | 免费的是模型，贵的是数据和场景 | `docs/base/16-open-source.md` |

---

## 卷二 · 热词：当下最贵的那些词

每个词条五节：一句话 → 饭桌上可以这么说 → 它到底怎么转的 → 说到这儿就该停了 → 这个词是怎么被用坏的。

| 状态 | 词条 | 饭局等级 | 文件 |
| --- | --- | --- | --- |
| ✅ | 大模型 LLM | 全员 | `docs/words/20-llm.md` |
| ✅ | 提示词工程 | 同事局 | `docs/words/21-prompt.md` |
| ✅ | 上下文窗口 | 同事局 | `docs/words/22-context.md` |
| ✅ | 幻觉 | 全员 | `docs/words/23-hallucination.md` |
| ✅ | 温度 | 同事局 | `docs/words/24-temperature.md` |
| ✅ | 微调 | 老板局 | `docs/words/25-finetune.md` |
| ✅ | RAG 检索增强 | 技术局 | `docs/words/26-rag.md` |
| ✅ | 向量数据库 | 技术局 | `docs/words/27-vector-db.md` |
| ✅ | 多模态 | 同事局 | `docs/words/28-multimodal.md` |
| ✅ | 推理模型与思维链 | 同事局 | `docs/words/29-reasoning.md` |
| ✅ | Agent 智能体 | 老板局 | `docs/words/30-agent.md` |
| ✅ | MCP 与工具调用 | 技术局 | `docs/words/31-mcp.md` |
| ✅ | MoE、蒸馏与量化 | 技术局 | `docs/words/32-compress.md` |
| ✅ | 对齐与 RLHF | 哲学局 | `docs/words/33-alignment.md` |
| ✅ | Scaling Law | 老板局 | `docs/words/34-scaling-law.md` |
| ✅ | AGI | 哲学局 | `docs/words/35-agi.md` |

---

## 卷三 · 生意：谁在赚钱，谁在讲故事

技术词的落地版本。重点不是介绍产品，是教你看懂一场发布会在卖什么。

| 状态 | 篇目 | 文件 |
| --- | --- | --- |
| ⬜ | AI 编程：最快被改变的一群人 | `docs/industry/40-coding.md` |
| ⬜ | AI 搜索：入口之争 | `docs/industry/41-search.md` |
| ⬜ | AI 陪伴：孤独的生意 | `docs/industry/42-companion.md` |
| ⬜ | 图像与视频生成：版权与审美 | `docs/industry/43-generation.md` |
| ⬜ | 为什么 To B 这么难 | `docs/industry/44-tob.md` |
| ⬜ | 算力与芯片：新石油 | `docs/industry/45-chips.md` |
| ⬜ | 泡沫：谁在裸泳 | `docs/industry/46-bubble.md` |

---

## 卷四 · 反思：我们为什么要谈 AI

这一卷没有答案，只有更清楚的问题。

| 状态 | 篇目 | 文件 |
| --- | --- | --- |
| ⬜ | 谁会被替代：一个诚实的估计 | `docs/reflect/50-jobs.md` |
| ⬜ | 版权与训练数据：先上车后补票 | `docs/reflect/51-copyright.md` |
| ⬜ | 安全与末日论：谁在害怕什么 | `docs/reflect/52-safety.md` |
| ⬜ | 信息污染：当互联网开始自我循环 | `docs/reflect/53-pollution.md` |
| ⬜ | AI 味：语言的通货膨胀 | `docs/reflect/54-ai-flavor.md` |
| ⬜ | 我们为什么爱谈 AI | `docs/reflect/55-why-we-talk.md` |

---

## 附录

| 状态 | 篇目 | 用途 | 文件 |
| --- | --- | --- | --- |
| ⬜ | 一分钟速查 | 30 个词，每个一句，饭局前扫一眼 | `docs/appendix/cheat-sheet.md` |
| ⬜ | 饭局剧本 | 五个真实场景，逐句怎么接 | `docs/appendix/scripts.md` |
| ⬜ | 反装逼清单 | 听到这些话，先别信 | `docs/appendix/red-flags.md` |

---

## 更新节奏建议

- 每周 1–2 篇，保持口吻统一，不追新闻。
- 每季度回看一遍「被用坏的词」，有的词会过气，有的词会换壳。
- 新增词条前先问：它会不会在半年后变成一个没人提的词？如果会，写成附录，不进正文。
