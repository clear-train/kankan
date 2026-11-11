# 全书结构

> 结构逻辑：**认知阶梯 × 饭局场景**。
> 先讲清底层机制（地基），再拆热词（词条），再谈生意（产业），最后回到人（反思）。
> 另有两条支线：卷五「当下」收会过气的热点，卷六「家谱」收模型与人的来路。
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

不懂地基的人谈 AI，只能复述别人的句子。这一卷只要八篇，但每一篇都是后面所有词条的底座。

| 状态 | 篇目 | 一句话 | 文件 |
| --- | --- | --- | --- |
| ✅ | 一切从「猜下一个字」开始 | 它不是在回答问题，是在接住你的话；答案只是接得准的副产品 | `docs/base/10-next-token.md` |
| ✅ | Token：AI 眼里的世界是碎的 | 它读的不是字，是可以计价的碎片；你跟它说话，其实是在过磅 | `docs/base/11-token.md` |
| ✅ | 神经网络：一台巨大的拟合机 | 名字叫神经网络，干的却是调旋钮：乘一下、加一下、拐个弯，重复几十层 | `docs/base/12-neural-net.md` |
| ✅ | 训练：把互联网吃进去 | 训练不是上课，是把互联网当练习册：遮住后半句，让它猜，答案就在原文里 | `docs/base/13-training.md` |
| ✅ | 参数与向量：意思可以被算出来 | 意思在它那里不是解释，是坐标；两个词挨得近，是因为常出现在同一种句子里 | `docs/base/14-embedding.md` |
| ✅ | 算力：为什么这玩意儿这么贵 | 它贵不是因为芯片快，是因为成千上万张卡得同时算一件事，还得不停对表 | `docs/base/15-compute.md` |
| ✅ | 开源与闭源：不是道德问题 | 开放权重是把做好的菜端给你，不是把厨房给你；洗碗的还是你 | `docs/base/16-open-source.md` |
| ✅ | 注意力：一句话里，谁该看谁 | 每个词先问「我该听谁的」，再按相关度把别人的话掺一点进来；Transformer 就是把这一层堆起来 | `docs/base/17-attention.md` |

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
| ✅ | 具身智能 | 老板局 | `docs/words/36-embodied.md` |
| ✅ | 世界模型 | 技术局 | `docs/words/37-world-model.md` |
| ✅ | 杰文斯悖论 | 老板局 | `docs/words/38-jevons.md` |
| ✅ | Jev 与决策模型 | 技术局 | `docs/words/39-jev.md` |
| ✅ | JEPA | 技术局 | `docs/words/40-jepa.md` |
| ✅ | Harness（脚手架） | 技术局 | `docs/words/41-harness.md` |
| ✅ | 模型路由 | 技术局 | `docs/words/42-router.md` |
| ✅ | 上下文工程 | 技术局 | `docs/words/43-context-engineering.md` |
| ✅ | 后训练与 RLVR | 技术局 | `docs/words/44-post-training.md` |
| ✅ | 评测污染 | 技术局 | `docs/words/45-benchmark.md` |
| ✅ | 端侧模型 | 技术局 | `docs/words/46-edge-model.md` |
| ✅ | 合成数据 | 技术局 | `docs/words/47-synthetic-data.md` |

---

## 卷三 · 生意：谁在赚钱，谁在讲故事

技术词的落地版本。重点不是介绍产品，是教你看懂一场发布会在卖什么。

| 状态 | 篇目 | 文件 |
| --- | --- | --- |
| ✅ | AI 编程：最快被改变的一群人 | `docs/industry/40-coding.md` |
| ✅ | AI 搜索：入口之争 | `docs/industry/41-search.md` |
| ✅ | AI 陪伴：孤独的生意 | `docs/industry/42-companion.md` |
| ✅ | 图像与视频生成：版权与审美 | `docs/industry/43-generation.md` |
| ✅ | 为什么 To B 这么难 | `docs/industry/44-tob.md` |
| ✅ | 算力与芯片：新石油 | `docs/industry/45-chips.md` |
| ✅ | 泡沫：谁在裸泳 | `docs/industry/46-bubble.md` |
| ✅ | 一个人干十个的活 | `docs/industry/47-one-person-ten-jobs.md` |

---

## 卷四 · 反思：我们为什么要谈 AI

这一卷没有答案，只有更清楚的问题。

