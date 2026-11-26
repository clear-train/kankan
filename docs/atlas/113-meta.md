# Meta：把权重送出去，换回一个生态

## 这一族怎么长出来的

2023 年 2 月，LLaMA 论文上线（[arXiv](https://arxiv.org/abs/2302.13971)）。它换掉的是「大模型只能关在实验室里」这个默认，7B 到 65B 一共四档，只给研究用途。

一个月后，权重出现在公开论坛上，谁都能下载（[36氪](https://www.36kr.com/p/2159588915421193)）。它换掉的是许可的边界：纸面上的限制，遇上一个不认纸面的网络。

2023 年 7 月，Llama 2 发布，许可改成可商用（[Meta](https://about.fb.com/news/2023/07/llama-2/)）。它换掉的是「只能研究」这条线，让公司敢把它装进产品。

2024 年 4 月，Llama 3 用 15T token 训练，分词表换成 128K（[Meta](https://ai.meta.com/blog/meta-llama-3/)）。它换掉的是旧分词器带来的中文与代码劣势。

2024 年 7 月，Llama 3.1 放出 405B 版本，同时把「用输出训练别家模型」从禁止清单里划掉（[Meta](https://ai.meta.com/blog/meta-llama-3-1/)）。它换掉的是「开放权重只能自己玩」的旧规矩。

2025 年 4 月，Llama 4 换成稀疏混合专家架构，Scout 与 Maverick 各激活 17B 参数，另有更大的 Behemoth（[Meta](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)）。它换掉的是「参数越大越贵」的线性关系。

## 技术路线

第一条是开放权重，不是开源。许可里有月活超过七亿要单独申请、要标「Built with Llama」、要遵守可接受使用政策这些条款；训练数据与完整代码并不给（[许可原文](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE)）。词用得松，条款写得紧。

第二条是账本。模型不赚钱，广告赚钱。把权重送出去，是让「默认的底座」这四个字不落到别人手里，顺带把招人和生态绑在自己这侧。

第三条是路线转身慢了一拍。同行早就在用混合专家压推理成本，Llama 4 才跟上。2025 年 4 月的评测风波也在这里：对外测试时用的是实验版本，正式版本在同一榜单上排名更低（[TechCrunch](https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark/)）。

第四条是数据与部署上的真实分歧。它坚持只用公开可得的数据，代价是中文与专业领域的密度比不上堆私有语料的对手；它只发权重不发服务，代价是出问题时不归它修。

## 现在谁在用

云厂商：几家主流云都提供托管入口，按 token 收费，Meta 不参与分成。这条路上它更像标准制定者，不像收款方。

创业公司：一整套微调工具与教程是围着它长出来的，早期那两个著名项目就是拿它改的（[Alpaca](https://github.com/tatsu-lab/stanford_alpaca)）。

研究界与内网：论文里写「基于 Llama」比写「基于某闭源接口」更容易复现；医院、律所这类不方便把材料传出去的机构，也更愿意在自己机房里跑一个。

数字方面，官方没有公布按月的活跃使用量，只有下载次数这类口径，且各家统计不一致。

## 预期寿命

第一件，这张牌还能打多久。作为「默认的开源底座」，估计还有一到三年。这是估计值，不是统计值。

第二件，判断依据。用户在搬家——中文与多语场景里，Qwen、DeepSeek 的权重被下载得更多；价格在跌，托管 Llama 的毛利被压薄；生态在长，工具链开始同时支持多家；接口在废，旧版本停止维护会逼使用者换底座。

第三件，过期的信号。Llama 下一代若收紧许可或干脆闭源；主流微调仓库的默认配置从 Llama 换成别家；社区讨论从「怎么微调」变成「为什么还用它」。

也有一种可能：这张牌永远不失灵，因为它从来不是靠模型赚钱。广告每年付账，权重每年送一次，送十年也不算亏。真正会先过期的不是 Llama，是「开放权重等于开放」这句话。

## 参考

- Touvron 等：《LLaMA: Open and Efficient Foundation Language Models》，2023-02-27，https://arxiv.org/abs/2302.13971，访问日期 2026-11-26
- 36氪：《Meta 版 ChatGPT 惨遭「开源」？最新大模型 LLaMA 被泄露》，2023-03-06，https://www.36kr.com/p/2159588915421193，访问日期 2026-11-26
- Meta：《Llama 2: Open Foundation and Fine-Tuned Chat Models》，2023-07-18，https://about.fb.com/news/2023/07/llama-2/，访问日期 2026-11-26
- Meta：《Introducing Meta Llama 3》，2024-04-18，https://ai.meta.com/blog/meta-llama-3/，访问日期 2026-11-26
- Meta：《Introducing Llama 3.1: Our most capable models to date》，2024-07-23，https://ai.meta.com/blog/meta-llama-3-1/，访问日期 2026-11-26
- Meta：《The Llama 4 herd》，2025-04-05，https://ai.meta.com/blog/llama-4-multimodal-intelligence/，访问日期 2026-11-26
- Meta：《Llama 3.1 Community License Agreement》，https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE，访问日期 2026-11-26
- TechCrunch：《Meta's vanilla Maverick AI model ranks below rivals on a popular chat benchmark》，2025-04-11，https://techcrunch.com/2025/04/11/metas-vanilla-maverick-ai-model-ranks-below-rivals-on-a-popular-chat-benchmark/，访问日期 2026-11-26
