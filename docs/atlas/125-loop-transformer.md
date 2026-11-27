# 循环层：把深度换成循环，账单落在推理那一栏

## 这一族怎么长出来的

2018 年，Universal Transformer 把同一组参数在深度方向上重复使用，配一个「想够了就停」的自适应停机机制，在 bAbI 上把错误率从 22.1% 压到 0.29%（[论文](https://arxiv.org/abs/1807.03819)）。那是个 6500 万参数的模型，想说的一句话是：深度可以不靠堆参数买。

接下来六年这条线基本没声音，原因很土：参数到几百亿这个量级，堆层数比调循环便宜，也没人愿意为「深度与参数量解耦」承担训练不稳的代价。

2025 年 2 月，Huginn 把这条路重新推上台面：3.5B 稠密参数、800B token、训练时循环次数随机（平均 32 次）、推理时可多可少（[论文](https://arxiv.org/abs/2502.05171)）。同一个模型在 ARC-E 上从 4 次循环的 49.1% 涨到 32 次的 69.9%。代价同时暴露：闭卷知识弱，推理成本高。

2026 年 7 月，Loopie 第一次在算力匹配下赢了：20B-A2B 的 MoE 骨干、逐层循环两轮，按实测步时对齐，800B token 后反超 Qwen3-30B-A3B 的复现版（[论文](https://arxiv.org/abs/2607.16051)）。两个月后 SMELT 把它做成扩展律：只循环中间一半的层两轮，三重匹配下省 6.8% 到 18% 的训练算力（[论文](https://arxiv.org/abs/2609.01343)）。

同年 9 月，The Information 报道 GPT-6 Astra 用了循环深度，OpenAI 没公开细节，关于它的一切说法只能当推断。

## 技术路线

真正的分歧有三处，都不在「循环几次」上。

**循环哪一段。** 整模型循环（Huginn）把首尾层也重复了，而首尾层负责嵌入与读出，特化程度最高，重复它们等于让负责签名的人去搬货。于是路线一路往中间收：SMELT 只循环中间一半，Loopie 逐层循环。多条独立工作把最优窗口指在相对深度 43% 到 71% 之间，众数在中间。中段层同质，可以复用；首尾层不行。

**轮次和位置怎么分开编码。** 并行循环那一支（PLT）让上一轮的状态右移一位，好处是各轮可以并行算，代价是每一轮都收一笔固定的位置税。常见说法「循环两次就够，三次以上要回退」出自这里——那是这个设计的税，不是循环的性质。Huginn 一路加到 32 次还在涨。

**注意力怎么分工。** 这是最容易被忽略、也最像工程常识的一条。循环把「深」做便宜之后，注意力那笔平方成本就成了主项，于是三件事同时发生。

第一，混合算子要便宜。有工作只循环序列混合器、前馈层只走一次，就能留下四成收益（转述自综述，未找到原文，只当旁证）。

第二，感受野要随轮次扩张，而不是把同一段窗口看两遍。线性注意力在循环里能逐轮精化记忆，稀疏注意力能逐轮扩大视野；深度已经用循环买到了，就不必再用平方买长度。

第三，跨轮的键值记忆不能一刀切共享。Looped Latent Attention 发现跨循环的 KV 轨迹本身低秩，用 SVD 编码器做 32 倍近无损压缩，一张 H200 上把 Ouro-1.4B 的批容量从 32 提到 768（[论文](https://arxiv.org/abs/2607.15456)）。但近窗口的 KV 共享在 1.4B 模型上失败（[负结果](https://arxiv.org/abs/2610.34436)），代价取决于后面几轮收敛到什么程度。能被复用的不是所有 KV，是已经收敛的那部分。只缓存最后一轮 KV 的做法已经进了开源权重（[Dory1.0-4B](https://arxiv.org/abs/2611.03998)）。

顺带说清最容易被夸大的地方：一次循环值多少份独立参数，有工作量到指数 0.46，截断反传下 0.38（[论文](https://arxiv.org/abs/2610.26030)）。所以「用循环省参数」在等算力下必输。Loopie 赢的不是这个账：循环省下的是激活显存，显存换来更大的 micro-batch，再换来更宽的模型。这是基础设施的红利，纸面 FLOPs 看不见。

## 现在谁在用

付钱的目前不是推理侧，是训练侧：省下的训练算力由集群兑现，账很干净。推理侧相反，没有一篇论文同时报清训练步时、推理延迟与 KV 峰值，采购方也就没法拿它谈价。

开源家族已经有六个：Huginn、Ouro、LoopCoder-v2、Loopie、Nanbeige4.2-3B、Dory1.0-4B。服务栈也动了手：SGLang 里的 LoopVQ 把 Ouro 的服务吞吐最多提到 6.1 倍（[论文](https://arxiv.org/abs/2611.05304)），vLLM 的 LoopKV 融合内核在 Ouro-1.4B 上拿到 1.7 到 2.2 倍的有效吞吐（[论文](https://arxiv.org/abs/2611.04137)）。但这些都是内核级补丁，不是默认路径，装起来还要自己改缓存语义。

还有一条没人愿意公开说的成本：后训练与安全适配要按深度重做。同一个循环模型只跑到一半深度，数学还留 89%，愿意协助有害请求的比例涨到 5.3 倍；在随机深度上训练能把各深度的拒答找回来（[论文](https://arxiv.org/abs/2610.15218)）。「想跑几轮就跑几轮」，在安全上不成立。

## 预期寿命

1. 还能当默认选择多久：作为架构组件，我估计 3 到 5 年内会出现在一部分旗舰模型里，形态是「中段循环、两轮、MoE 骨干」；作为发布会上的名词，12 到 24 个月就会被叫滥。这是估计值，不是统计值。
2. 判断依据：训练侧的胜绩已成立，且优势不随规模消失；服务栈已有可用内核；缺的是推理账，以及四次以上在等算力下能不能赢（只有小规模数据点）。第三件决定它是「默认」还是「配件」。
3. 过期的信号：新旗舰的架构报告里出现循环深度字样并给出轮次；论文开始固定同时报训练步时、推理延迟与 KV 峰值；「只缓存最后一轮 KV」从技巧变成框架默认；「循环两次」这句话不再被人当结论引用；某一族的下一代直接放弃循环、回到稠密堆层。

## 参考

- Dehghani 等：《Universal Transformers》，2018，https://arxiv.org/abs/1807.03819，访问日期 2026-11-27
- Geiping 等：《Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach》，2025，https://arxiv.org/abs/2502.05171，访问日期 2026-11-27
- IQuest 等：《Loop the Loopies!》，2026，https://arxiv.org/abs/2607.16051，访问日期 2026-11-27
- 《SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers》，2026，https://arxiv.org/abs/2609.01343，访问日期 2026-11-27
- 《Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers》，2026，https://arxiv.org/abs/2607.15456，访问日期 2026-11-27
- 《Recency Is the Wrong Axis: A Negative Result on Windowed Deepest-Plane KV Caching in Looped Language Models》，2026，https://arxiv.org/abs/2610.34436，访问日期 2026-11-27
- 《Dory1.0-4B: A Looped Normalized-GPT》，2026，https://arxiv.org/abs/2611.03998，访问日期 2026-11-27
- 《Truncate or Not? A Scaling Study of Looped Transformers with Truncated Backpropagation》，2026，https://arxiv.org/abs/2610.26030，访问日期 2026-11-27
- 《Looping Beyond Twice: A Scalable Recipe for Looped Mixture-of-Experts》，2026，https://arxiv.org/abs/2610.01153，访问日期 2026-11-27
- 《Running Fewer Loops Removes Refusal Behaviour in Recurrent-Depth Language Models》，2026，https://arxiv.org/abs/2610.15218，访问日期 2026-11-27
- 《LoopVQ: Sub 1-bit KV Cache Quantization for Looped Transformers》，2026，https://arxiv.org/abs/2611.05304，访问日期 2026-11-27
- 《LoopKV: Loop-Aware KV Cache Compression for Serving Looped Transformers》，2026，https://arxiv.org/abs/2611.04137，访问日期 2026-11-27
