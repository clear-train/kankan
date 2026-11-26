# OpenAI：把「下一个词」做成了产品

## 这一族怎么长出来的

2018 年 6 月，一份十几页的论文，《Improving Language Understanding by Generative Pre-Training》，一亿多参数，先在无标注文本上学，再拿少量标注微调（[arXiv](https://arxiv.org/abs/1806.06129)）。这是 GPT-1，当时没几个人当回事。

2019 年 2 月，GPT-2 把参数量放大一个量级，官方先说太危险，分阶段放权重（[Wikipedia](https://en.wikipedia.org/wiki/GPT-2)）。

2020 年 5 月，GPT-3，一千七百多亿参数。论文的结论不是「更大更好」，而是：不微调，只给几个例子，它就能干活（[arXiv](https://arxiv.org/abs/2005.14165)）。

2022 年 11 月 30 日，ChatGPT 上线。模型没换，换的是一个对话框（[OpenAI](https://openai.com/zh-Hant/index/chatgpt/)）。从这天起，这家公司的重心从「能力」挪到「入口」。

2023 年 3 月 14 日，GPT-4，从这一代起不再公布参数量（[OpenAI](https://openai.com/zh-Hant/index/gpt-4/)、[技术报告](https://arxiv.org/abs/2303.08774)）。

2024 年 9 月 12 日，o1：把「先想再答」写进训练目标，思考过程变成可计价的 token（[OpenAI](https://openai.com/zh-Hant/index/learning-to-reason-with-llms/)）。

2025 年 8 月 7 日，GPT-5，把快答和慢想合进一个入口（[OpenAI](https://openai.com/zh-Hant/index/introducing-gpt-5/)）。

2026 年 9 月 4 日，GPT-6 Astra 开始向部分客户推送（[AFP](https://today-prod.rtl.lu/news/business-and-tech/openai-begins-rollout-of-new-powerful-ai-model-gpt-6-astra-339298553)）；9 月 22 日，这一代补上 Sol 与 Luna 两个分支（[OpenAI](https://openai.com/zh-Hant/index/gpt-6-astra/)）。

另一条支线是视频。Sora 在 2024 年 2 月放出样片，2026 年 3 月 24 日宣布停服，应用 4 月 26 日关停（[Wikipedia](https://en.wikipedia.org/wiki/Sora_(text-to-video_model))）。官方通知没写理由，报道把它归到算力与成本。

## 技术路线

三件事：预训练、后训练、产品化。

预训练是读一遍互联网，学「下一个词」。这条路在 2020 年代中期开始变贵，瓶颈不是参数，是电和卡。到 GPT-4 这一代，规模数字干脆不再公布，因为数字本身已经不再是卖点。

后训练是教它按人的偏好回答，再往后是强化学习：给一个能自动判分的环境，让它自己练。o 系列之后，能力的主要增量长在这里，而不是长在参数量上。

产品化是第三条，最容易被忽略。同一套权重，它可以拆成三种卖法：接口卖给开发者，订阅卖给个人，合同卖给企业。三种价格，三种服务承诺，同一批卡。

开源这条，它拖得最久。直到 2025 年 8 月 5 日才第一次放出开放权重（gpt-oss），而且不是旗舰（[OpenAI](https://openai.com/zh-Hant/index/introducing-gpt-oss/)）。到 2026 年，旗舰仍然闭着。

## 现在谁在用

三类人：企业客户、开发者、订阅用户。

企业买的是合同、审计和接口稳定，不是榜单。2026 年 3 月底那轮融资的报道里，月收入约 20 亿美元，企业客户占四成（[The Straits Times](https://www.straitstimes.com/business/companies-markets/openai-valued-at-1-trillion-after-completing-157-billion-funding-round)）。

开发者买 API。理由很土：文档齐、模型全、出事有人回。价格每一代都在往下走，这是他们留下的真实原因。

个人买订阅。ChatGPT 是这个家族唯一真正进入日常生活的产品，其余都在它的影子里。订阅的钱不多，但它是所有企业销售的演示环境。

## 预期寿命

这一节全部是估计值，不是承诺。

还能当默认选择多久：2 到 3 年，大致到 2028 年前后。超过这个区间，任何判断都不值得写进书里。

判断依据三条。一，企业在搬家：迁移要重做审计和合同，周期以年计，所以默认选择的惯性比技术差距更耐放。二，价格在跌：开源权重每半年逼近一次，闭源的溢价只能靠「早一代」维持，早一代的窗口在变窄。三，生态在长：接口、SDK、企业集成越铺越深，用户越难走；可接口也在废，旧模型定期下线，这既是锁，也是逼人重估的提醒。

「更大会更好」什么时候开始失效：大致在 GPT-6 这一代之后。看 Astra 的发布稿就知道，宣传重心已经从「更大」挪到「更听话、更会操作电脑」（[OpenAI](https://openai.com/zh-Hant/index/gpt-6-astra/)）。这不是良心发现，是规模收益在递减。

过期的信号有四个：价格不再逐代下降；企业客户开始自建；旗舰发布不再领先半年；它自己开始把旗舰放权重。出现两个以上，这一节的判断就该重写。

## 参考

- arXiv：《Improving Language Understanding by Generative Pre-Training》，2018-06-11，https://arxiv.org/abs/1806.06129，访问日期 2026-11-26
- arXiv：《Language Models are Few-Shot Learners》，2020-05-28，https://arxiv.org/abs/2005.14165，访问日期 2026-11-26
- OpenAI：《Introducing ChatGPT》，2022-11-30，https://openai.com/zh-Hant/index/chatgpt/，访问日期 2026-11-26
- OpenAI：《GPT-4》，2023-03-14，https://openai.com/zh-Hant/index/gpt-4/，访问日期 2026-11-26
- OpenAI：《Learning to reason with LLMs》，2024-09-12，https://openai.com/zh-Hant/index/learning-to-reason-with-llms/，访问日期 2026-11-26
- OpenAI：《Introducing GPT-5》，2025-08-07，https://openai.com/zh-Hant/index/introducing-gpt-5/，访问日期 2026-11-26
- OpenAI：《Introducing gpt-oss》，2025-08-05，https://openai.com/zh-Hant/index/introducing-gpt-oss/，访问日期 2026-11-26
- OpenAI：《GPT-6 Astra: A new generation of intelligence》，2026-09-29 更新，https://openai.com/zh-Hant/index/gpt-6-astra/，访问日期 2026-11-26
- Wikipedia：《Sora (text-to-video model)》，2026，https://en.wikipedia.org/wiki/Sora_(text-to-video_model)，访问日期 2026-11-26
