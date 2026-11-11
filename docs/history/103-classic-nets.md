# 反向传播、卷积、LSTM：让 2012 年成为可能的那些零件

## 它的来路

2012 年秋天，多伦多一间实验室里，两块游戏显卡认图，认过了所有人。后来的故事总从「神经网络终于行了」讲起，仿佛它是那年冒出来的。其实那天用到的零件，最老的比在场的人都年长。

先说反向传播。它的数学是链式法则：复合函数一层层求导，从外面往回剥。1986 年，Rumelhart、Hinton、Williams 在《自然》上发短文（[论文](https://doi.org/10.1038/323533a0)），把它写成了能跑的流程。

再说卷积。1989 年，LeCun 用它识别手写邮编（[论文](http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf)），后来写出文档识别的长文（[论文](http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf)），LeNet 定在这时。卷积这词更老，来自信号处理；局部感受野这个想法，早先在猫的视觉皮层实验里出现过。

最后是 LSTM。1997 年，Hochreiter 和 Schmidhuber 发在《神经计算》上（[论文](https://people.idsia.ch/~juergen/lstm/)）。名字很技术，作用很朴素：让循环网络多记一会儿。

## 当年为什么这么做

反向传播解的是「多层没法训」。1969 年，Minsky 和 Papert 出过一本书（[原书](https://archive.org/details/perceptronsintro00mins)）：单层感知机连异或都学不会，一层只能画一条直线，而异或分不开。这本书被当成「神经网络到此为止」用了几十年。它真正说的是：一层不够。多层够用早就知道，卡住的是训练——没人告诉过你中间那些层该往哪调。

反向传播给的正是这个：从输出倒着算，每层都能拿到一句「你错在哪个方向」。层数越多，要算的越多，「能算」第一次变成了「能练」。

卷积解的是「图像不该全连接」。全连接的意思是每个像素都连到每个神经元。一张图里相邻的像素才有关系，右下角和左上角基本没关系；全连接硬把它们凑在一起，参数多到离谱，还把「猫在哪都还是猫」学丢了。卷积让了两步：只看一小块；同一个卷积核在整张图上平移着用。后者叫权重共享，一套参数扫全图，省下的不是内存，是样本。

LSTM 解的是梯度消失。反向传播往回传，信号每过一层乘一个小于一的数，几十层后几乎归零，前面的层等于没训。LSTM 加了条近乎直通的记忆通道，两头加门，定何时写进去、倒出来。人话版：给网络配了个记事本，加一支笔和一块橡皮。

## 走对的和走岔的

走对的部分，三样都成了默认件：反向传播是训练的底座，卷积是视觉的默认结构，LSTM 从语音识别撑到机器翻译，那几年这两个领域进步大半是它扛的。

走岔的第一处是归因。反向传播不是 1986 年发明的，链式法则更不是。自动微分和控制论里早有人做过，Werbos 的博士论文更早。那篇《自然》的贡献是讲清楚、做干净、让人相信。

第二处是「神经网络又行了」这句总结。它行，多半是算力和数据到了，不是哪个零件想通了。同一批方法在八十年代被冷落，错不在数学。

第三处是对 LSTM 的期待。它记性好，但一步算一步，句子一长就排队。这件事最后由注意力解决（见[那一篇](/base/17-attention)），注意力又长成了 [Transformer](/history/78-transformer)。

## 现在还剩什么

反向传播一天没换过。今天大模型训练底下都是它，换的是硬件、精度和并行方式。

卷积的直觉也还在。哪怕视觉模型改用了注意力，局部性和权重共享依然是省算力的基本功。

LSTM 留下的教训是：结构能活多久，看它能不能塞进当时的硬件。它当年能赢，是能一步步在 CPU 上跑；后来让位，是 GPU 更喜欢一次性算完。

2012 年那篇论文（[AlexNet](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)）里三样都在：卷积、反向传播，还有让它在两块显卡上跑起来的工程。转折点不是某个想法，是这几样终于凑齐了能跑的条件。

## 饭桌上怎么说

- **同事局**：「2012 年不是发明了神经网络，是三个老零件终于凑齐了算力。」
- **老板局**：「它们能留下来，不是因为聪明，是因为能算。不能算的，再巧也进不了产品。」
- **亲戚局**：「像三件旧工具：一把尺、一面放大镜、一个记事本。凑齐了才认得出猫。」

## 时间线

- 1969：Minsky 和 Papert 出版《Perceptrons》，指出单层网络学不会异或（[原书](https://archive.org/details/perceptronsintro00mins)）。
- 1986：Rumelhart、Hinton、Williams 在《自然》上发表反向传播（[论文](https://doi.org/10.1038/323533a0)）。
- 1989：LeCun 用反向传播训练卷积网络识别手写邮编（[论文](http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf)）。
- 1997：Hochreiter 和 Schmidhuber 发表 LSTM（[论文](https://people.idsia.ch/~juergen/lstm/)）。
- 1998：LeCun 等发表 LeNet 的完整版本（[论文](http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf)）。
- 2012：AlexNet 在 ImageNet 上把对手甩开一大截（[论文](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)）。

## 参考

- Rumelhart, Hinton, Williams，*Learning representations by back-propagating errors*, 1986. https://doi.org/10.1038/323533a0（访问于 2026-11-11）
- Minsky, Papert，*Perceptrons*, 1969. https://archive.org/details/perceptronsintro00mins（访问于 2026-11-11）
- LeCun 等，*Backpropagation Applied to Handwritten Zip Code Recognition*, 1989. http://yann.lecun.com/exdb/publis/pdf/lecun-89e.pdf（访问于 2026-11-11）
- LeCun 等，*Gradient-Based Learning Applied to Document Recognition*, 1998. http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf（访问于 2026-11-11）
- Hochreiter, Schmidhuber，*Long Short-Term Memory*, 1997. https://people.idsia.ch/~juergen/lstm/（访问于 2026-11-11）
- Krizhevsky, Sutskever, Hinton，*ImageNet Classification with Deep Convolutional Neural Networks*, 2012. https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html（访问于 2026-11-11）
