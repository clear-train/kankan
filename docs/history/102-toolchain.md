# 工具链：模型之外，那些真的在赚钱的中间商

## 它的来路

模型做出来是一回事，让它在别人的机器上跑起来是另一回事。2022 年之后，这一层长出三种生意：把模型跑快的引擎、把模型收拢起来的仓库、给模型排座的榜单。

引擎那条线，2023 年由一个伯克利的研究组做出来，叫 vLLM。它解决的是显存浪费：每个请求的缓存要按最大可能长度预留，空着的部分也占着地方。他们借了操作系统的分页思路，做出 PagedAttention（[论文](https://arxiv.org/abs/2309.06180)），同一块卡，能同时喂饱更多请求。

仓库那条线更早。Hugging Face 2016 年成立时做聊天机器人，后来转向模型与数据集的托管，Transformers 把各家框架的模型收进同一套接口（[论文](https://arxiv.org/abs/1910.03771)）。模型越多，这个仓库越像必须路过的地方。

榜单那条线，2023 年 5 月由 LMSYS 开张：匿名对战、用户投票、Elo 排分（[博客](https://www.lmsys.org/blog/2023-05-03-arena/)）。它解决的是另一个问题，厂商自己发的跑分，没人信了。

## 当年为什么这么做

三层生意有一个共同的算盘：不赌哪个模型赢，赌这行要用电。

训练是一次性巨额支出，推理是每天都要付的账单。谁能把这笔账单做小，谁就能从省下的钱里抽一份。引擎卖吞吐，仓库卖省事，榜单卖选型时的判断依据。

具体动机各有各的。vLLM 的动机写在论文里：缓存浪费让并发上不去，长上下文尤其吃亏。Hugging Face 的动机是网络效应，模型和数据都摆在一处，下载、试用、比较的成本就低。Arena 的动机更直接，公开榜单出来，模型发布会多了一道必答题。

三层都不生产模型。这是它们能活下来的原因，也是天花板所在。

## 走对的和走岔的

走对的是「卖省」这件事。省显存、省部署时间、省选型时间，都是真金白银，也不随某一家模型倒闭而消失。

走岔的第一处，是同质化。推理引擎的优化说到底是工程技巧，谁都能学。2025 年 5 月，vLLM 和 DeepSpeed 一起并进 PyTorch 基金会（[公告](https://pytorch.org/blog/press-release-pytorch-foundation-expands-welcomes-projects-vllm-deepspeed/)），成了标准件。标准件的意思是，好用，但不值钱。

第二处，是被上游收编。云厂商把托管推理做成默认功能：Bedrock 里点一下就能调模型（[AWS](https://aws.amazon.com/bedrock/)），Azure 的 AI Foundry 是同一套思路（[Microsoft](https://azure.microsoft.com/en-us/products/ai-foundry)）。中间商做的按钮，最后变成平台自带的按钮。

第三处，是榜单的账。免费榜靠流量，定制评测向被测方收费。出钱的人和被评的人常常是同一批。这不是谁的道德问题，是这门生意的结构。

所以那句话说起来不好听：模型越像水电，卖水表的人越稳，可水表是公用的，谁都能装。

## 现在还剩什么

三条腿都还在，只是形状变了。引擎成了基础设施的默认件，很少有人单独为它付钱。Hugging Face 成了模型的集散地，收入靠企业版和托管服务（[企业服务](https://huggingface.co/enterprise)）。榜单成了发布会的必需品，每发一个模型，都要贴一张排名。

真正在赚钱的，不是技术最难的那家，是离采购决策最近的那家。企业买模型，先看榜，再看托管在哪，最后才看价格。

代价也清楚：工具层的护城河浅，天花板低，拼到最后是生态位置，不是代码写得多漂亮。

## 饭桌上怎么说

- **同事局**：「这行最稳的生意是卖铲子，不是挖金子。」
- **老板局**：「模型会换，账单不会。谁把账单做小，谁收钱。」
- **亲戚局**：「淘金的不一定赚，卖水的和修路的先赚。」

## 时间线

- 2016：Hugging Face 成立，最初做聊天机器人（[Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)）。
- 2023：vLLM 与 PagedAttention 的论文发表（[论文](https://arxiv.org/abs/2309.06180)）。
- 2023-05：LMSYS 上线 Chatbot Arena（[博客](https://www.lmsys.org/blog/2023-05-03-arena/)）。
- 2025-05：vLLM 并入 PyTorch 基金会（[公告](https://pytorch.org/blog/press-release-pytorch-foundation-expands-welcomes-projects-vllm-deepspeed/)）。

## 参考

- Kwon 等：《Efficient Memory Management for Large Language Model Serving with PagedAttention》，2023。https://arxiv.org/abs/2309.06180（访问于 2026-11-11）
- Wolf 等：《Transformers: State-of-the-Art Natural Language Processing》，2020。https://arxiv.org/abs/1910.03771（访问于 2026-11-11）
- LMSYS：《Chatbot Arena: Benchmarking LLMs in the Wild with Elo Ratings》，2023-05-03。https://www.lmsys.org/blog/2023-05-03-arena/（访问于 2026-11-11）
- PyTorch Foundation：《PyTorch Foundation Expands to Umbrella Foundation and Welcomes vLLM and DeepSpeed Projects》，2025-05-07。https://pytorch.org/blog/press-release-pytorch-foundation-expands-welcomes-projects-vllm-deepspeed/（访问于 2026-11-11）
- AWS：《Amazon Bedrock》。https://aws.amazon.com/bedrock/（访问于 2026-11-11）
- Hugging Face：《Enterprise》。https://huggingface.co/enterprise（访问于 2026-11-11）
