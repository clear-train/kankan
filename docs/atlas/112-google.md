# Google：零件都发明了，整机一路迟到

## 这一族怎么长出来的

2017 年 6 月，一篇叫《Attention Is All You Need》的论文上线（[arXiv](https://arxiv.org/abs/1706.03762)）。它换掉的是「必须按顺序读」的循环结构，让训练可以摊到几千块芯片上同时进行。

2018 年 10 月，BERT 出来（[arXiv](https://arxiv.org/abs/1810.04805)）。它换掉的是「只能从左往右猜下一个词」的预训练目标，改成两边都看。今天所有模型都还在用这个姿势。

2023 年 12 月，Gemini 1 发布（[Google 博客](https://blog.google/technology/ai/google-gemini-ai/)）。它换掉的是 Google 内部各做各的模型，把 Ultra、Pro、Nano 收进一个家族。

2024 年 2 月，Gemini 1.5 把上下文推到百万 token 级（[Google 博客](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)）。它换掉的是「上下文是稀缺资源」这个前提，长文档第一次可以整份塞进去。

2024 年 12 月到 2025 年 11 月，Gemini 2.0、2.5、3 依次发布（[2.0](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)、[2.5](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)、[3](https://blog.google/products/gemini/gemini-3/)）。这一轮换掉的是「模型只负责回答」，改成先想一会儿、再调工具。

## 技术路线

第一条分歧是研究还是产品。Transformer 和 BERT 是论文，不是商品；把注意力机制变成聊天框的，是别人。Google 有最好的零件，整机却总是晚一季。

晚一季的原因不在实验室，在考核表。论文奖励「第一次」，产品奖励「不出错」；发布时错一个事实会被截图记一年，论文里错一处只等同行引用一次。两套标准养出两种人。

第二条是产品线彼此抢位置。助手、搜索、Workspace 各有一套入口，AI 答案一多，搜索的广告位就少。这不是技术问题，是账本问题。

第三条是算力。它从 2015 年起就在数据中心里跑自研的 TPU（[ISCA 论文](https://arxiv.org/abs/1704.04760)），2025 年 4 月又发了面向推理的 Ironwood（[Google 博客](https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/)）。自己造铲子的人，不太怕别人断供。

第四条是它也留了一条开放权重的腿。2024 年 2 月 Gemma 放出（[Google 博客](https://blog.google/technology/developers/gemma-open-models/)），给那些不肯把数据交给云的人一个台阶。

## 现在谁在用

自己家里：Gemini App 是面向普通人的入口；Workspace 把模型塞进文档和邮件侧栏，写初稿、总结长邮件，办公室里最不缺这种活。

云上：企业通过 Vertex 这类接口调用，按 token 结算。企业掏钱的顺序和评测榜单几乎无关，先看合同、审计、数据放哪儿，最后才看分数。

官方没有公布单独的付费用户数，对外只有「多少开发者在用」这类口径。

最该看的是别人家。2026 年 1 月，苹果与 Google 达成多年协议，用 Gemini 支撑 Siri（[CGTN 转路透](https://news.cgtn.com/news/2026-01-13/Apple-and-Google-strike-AI-deal-to-use-Gemini-for-Siri-1JTYhLsxjaM/p.html)）。这是这一族最新的位置：不是卖给你，是卖给你的手机厂。

## 预期寿命

第一件，还能当默认选择多久。作为「别人的供应商」，估计还能走两到四年。这是估计值，不是统计值。

第二件，判断依据。用户在搬家——开发者换一家 API 常常只是改一行地址；价格在跌，能力差距在缩小；生态在长，TPU 与云合同把客户粘在合同期里；接口在废，旧版本按季度下线，逼着人做选择。

第三件，过期的信号。看到这三样就该更新：苹果这类客户开始拿自研模型替换；版本号从「能力升级」变成「合规升级」；财报里 TPU 对外销售超过模型收入。

还有一种结局不好不坏：它变成电力公司。没人夸发电厂聪明，但所有人按月付账。这条路走得通，只是再也不上头条。

## 参考

- Vaswani 等：《Attention Is All You Need》，2017-06-12，https://arxiv.org/abs/1706.03762，访问日期 2026-11-26
- Devlin 等：《BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding》，2018-10-11，https://arxiv.org/abs/1810.04805，访问日期 2026-11-26
- Google：《Introducing Gemini: Google's most capable AI model yet》，2023-12-06，https://blog.google/technology/ai/google-gemini-ai/，访问日期 2026-11-26
- Google：《Introducing Gemini 1.5, Google's next-generation AI model》，2024-02-15，https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/，访问日期 2026-11-26
- Google：《Gemini 3: Introducing the latest Gemini AI model from Google》，2025-11-18，https://blog.google/products/gemini/gemini-3/，访问日期 2026-11-26
- Jouppi 等：《In-Datacenter Performance Analysis of a Tensor Processing Unit》，2017，https://arxiv.org/abs/1704.04760，访问日期 2026-11-26
- CGTN：《Apple and Google strike AI deal to use Gemini for Siri》，2026-01-13，https://news.cgtn.com/news/2026-01-13/Apple-and-Google-strike-AI-deal-to-use-Gemini-for-Siri-1JTYhLsxjaM/p.html，访问日期 2026-11-26