| 状态 | 篇目 | 文件 |
| --- | --- | --- |
| ✅ | 谁会被替代：一个诚实的估计 | `docs/reflect/50-jobs.md` |
| ✅ | 版权与训练数据：先上车后补票 | `docs/reflect/51-copyright.md` |
| ✅ | 安全与末日论：谁在害怕什么 | `docs/reflect/52-safety.md` |
| ✅ | 信息污染：当互联网开始自我循环 | `docs/reflect/53-pollution.md` |
| ✅ | AI 味：语言的通货膨胀 | `docs/reflect/54-ai-flavor.md` |
| ✅ | 我们为什么爱谈 AI | `docs/reflect/55-why-we-talk.md` |
| ✅ | 边界：它能碰什么，不能碰什么 | `docs/reflect/56-boundary.md` |
| ✅ | 聊着天，事情就做完了 | `docs/reflect/57-chat-to-action.md` |
| ✅ | 计算机的寒冬 | `docs/reflect/58-cold-winter.md` |
| ✅ | 第二个土木 | `docs/reflect/59-second-civil.md` |
| ✅ | 技术的半衰期：从论文到过时，有多久 | `docs/reflect/60-half-life.md` |
| ✅ | 学得越快，学得越慢 | `docs/reflect/61-learn-fast.md` |

---

## 卷五 · 当下：会过气的那一叠

反着来的一卷。前四卷追求十年后还能用，这一卷只求「此刻说得准」，每篇标日期与保质期，过期不删，挪进归档。

固定五节：发生了什么 → 大家怎么说 → 拆开看 → 一年后再看 → 这一篇的保质期。数字必须带链接，「截至某日」必须写清。

| 状态 | 切片 | 一句话 | 文件 |
| --- | --- | --- | --- |
| ✅ | 一个把才华埋在昨天的人 | 被拿走的不是效率，是那个做决定的位置 | `docs/now/60-talent-buried.md` |
| ✅ | 李佳琦在卖 Token，两万亿个 | 货架上摆的不是算力，是我已经付过了 | `docs/now/61-token-live.md` |
| ✅ | 一部 AI 剧，一千集，一百二十亿次播放 | 两分钟是给手指的，一千集是给惯性的 | `docs/now/62-ai-drama.md` |
| ✅ | 为了证明自己是人，人们开始故意写错字 | 这不是识别真伪，是识别不合规矩 | `docs/now/63-ai-flavor.md` |
| ✅ | LibTV：一个卖视频工具的公司，先学会开健身房 | 工具商夹在模型厂和创作者中间，只能先补贴换人 | `docs/now/64-libtv.md` |
| ⬜ | 待定 | 不收：涉及未经证实的指控、私人生活、外交与情报传闻 | — |

---

## 卷六 · 家谱：这一行只有八年，但前史没写

模型史比产业史更诚实：谁在哪一年做了什么选择，为什么那么选，后来付了什么账。

模型篇七节：它的来路 → 当年为什么这么做 → 走对的和走岔的 → 现在还剩什么 → 饭桌上怎么说 → 时间线 → 参考。
公司篇同样七节，重点放在合约与治理：钱从哪来，分销给了谁，谁在关键投票里没有位置。
事件篇同样七节：一次比赛、一个数据集、一个台阶，为什么是那一年。
人物篇五节：他是谁 → 他信什么 → 对在哪，错在哪 → 他为什么这么说 → 饭桌上怎么说 → 参考。

每个年份、参数、金额都要有出处；两个来源打架时两个都写；写错就改，改动进更新日志。

