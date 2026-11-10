# 2012 年那场比赛：机器第一次看懂了图

## 它的来路

2009 年，李飞飞团队在 CVPR 上发了一篇数据集论文，题目直白得像仓库清单：ImageNet，一个大规模的分层图像数据库（[论文](https://ieeexplore.ieee.org/document/5206848)）。图是从网上收的，标签是众包打的，一千四百多万张，两万多个类别。

在此之前，图像识别的数据集是几万张的量级。模型在训练集上能背到九十几分，换一批图就掉下去。大家心里清楚，瓶颈不在算法，在题太少。

2010 年起，这个数据集办了一场比赛，ILSVRC：一千个类别，一百多万张训练图，考 top-5 错误率——给五个答案，蒙对一个就算过。

头两年，冠军用的还是人工设计的特征加传统分类器，错误率两成多。

## 当年为什么这么做

2012 年，一个叫 AlexNet 的网络把 top-5 错误率打到 15.3%，第二名 26.2%（[Wikipedia 的历届结果表](https://en.wikipedia.org/wiki/ImageNet)）。一年跌掉十个百分点，而此前每年只跌一两个点。

这个网络本身没有新东西。卷积、池化、反向传播，八十年代末就有人做（[LeNet](http://yann.lecun.com/exdb/lenet/)）。论文真正干的事，是把三样凑到一起：两块 GTX 580 显卡（各 3GB 显存）、一百多万张带标签的图、一个八层、六千万参数的卷积网络，训练了五六天（[论文](https://arxiv.org/abs/1207.0580)）。

还有两个小改动值得一提：激活函数换成 ReLU，同样的训练快出好几倍；随机丢掉一半神经元，压住了过拟合。都是技巧，不是理论突破。

## 走对的和走岔的

走对的，是把「更大的网络 + 更多的数据 + 更多的算力 = 更低的错误率」变成了一条能复现的公式。此后十年，所有人都在按这个公式加码。

走岔的第一处是归因。这件事后来被写成「深度学习赢了」，好像 2012 年之前没人想到神经网络。其实想到的人很多，缺的是能把想法跑起来的家伙。赢的不是思想，是配置。

第二处是评价方式。在此之前，一个想法要靠论文说服同行；在此之后，一个数字就能说服所有人。榜单的好处是客观，坏处是它只认数字，而数字是可以喂出来的：在测试集上反复调，调到好看为止，模型是真学会还是记住了答案，榜单看不出来。

第三处是那句流传很广的「人眼错误率约 5.1%」。它出自 2014 年 Karpathy 的一个估计，不是一次测量（[Wikipedia 的注解](https://en.wikipedia.org/wiki/ImageNet)）。2015 年 ResNet 的集成版做到 3.57%（[论文](https://arxiv.org/abs/1512.03385)），于是有了「超过人类」的说法——超过的只是一个估计值。

## 现在还剩什么

数据集还在。ImageNet 的一千类子集，至今是图像模型预训练的标准起点。

方法论还在：先造一个够大的题库，再让所有人来考，考分高的那套被抄走。这套流程后来搬去了语言、语音、代码，一个都没落下。

榜单文化也还在。比赛 2017 年停办，因为分数挤在一起，没有区分度；但刷榜留了下来，换了个名字，叫评测。每一代模型都有一张表，表上是数字，表下是条件。

这大概才是那一年真正留下的东西：它没有突然想通什么，它只是终于凑齐了。

## 饭桌上怎么说

- **同事局**：「不是算法赢了，是显卡、数据、卷积三样凑齐了。」
- **老板局**：「从那年起，这个行业的进步可以买：买卡、买数据、买人。」
- **亲戚局**：「以前题太少，孩子靠背答案；题够多了，才看得出谁真会做。」

## 时间线

- 2009：ImageNet 数据集论文发表（[论文](https://ieeexplore.ieee.org/document/5206848)）。
- 2010：首届 ILSVRC 开赛（[Wikipedia](https://en.wikipedia.org/wiki/ImageNet)）。
- 2012：AlexNet 以 15.3% 的 top-5 错误率夺冠（[论文](https://arxiv.org/abs/1207.0580)）。
- 2015：ResNet 集成版把 top-5 错误率做到 3.57%（[论文](https://arxiv.org/abs/1512.03385)）。
- 2017：最后一届 ILSVRC（[Wikipedia](https://en.wikipedia.org/wiki/ImageNet)）。

## 参考

- Deng 等，*ImageNet: A Large-Scale Hierarchical Image Database*, CVPR 2009. https://ieeexplore.ieee.org/document/5206848（访问于 2026-11-10）
- Krizhevsky 等，*ImageNet Classification with Deep Convolutional Neural Networks*, NIPS 2012. https://arxiv.org/abs/1207.0580（访问于 2026-11-10）
- He 等，*Deep Residual Learning for Image Recognition*, 2015. https://arxiv.org/abs/1512.03385（访问于 2026-11-10）
- Wikipedia，*ImageNet*. https://en.wikipedia.org/wiki/ImageNet（访问于 2026-11-10）
