# DeepSeek：把成本这条线，从台底下拽到台面上

## 它的来路

2023 年，杭州。一家做量化交易的公司分出一批人来做模型，公司叫深度求索，背后是幻方（[BBC 中文](https://www.bbc.com/zhongwen/articles/cj02eq1l7j5o/simp)）。

量化公司做大模型有个不常见的好处：它自己就是买卡的人。算力不是租来的故事，是账上的一笔折旧；训练失败，亏的是自己的钱，不是别人的预期。

2024 年 5 月，他们放出 DeepSeek-V2，论文写得很直白：总参数 236B，每个 token 只激活 21B，KV 缓存压掉 93.3%，最大生成吞吐提到 5.76 倍（[论文](https://arxiv.org/abs/2405.04434)）。

## 当年为什么这么做

那两年国内大模型的打法是：参数越大越好，发布会越早越好，价格先不定，等格局清楚再说。

DeepSeek 反着来。它没有 C 端流量要护，没有云业务要绑，能拿出手的差异化只剩一条：同样的活，我花得更少。MoE 稀疏激活省推理，MLA 省显存，蒸馏把小模型喂出大模型的判断力。三件事都不新鲜，新鲜的是它们被当成主线，而不是优化项。

论文里有一句实话：相比上一代 67B，V2 省下 42.5% 的训练成本。这个数是它自己算的，口径也是它自己定的。

## 走对的和走岔的

走对的是把价目表摊开。2024 年 5 月之后，国内几家厂商接连降价，媒体开始用「价格战」这个词（[新华网](http://www.xinhuanet.com/science/20240617/1cc3e5e73aa749268c45eec07b5d5bad/c.html)）。降价不是因为良心发现，是因为有人先掀了桌布。

2024 年 12 月，V3 出来：671B 总参数，37B 激活，14.8T token，训练用了 278.8 万个 H800 卡时（[论文](https://arxiv.org/abs/2412.19437)）。2025 年 1 月，R1 用纯强化学习训出推理能力，权重按 MIT 协议开放（[GitHub](https://github.com/deepseek-ai/DeepSeek-R1)）。

走岔的是那个数字被当成了结论。卡时是训练成本，不是总成本：试错的 run、清洗的数据、人的工资、失败的项目，都不在分母里。

「便宜」也不是物理定律。价格是策略，策略会改；能长期便宜的公司，得先能长期活着。

## 现在还剩什么

位置：一条价格基准线。此后谁发模型，都躲不开「比 DeepSeek 贵多少」这个问题。

习惯：先发论文，再发权重，把工程细节写在附录里。这个习惯比单次发布值钱，因为它让「怎么省下来的」从商业机密变成公共知识。

团队不大——这个印象来自公开访谈，不是统计。小团队的代价是，所有判断都压在少数人身上。

## 饭桌上怎么说

- **同事局**：「它没把价格打下来，只是把报价单摊开，让别人不好意思不降。」
- **老板局**：「省下的推理费，最后会变成别人压你价的空间。」
- **亲戚局**：「便宜是真的；能便宜多久，得看它还能撑多久。」

## 时间线

- 2023 年，深度求索在杭州成立，团队来自幻方（[BBC 中文](https://www.bbc.com/zhongwen/articles/cj02eq1l7j5o/simp)）。
- 2024 年 5 月 7 日，DeepSeek-V2 论文公开，236B 总参数、21B 激活（[论文](https://arxiv.org/abs/2405.04434)）。
- 2024 年 6 月，国内大模型接连降价，媒体称之为价格战（[新华网](http://www.xinhuanet.com/science/20240617/1cc3e5e73aa749268c45eec07b5d5bad/c.html)）。
- 2024 年 12 月 27 日，DeepSeek-V3 论文公开，671B 总参数（[论文](https://arxiv.org/abs/2412.19437)）。
- 2025 年 1 月，DeepSeek-R1 开放权重，按 MIT 协议发布（[GitHub](https://github.com/deepseek-ai/DeepSeek-R1)）。

## 参考

- BBC 中文：《DeepSeek 创办人梁文锋：从量化基金到聊天机器人投资者》，2025-01-29. https://www.bbc.com/zhongwen/articles/cj02eq1l7j5o/simp（访问于 2026-11-10）.
- DeepSeek-AI：《DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model》，arXiv:2405.04434，2024. https://arxiv.org/abs/2405.04434（访问于 2026-11-10）.
- DeepSeek-AI：《DeepSeek-V3 Technical Report》，arXiv:2412.19437，2024. https://arxiv.org/abs/2412.19437（访问于 2026-11-10）.
- DeepSeek-AI：《DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning》，arXiv:2501.12948，2025. https://arxiv.org/abs/2501.12948（访问于 2026-11-10）.
- 新华网：《大模型为何纷纷降价》，2024-06-17. http://www.xinhuanet.com/science/20240617/1cc3e5e73aa749268c45eec07b5d5bad/c.html（访问于 2026-11-10）.