| 状态 | 篇目 | 一句话 | 文件 |
| --- | --- | --- | --- |
| ✅ | GPT：先不管任务，先把语言压进去 | 换我可能也这么选 | `docs/history/70-gpt.md` |
| ✅ | Claude：把价值观写下来，交给它自己执行 | 原则是公司写的，边界就偏向公司 | `docs/history/71-claude.md` |
| ✅ | 智谱与 GLM：先把中文喂饱 | 中文不是附属市场，是另一条腿 | `docs/history/72-glm.md` |
| ✅ | 文心一言：第一个上台的人 | 第一个上台，也是第一个被当面比下去的 | `docs/history/73-ernie.md` |
| ✅ | 通义千问：把权重送出去，换一个默认 | 让出生态，换回默认选项 | `docs/history/74-qwen.md` |
| ✅ | 盘古：先把答案卖给不敢错的人 | 先交付，再发布 | `docs/history/75-pangu.md` |
| ✅ | 奥特曼：他不是在预测未来，他是在给未来定价 | 队排错了，散起来很慢 | `docs/history/76-altman.md` |
| ✅ | 杨立昆：他嫌这一代模型太吵，自己也没做出安静的那个 | 结构先于规模，是他的信仰也是他的枷锁 | `docs/history/77-lecun.md` |
| ✅ | Transformer：它没发明注意力，它把注意力做成了能并行的东西 | 结构一变，规模才有意义 | `docs/history/78-transformer.md` |
| ✅ | AlphaGo：先让机器学会不确定，再让它学会不用人教 | 两个夜晚，两条路线 | `docs/history/79-alphago.md` |
| ✅ | Llama：权重漏出来的那一次 | 让出权重，换回一个生态 | `docs/history/80-llama.md` |
| ✅ | DeepSeek：把成本这条线，从台底下拽到台面上 | 便宜不是策略，是证据 | `docs/history/81-deepseek.md` |
| ✅ | Sora：先把视频做出来，再把它关掉 | 能做得出来，不等于养得起 | `docs/history/82-sora.md` |
| ✅ | Stable Diffusion：把画笔扔进人群，自己没捡回来 | 开放是它的分发方式 | `docs/history/83-stable-diffusion.md` |
| ✅ | 辛顿：他赌对了一次，然后开始担心自己赌对的东西 | 他把警告写成了论文 | `docs/history/84-hinton.md` |
| ✅ | 苏茨克维：把「更大就更好」变成信念，又亲手去踩刹车 | 他相信规模，也怕规模 | `docs/history/85-sutskever.md` |
| ✅ | OpenAI：一家非营利组织，长成了它自己反对的样子 | 没有翻脸，只有换合同 | `docs/history/86-openai.md` |
| ✅ | 苹果：最后一个把 AI 当功能卖的公司 | 它没输在模型上，输在不肯先说 | `docs/history/87-apple.md` |
| ✅ | Anthropic：先把宪法写好，再去上市 | 递交了，不等于卖出去了 | `docs/history/88-anthropic.md` |
| ✅ | 谷歌：零件都发明了，整机让给了别人 | 会造零件的人，最后要给会装机的人供货 | `docs/history/89-google.md` |
| ✅ | 英伟达：卖铲子的，最后成了股东 | 淘金的人换了一茬又一茬，卖铲子的还在原地数钱 | `docs/history/90-nvidia.md` |
| ✅ | BERT：先学会填空，再学会说话 | 赢了考卷，输了接口 | `docs/history/91-bert.md` |
| ✅ | AlphaFold：先在一个问题上，把人类甩开 | 它没变聪明，它只是找对了一道有标准答案的题 | `docs/history/92-alphafold.md` |
| ✅ | 2012 年那场比赛：机器第一次看懂了图 | 它不是突然想通了，是终于凑齐了 | `docs/history/93-imagenet.md` |

---

## 附录

| 状态 | 篇目 | 用途 | 文件 |
| --- | --- | --- | --- |
| ✅ | 一分钟速查 | 30 个词，每个一句，饭局前扫一眼 | `docs/appendix/cheat-sheet.md` |
| ✅ | 饭局剧本 | 五个真实场景，逐句怎么接 | `docs/appendix/scripts.md` |
| ✅ | 反装逼清单 | 听到这些话，先别信 | `docs/appendix/red-flags.md` |

---

## 更新节奏建议

- 每周 1–2 篇，保持口吻统一，不追新闻。
- 每季度回看一遍「被用坏的词」，有的词会过气，有的词会换壳。
- 新增词条前先问：它会不会在半年后变成一个没人提的词？如果会，写成附录，不进正文。

---

## 候选选题池（持续更新）

不进正文之前先放这里。判断标准只有一条：半年后还有人提它吗。会过气的，写成附录；不会的，写成正文。

| 候选 | 可能的入口 | 归属 |
| --- | --- | --- |
| 评测基准 | 分数涨了，活没变好，谁的问题 | 卷二 |
| 推理成本 | 同一个问题，便宜十倍之后，问题本身变了 | 卷三 |
| 开源模型生态 | 权重放出来之后，赚钱的是卖铲子的人 | 卷三 |
| AI 硬件 | 一个卖不动的品类，加个 AI 就能涨价 | 卷三 |
| AI 教育 | 最先被替代的不是老师，是批改 | 卷三 |
| AI 医疗 | 它敢给建议，是因为没人让它签字 | 卷三 |
| 数据标注 | 教 AI 认图的人，时薪比它便宜 | 卷三 |
| 提示词考古 | 三年后回看，那些「魔法词」像什么 | 附录 |
| 饭局十年 | 上一代人怎么聊互联网，我们怎么聊 AI | 卷四 |
| 沉默的成本 | 不会用的人，连抱怨的资格都没有 | 卷四 |

写之前先跑 `npm run check`；引用规则见 [docs/citation.md](docs/citation.md)。
