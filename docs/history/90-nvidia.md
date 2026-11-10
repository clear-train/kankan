# 英伟达：卖铲子的，最后成了股东

## 它的来路

1993 年 4 月 5 日，加州 Sunnyvale，三个人注册了一家公司。前一年冬天，他们在 Denny's 的一张桌子上把想法画完，其中一个人刚过完 30 岁生日（[Wikipedia](https://en.wikipedia.org/wiki/Nvidia)）。

他们做的是给游戏画图的芯片。1999 年 1 月 22 日上市，同年秋天发布 GeForce 256，第一次把「GPU」这个词摆进产品说明里。

2006 年，G80 架构出来，CUDA 跟着亮相；2007 年 2 月，SDK 对公众开放（[Wikipedia: CUDA](https://en.wikipedia.org/wiki/CUDA)）。从这一年起，显卡可以不画画，改去算矩阵。

2016 年 8 月，一台机箱被推进旧金山的一间办公室，那是第一台 DGX-1，收件人是成立不到一年的 OpenAI（[Fortune](https://fortune.com/2016/08/15/elon-musk-artificial-intelligence-openai-nvidia-supercomputer/)）。

## 当年为什么这么做

CUDA 在当年是一笔不划算的买卖。显卡的客户是游戏玩家，玩家不关心矩阵乘法；要让通用程序跑在显卡上，得重写编程模型、写库、养一群会用它的人。短期没有收入。

黄仁勋赌的是另一件事：算力会从「画图专用」变成「什么都用」。这个判断在当时没有数据支撑，只有一条直觉——如果计算迟早要并行，那把最难写的那层先写好的人，会收很久的租。

所以它真正卖的不是芯片，是「让并行计算不痛苦」的那层软件。芯片会过时，习惯不会。这是判断。

## 走对的和走岔的

走对的是 2012 年。多伦多那篇 AlexNet 论文里写得很平淡：两块 GTX 580（[论文](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)）。之后十年，想做模型的人发现，改几行代码就能把显卡当算盘用。到 2024 年，CUDA 开发者约 500 万（[Stanford GSB](https://www.gsb.stanford.edu/faculty-research/publications/nvidia-strategic-evolution-through-innovation)）。

走岔的是 Arm。2020 年 9 月，它宣布用 400 亿美元买下 Arm（[NVIDIA](https://nvidianews.nvidia.com/news/nvidia-to-acquire-arm-for-40-billion-creating-worlds-premier-computing-company-for-the-age-of-ai)），想连 CPU 的地基一起拿走。两年后交易终止（[WSJ](https://www.wsj.com/articles/nvidia-softbank-call-off-blockbuster-arm-deal-11644297283)，有付费墙）。买不成，它转身自己做整机。

还有一步是新的：它开始持股客户。2026 年 3 月，OpenAI 那轮 1220 亿美元融资里，它出了 300 亿（[The Straits Times](https://www.straitstimes.com/business/companies-markets/openai-valued-at-1-trillion-after-completing-157-billion-funding-round)）；Anthropic 上市前的 260 亿美元私募配售，名单里也有它（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）。

钱在「谁的算力订单」和「谁的股权」之间转了一圈。这是判断：收入与估值互为支撑，看谁先松手。

## 现在还剩什么

位置：它仍是那条默认的路。想训模型，先问卡从哪来；想省钱，先问能不能不用 CUDA。

习惯：每年一场 GTC，把两年后的路线图提前贴出来，让客户按它的节奏排预算。

风险：这一轮的定价建立在「模型会更大」上。一旦需求转向「更省」，最贵的那部分卡会最先被重新定价——需求没消失，价格先动。

## 饭桌上怎么说

- **同事局**：「它不赌哪个模型赢，只赌每个模型都得用同一把铲子。」
- **老板局**：「我们买的是卡，付的是生态的钱，续费的是习惯。」
- **亲戚局**：「淘金的人换了一茬又一茬，卖铲子的还在原地数钱。」

## 时间线

- 1993 年 4 月 5 日，公司在加州成立（[Wikipedia](https://en.wikipedia.org/wiki/Nvidia)）。
- 1999 年 1 月上市；同年 GeForce 256 让「GPU」成了品类名（[Wikipedia](https://en.wikipedia.org/wiki/Nvidia)）。
- 2007 年 2 月，CUDA SDK 公开发布（[Wikipedia: CUDA](https://en.wikipedia.org/wiki/CUDA)）。
- 2012 年，AlexNet 用两块 GTX 580 训出来（[论文](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)）。
- 2016 年 8 月，第一台 DGX-1 交付 OpenAI（[Fortune](https://fortune.com/2016/08/15/elon-musk-artificial-intelligence-openai-nvidia-supercomputer/)）。
- 2020 年 9 月宣布 400 亿美元收购 Arm，2022 年 2 月终止（[NVIDIA](https://nvidianews.nvidia.com/news/nvidia-to-acquire-arm-for-40-billion-creating-worlds-premier-computing-company-for-the-age-of-ai)）。
- 2023 年 5 月市值触及 1 万亿，2024 年 6 月越过 3 万亿，2025 年 10 月 29 日越过 5 万亿（[Yahoo Finance](https://finance.yahoo.com/news/nvidia-touches-1-trillion-market-cap-as-chipmaker-rides-ai-wave-133530381.html)、[CNBC](https://www.cnbc.com/2024/06/06/cnbc-daily-open-nvidia-tops-3-trillion.html)、[CNBC](https://www.cnbc.com/2025/10/29/nvidia-on-track-to-hit-historic-5-trillion-valuation-amid-ai-rally.html)）。
- 2026 年 3 月，参与 OpenAI 那轮融资，出资 300 亿（[The Straits Times](https://www.straitstimes.com/business/companies-markets/openai-valued-at-1-trillion-after-completing-157-billion-funding-round)）。

## 参考

- Wikipedia：《Nvidia》. https://en.wikipedia.org/wiki/Nvidia（访问于 2026-11-10）.
- Wikipedia：《CUDA》. https://en.wikipedia.org/wiki/CUDA（访问于 2026-11-10）.
- Alex Krizhevsky、Ilya Sutskever、Geoffrey Hinton：《ImageNet Classification with Deep Convolutional Neural Networks》，NeurIPS 2012. https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf（访问于 2026-11-10）.
- Fortune：《Elon Musk's Artificial Intelligence Project Just Got a Free Supercomputer》，2016-08-15. https://fortune.com/2016/08/15/elon-musk-artificial-intelligence-openai-nvidia-supercomputer/（访问于 2026-11-10）.
- The Wall Street Journal：《Nvidia, SoftBank Call Off Blockbuster Arm Deal》，2022-02-08. https://www.wsj.com/articles/nvidia-softbank-call-off-blockbuster-arm-deal-11644297283（访问于 2026-11-10）.
- CNBC：《Nvidia becomes first company to reach $5 trillion valuation》，2025-10-29. https://www.cnbc.com/2025/10/29/nvidia-on-track-to-hit-historic-5-trillion-valuation-amid-ai-rally.html（访问于 2026-11-10）.
