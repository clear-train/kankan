# 大与小：分界线一直在动

## 这一族怎么长出来的

2019 年，15 亿参数的 GPT-2 被当成危险品，发布时分阶段放出（[OpenAI](https://openai.com/index/better-language-models/)）。一年后，1750 亿参数的 GPT-3 交卷，那阵子「大」是一个能印在标题上的数（[论文](https://arxiv.org/abs/2005.14165)）。

2023 年，这条线掉下来一次。LLaMA 放出 7B 到 65B 的权重，7B 这一档第一次能在单张消费级显卡上跑起来（[论文](https://arxiv.org/abs/2302.13971)）。「大」从机房属性，变回一个能用价格衡量的东西。

同年年底，稀疏激活把这笔账拆开。Mixtral 8x7B 总参数 47B，每个 token 只用 13B（[论文](https://arxiv.org/abs/2401.04088)）。参数第一次分成两个数：橱窗里那个，和收银台那个。

2024 年起，蒸馏与量化把大模型往小设备里塞。苹果的端侧模型约 30 亿参数，跑在手机上（[论文](https://arxiv.org/abs/2407.21075)）；4 bit 量化成了常见选项（[Transformers 文档](https://huggingface.co/docs/transformers/main/en/quantization/overview)）。

到 2026 年，两个数彻底分家。文心 5.5 Flash Preview 总参约 2800 亿，每 token 激活约 140 亿（[TechWeb](https://m.techweb.com.cn/article/2026-11-24/2980831.shtml)）；中国电信的星辰 Xing4.0-29B-A4B 总参 29B，激活 4B（[新浪财经](https://finance.sina.com.cn/jjxw/2026-09-18/doc-inisfyez0312418.shtml)）。名字里的数字，开始说明不了什么。回头看，动的不是数字，是「什么算贵」的定义：从买卡，到买 token，再到买一台能装下的机器。

## 技术路线

三条线互相拉扯。

参数规模买的是容量：知识面、长尾、跨领域的迁移。它买到的是上限，不是每次都兑现。到某个量级，加参数的边际收益变薄，显存和带宽的账照涨。

稀疏激活买的是「账面大、实际小」。总参数装知识，激活参数决定算多少。代价写在工程里：显存要装下全部专家，路由与通信变复杂，批量小了反而不划算。所以 MoE 省的是算力，不是显存。

成本这条线最硬。训练是一次性巨额支出，推理是每天付的钱。量化把权重压小，蒸馏把老师的行为压进学生，两样都降推理成本，也都掉一点上限。没有白给的部分。

三条线也不是并列的，是互相借债。稀疏要多装显存，量化把显存还回来；蒸馏要一个训好的老师，老师本身要钱；参数要卡，卡要电。谁借得多，谁的分界线就画得低。

分界线不是谁宣布的，是被账单推着走的。

## 现在谁在用

为「大」付钱的是云端。超大 MoE 关在机房里，按 token 卖，客户是 API 调用方和平台方，托管入口诸如 Bedrock 与 Azure AI Foundry 把这件事做成按钮（[AWS](https://aws.amazon.com/bedrock/)、[Microsoft](https://azure.microsoft.com/en-us/products/ai-foundry)）。

为「小」付钱的是端侧与私有化。手机和 PC 上跑 30 亿级模型，行业客户把 30B 级 MoE 塞进自己的机房。星辰这类模型从设计起就冲着国产算力与工程任务，而不是榜单。

最难的是中间那层：不上不下的稠密模型，大模型比它强，小模型比它便宜，两头都不占。

端侧愿意付钱，理由不是便宜，是数据不出机器，以及延迟低到不用等。私有化愿意付钱，理由是接口能改、版本能钉住。这两条理由，云端都给不了。

折扣、装机量、私有化合同额，官方多不公布，这里不猜。

## 预期寿命

1. 还能当默认选择多久：「多大算大」这条线，我估计 18 到 30 个月内还会再动一次；「参数竞赛」这个说法，2 到 3 年内退成历史词的概率更大。这是估计值，不是统计值。
2. 判断依据：单一数字已经被拆成两个，采购口径正从「多少 B」转向「每 token 多少钱」；量化与蒸馏让小模型吃掉中号模型的活；显存与带宽决定可部署上限，比参数更能决定谁能用。
3. 过期的信号：发布会只报激活参数与单价、不报总参数；主流开源发布默认附 4 bit 权重；端侧模型成为默认入口；「多少 B」从技术报告挪到营销页；某个中号稠密模型家族停更。

## 参考

- OpenAI：《Better Language Models and Their Implications》，2019-02-14，https://openai.com/index/better-language-models/，访问日期 2026-11-26
- Brown 等：《Language Models are Few-Shot Learners》，2020，https://arxiv.org/abs/2005.14165，访问日期 2026-11-26
- Touvron 等：《LLaMA: Open and Efficient Foundation Language Models》，2023，https://arxiv.org/abs/2302.13971，访问日期 2026-11-26
- Jiang 等：《Mixtral of Experts》，2024，https://arxiv.org/abs/2401.04088，访问日期 2026-11-26
- Apple：《Apple Intelligence Foundation Language Models》，2024，https://arxiv.org/abs/2407.21075，访问日期 2026-11-26
- TechWeb：《百度文心 5.5 Flash Preview 正式开源，2800 亿参数模型面向全球开发者开放》，2026-11-24，https://m.techweb.com.cn/article/2026-11-24/2980831.shtml，访问日期 2026-11-26
- 新浪财经：《首个全栈国产轻量级智能体大模型 Xing4.0-29B 发布》，2026-09-18，https://finance.sina.com.cn/jjxw/2026-09-18/doc-inisfyez0312418.shtml，访问日期 2026-11-26
