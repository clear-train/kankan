# Qwen：从开源追赶到衍生十万

## 这一族怎么长出来的

2023 年 4 月，阿里云把通义千问端出来，先接钉钉和天猫精灵，企业客户邀测（[阿里云](https://www.alibabacloud.com/tc/press-room/alibaba-cloud-unveils-new-ai-model-to-support)）。四个月后，第一批 Qwen 权重放了出去（[证券时报](https://www.stcn.com/article/detail/1545280.html)）。此后是一年两批的节奏：2024 年 6 月 Qwen2，五个尺寸、27 种语言、128K 上下文（[Qwen](https://qwenlm.github.io/zh/blog/qwen2/)）；9 月 Qwen2.5，18 万亿 token 预训练（[Qwen](https://qwenlm.github.io/zh/blog/qwen2.5/)）。

2025 年是分岔的一年。3 月 QwQ-32B 用 320 亿参数去追 R1 的推理（[Qwen](https://qwenlm.github.io/zh/blog/qwq-32b/)）；4 月 Qwen3 把 235B-A22B 和 30B-A3B 一起开源，Apache 2.0（[Qwen](https://qwenlm.github.io/zh/blog/qwen3/)）；9 月 Qwen3-Max 总参数过了万亿，预览版在一个公开榜单上排到第三（[新华网](https://www.news.cn/tech/20250924/5bb4f5dfaf024fc7940a4170c42adbde/c.html)）。

2026 年 2 月，Qwen3.5-Plus 换掉纯文本底座，改成原生多模态，3970 亿总参数只激活 170 亿，官方口径是性能超过万亿参数的 Qwen3-Max（[科技日报](https://www.stdaily.com/web/gdxw/2026-02/16/content_474848.html)）。

这条线真正的赌注只有一句话：把权重送出去，换一个默认。

有个地方容易混。通义千问是产品名，Qwen 是模型系列，手机上那个 App 叫千问。三者在同一套权重上，但不是同一个东西。

## 技术路线

**全尺寸梯度。** 0.5B 到 Max，端侧到云，每一代都同时放小模型和大模型。这不是慷慨，是占位：小模型占住教程和玩具项目，大模型占住评测榜，中间那档占住「一张卡能跑」的预算。

**许可。** 多数版本 Apache 2.0，Qwen2.5 的 3B 和 72B 是例外（[Qwen](https://qwenlm.github.io/zh/blog/qwen2.5/)）。许可是它和 Llama 系拉开差距的地方之一。

**开源换生态。** 2025 年 2 月，Hugging Face 上基于 Qwen 的衍生模型破了 10 万，居首（[证券时报](https://www.stcn.com/article/detail/1545280.html)）；到 2026 年 1 月 21 日，整个家族累计下载破 10 亿次（[阿里巴巴](https://www.alibabagroup.com/document-1971445322303406080)）。

**推理线单开。** QwQ-32B 的意义不在分数，在于证明小参数加大规模强化学习这条路能走（[Qwen](https://qwenlm.github.io/zh/blog/qwq-32b/)）。

**架构。** Qwen3.5 换成线性注意力加稀疏 MoE 的混合结构，门控那一块的技术拿过 NeurIPS 2025 最佳论文（[科技日报](https://www.stdaily.com/web/gdxw/2026-02/16/content_474848.html)）。

代价也是清楚的：开源的那部分赚不到钱，闭源的 Max 撑上限。一个负责份额，一个负责毛利，两条腿不能同时迈。

## 现在谁在用

开发者。尺寸全、许可松、教程多，微调生态是开源里最厚的一层。一张卡跑 7B、四张卡跑 72B，是很多团队的第一课。

云厂商。阿里云百炼之外，海外的托管平台也陆续上架，因为客户会问一句「有没有 Qwen」。

海外创业公司。英文和多语言够用，许可比 Llama 宽松，换底座的成本最低。

C 端。千问 App 在 2026 年 3 月的财报里，月活超过 3 亿（[阿里巴巴](https://www.alibabagroup.com/document-1971445322303406080)），农历新年那几天帮着下了近 2 亿笔订单。

一句话：Qwen 的用户不是喜欢阿里的人，是想少花点钱的人。

## 预期寿命

**还能当默认多久。** 估计值 18 到 30 个月，从 2026 年 11 月算起，也就是到 2028 年上半年，它大概仍是「开源里第一个被想起来」的那一个。这是对生态位置的估计，不是对模型能力的估计。

**判断依据。** 用户在搬家，衍生模型从 10 万往上走，累计下载破了 10 亿；价格在跌，Qwen3.5-Flash 报到每百万 token 0.2 元（[央广网](https://tech.cnr.cn/techph/20260226/t20260226_527536604.shtml)）；生态在长，尺寸、许可、教程都在往「默认」那个方向堆；接口没在废，反而在兼容 OpenAI 的格式，这一条留住了人，也让它更难被换掉。

**过期的信号。** 一，下一代旗舰不再开源，只放 API；二，衍生模型的增速掉到个位数；三，许可从 Apache 2.0 退回自定义条款；四，主要托管平台开始默认推别家底座；五，中文评测不再是它的强项。

最后一条最值得盯。它起家靠中文，如果中文不再是护城河，剩下的就只有价格。

## 参考

- 阿里云：《阿里云推出全新 AI 大模型支持企业数智化转型》，2023-04-11，https://www.alibabacloud.com/tc/press-room/alibaba-cloud-unveils-new-ai-model-to-support，访问日期 2026-11-26
- 证券时报：《阿里千问衍生模型数量破 10 万 稳居全球最大开源模型榜首》，2025-02-25，https://www.stcn.com/article/detail/1545280.html，访问日期 2026-11-26
- Qwen：《Qwen3：思深，行速》，2025-04-29，https://qwenlm.github.io/zh/blog/qwen3/，访问日期 2026-11-26
- 新华网：《阿里通义发布 Qwen3-Max 旗舰模型》，2025-09-24，https://www.news.cn/tech/20250924/5bb4f5dfaf024fc7940a4170c42adbde/c.html，访问日期 2026-11-26
- 科技日报：《阿里发布新一代基础模型千问 3.5，除夕开源》，2026-02-16，https://www.stdaily.com/web/gdxw/2026-02/16/content_474848.html，访问日期 2026-11-26
- 阿里巴巴：《阿里加大 AI 投入奏效 云收入增长 36% 千问 C 端 MAU 突破 3 亿》，2026-03-19，https://www.alibabagroup.com/document-1971445322303406080，访问日期 2026-11-26
