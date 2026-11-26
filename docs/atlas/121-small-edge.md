# 小模型：端侧那批不上新闻的

## 这一族怎么长出来的

端侧模型不是新东西。手机早就跑过语音唤醒、相册分类、输入法联想，那些都是几十兆的专用小网络。变化发生在 2024 年前后：小模型不再是大模型压扁后的残渣，而是从第一天就照着设备的预算设计的另一族。

第一步是「同一套配方，缩到小尺寸」。[Qwen2.5](https://qwenlm.github.io/blog/qwen2.5/) 在 2024 年 9 月一次放出从 0.5B 到 72B 的一整排，小尺寸和大尺寸用同一批数据、同一套后训练，除个别规格外都是 Apache 2.0。这件事的意义不在分数，在于开发者第一次可以拿同一份代码、同一个提示词，从手机试到机房。

第二步是「为内存重新设计架构」。[Gemma 3n](https://developers.googleblog.com/en/introducing-gemma-3n/) 在 2025 年 5 月放出预览版，原始参数量是 5B 与 8B 这一档，但靠逐层嵌入、KV 共享这些手法，运行时的内存开销只相当于 2B 到 4B，官方给的说法是 2GB 与 3GB 的动态占用。它是和手机芯片厂商一起设计的，目标写在名字里：mobile-first。

第三步是「数据比参数更值钱」。[Phi-3](https://arxiv.org/abs/2404.14219) 在 2024 年 4 月的技术报告标题就直接写「能跑在你手机上的语言模型」，走的是筛教科书级数据、再把小模型喂饱的路子，参数不大，考试分数不低。

同一时间还有两条支线。一条往更小走：[SmolLM2](https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct) 做了 135M、360M、1.7B 三档，其中 360M 用 4 万亿 token 训练，目标就是浏览器和开发板。另一条往架构搜索走：[LFM2](https://www.liquid.ai/blog/lfm2-advancing-open-science-in-ai) 在 2025 年 12 月发布技术报告，把「硬件在环」写进方法，先在目标设备上量延迟，再决定网络长什么样。

再加上平台方自己下场：[苹果的端侧基座模型](https://machinelearning.apple.com/research/apple-foundation-models-2025-updates)在 2025 年 6 月公开，约 30 亿参数，权重压到每权 2 位，配一个给开发者的框架，让 App 直接调用。手机厂商的 NPU 从这时起成了隐形甲方——模型能不能上，取决于算子支不支持。

## 技术路线

蒸馏是把大模型的能力挪进小模型的主要办法。老师给的不是答案，是整个词表上的概率分布，学生学的是「为什么这个词比那个词更可能」。这比只对标准答案要信息量大得多，也更容易学歪：老师犹豫的地方，学生学成了自信。

量化是把权重从高位宽压到低位宽。4 位是常见档，2 位是激进档，苹果端侧走的就是 2 位，并且是在训练时就把量化误差算进去——叫量化感知训练。压完总要掉点分，通常再补一个小适配器把损失捞回来。

稀疏与嵌套是第三条路。混合专家让每次只激活一部分参数；嵌套结构让一个模型里装着好几个可裁剪的子模型，设备弱就少开几层。Gemma 3n 的「一个模型里套一个更小的模型」就属于这一类。

最后是推理框架。模型文件只是权重，能不能跑起来看运行时：手机上有各家的端侧运行时，桌面上是 llama.cpp、MLX 这一批，边缘设备上是 ExecuTorch 之类。真正的天花板不是算力，是内存带宽和发热——跑得快不快，常常取决于权重多久能搬进计算单元一次。

## 现在谁在用

手机是最先落地的。输入法的续写、相册的语义搜索、通话摘要、离线翻译，这些功能的特点是频繁、短、等不起网络。

车机是第二块。语音指令要在隧道里也能用，空调和导航的响应不能靠信号格。

PC 本地是第三块。本地笔记检索、代码补全、把一份合同丢进去问问题，卖点是数据不出机器。

还有一类不声张的：医院、律所、工厂质检。它们不是买不起云端，是不允许把原始材料传出去。端侧模型在这些地方卖的不是智能，是免责。

## 预期寿命

这一族的换代节奏比云端更快还是更慢，我的判断是：模型这一层的迭代更快，部署这一层的迭代更慢。给区间的话，社区侧 6 到 12 个月一换，量产设备侧 18 到 30 个月一换（估计值）。

依据有两条反向的力。一边在加速：同一块 NPU 上换模型几乎零成本，权重开源、格式趋同、评测公开，谁快谁被用；厂商为了让新机有卖点，也会催着换。一边在拖住：手机系统级的模型接口一改，认证和适配要重来；车规和医疗的验证周期更长；预装模型和系统版本绑死，用户不升级系统就不会换。

过期的信号不难认。新机发布会只讲「AI 能力」不讲具体模型名，说明模型已经变成零件；模型卡不再公布内存占用和首字延迟，说明它不再为端侧设计；你手上的量化工具链对新模型的算子报错，说明生态没跟上；教程作者开始写「如何在旧设备上继续用上一代」，说明这一代已经翻篇。

## 参考

- Qwen Team：《Qwen2.5: A Party of Foundation Models》，2024-09-19，https://qwenlm.github.io/blog/qwen2.5/ ，访问日期 2026-11-26
- Google Developers Blog：《Announcing Gemma 3n preview: powerful, efficient, mobile-first AI》，2025-05-20，https://developers.googleblog.com/en/introducing-gemma-3n/ ，访问日期 2026-11-26
- Abdin 等：《Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone》，2024-04-23，https://arxiv.org/abs/2404.14219 ，访问日期 2026-11-26
- Hugging Face：《SmolLM2-360M-Instruct 模型卡》，2024，https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct ，访问日期 2026-11-26
- Liquid AI：《LFM2: Advancing Open Science in AI》，2025-12-01，https://www.liquid.ai/blog/lfm2-advancing-open-science-in-ai ，访问日期 2026-11-26
- Apple Machine Learning Research：《Updates to Apple's On-Device and Server Foundation Language Models》，2025-06-09，https://machinelearning.apple.com/research/apple-foundation-models-2025-updates ，访问日期 2026-11-26
