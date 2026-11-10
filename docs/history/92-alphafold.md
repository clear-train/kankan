# AlphaFold：先在一个问题上，把人类甩开

## 它的来路

蛋白质折叠这个问题，1969 年就被说清楚了难在哪：一条氨基酸链，理论上能摆出的构型多到穷举不完，可它在细胞里几毫秒就折好了（[DeepMind](https://deepmind.google/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/)）。实验上解一个结构，要几年，几万美元。

2018 年 12 月，CASP13 盲测，第一代 AlphaFold 在 43 个自由建模靶点里，有 24 个做到 TM 分数 0.7 以上；第二名是 14 个（[Nature](https://www.nature.com/articles/s41586-019-1923-7)）。这已经不是「好一点」。

2020 年 11 月 30 日，CASP14 结果出来，中位 GDT 92.4 分，平均误差约 1.6 埃（[DeepMind](https://deepmind.google/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/)）。GDT 90 分上下，业内就认为跟实验方法打平了。

2021 年 7 月，论文发在 Nature，代码一起开源（[Nature](https://www.nature.com/articles/s41586-021-03819-2)）；同月跟 EMBL-EBI 一起开了 AlphaFold DB。2022 年 7 月，库里从将近一百万个结构，扩到两亿多个（[DeepMind](https://deepmind.google/blog/alphafold-reveals-the-structure-of-the-protein-universe/)）。2024 年 5 月，AlphaFold 3 把范围从单体蛋白扩到蛋白与配体、核酸、离子的复合体（[Nature](https://www.nature.com/articles/s41586-024-07487-w)）。10 月，诺贝尔化学奖一半给了 Demis Hassabis 和 John Jumper，一半给了 David Baker（[Nobel Prize](https://www.nobelprize.org/prizes/chemistry/2024/press-release/)）。

## 当年为什么这么做

DeepMind 不是随便挑了个生物问题。他们挑的是一个有裁判的问题。

CASP 每两年一次，题目是刚解出来、还没公开的结构，参赛者拿不到答案，交卷后由实验数据打分。这种比赛有一个好处：进步是可测量的。你今天比昨天准多少，不用开会争论，看分数。

换我可能也这么选。语言模型的评价靠人打分，贵的、飘的、可以吵的；蛋白质结构的评价靠坐标，一次实验定生死。选一个有标准答案的题，深度学习才有地方使劲。

还有一层现实：这个题值得解。结构生物学是药物、酶、材料的上游，而实验解结构的成本高得离谱。

## 走对的和走岔的

走对的第一件，是选问题。答案唯一、验证便宜、数据管够——蛋白质数据库里躺着十几万个实验结构，序列库里躺着几亿条序列。这三样凑齐，深度学习才不是玄学。

第二件，是开放。论文、代码、数据库，2021 年起免费给所有人用。现在做结构生物学的人，第一步不是打开实验设备，是查 AlphaFold DB。这跟「发个 demo」是两回事。

第三件，是把预测变成了基础设施。两亿多个结构挂进 UniProt，每个蛋白的页面直接带一张预测图。工具变成默认选项，才算真的落地。

走岔的地方，长在「准」这个字的边界上。

它给的是静态的、单个的、平均的结构。真实的蛋白会动，会跟别的分子抱在一起，会在不同条件下换形状。AlphaFold 2 不管这些，到 3 才补上复合体。数据库里还有大量低置信度的片段，橙色、黄色的区域，被不少下游的人直接当成确定结构用了。

另一个争议是开放程度。2024 年 5 月 AlphaFold 3 发布时，只开了服务器，没放代码和权重，学术界有意见；几个月后才补上学术用途的版本。一家把「开放」写进名声的机构，在这件事上被自己的名声追着问。

还有一个误读，到现在还在传：说它「解决了蛋白质折叠」。它解决的是「从序列预测结构」，不是折叠的机制，也不是「这个蛋白在细胞里到底怎么工作」。

## 现在还剩什么

位置：结构生物学的默认起点。冷冻电镜和 X 射线还在，但越来越多的人先看预测，再决定要不要做实验。

习惯：湿实验的预算，从「试出来」变成「验一下」。这是钱和时间的重新分配。

没解决的：动态构象、突变带来的细微变化、蛋白与药物的结合强度、从零设计一个新蛋白。最后这件，正好是诺奖另一半给 David Baker 的理由。

一句判断：它证明 AI 的价值不总是「更会说话」，有时是「把一个五十年没解决的问题按下去」。这也是诺奖给它的原因，也是聊天机器人没拿到诺奖的原因——不是聪明不聪明，是有没有一道能被验证的题。

## 饭桌上怎么说

- **同事局**：「它不是更会说话，它是把一道有五十年标准答案的题做对了。」
- **老板局**：「AI 先啃有标准答案的活，别急着让它判断人。」
- **亲戚局**：「这东西能算蛋白质长什么样，算不了人的命。」

## 时间线

- 2018 年 12 月，CASP13 盲测，第一代 AlphaFold 大幅领先（[Nature](https://www.nature.com/articles/s41586-019-1923-7)）。
- 2020 年 11 月 30 日，CASP14 中位 GDT 92.4（[DeepMind](https://deepmind.google/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/)）。
- 2021 年 7 月 15 日，Nature 论文发表，代码开源（[Nature](https://www.nature.com/articles/s41586-021-03819-2)）。
- 2022 年 7 月，AlphaFold DB 扩到两亿多个结构（[DeepMind](https://deepmind.google/blog/alphafold-reveals-the-structure-of-the-protein-universe/)）。
- 2024 年 5 月 8 日，AlphaFold 3 覆盖复合体（[Nature](https://www.nature.com/articles/s41586-024-07487-w)）。
- 2024 年 10 月 9 日，诺贝尔化学奖授予 Hassabis、Jumper 与 Baker（[Nobel Prize](https://www.nobelprize.org/prizes/chemistry/2024/press-release/)）。

## 参考

- Andrew W. Senior 等：《Improved protein structure prediction using potentials from deep learning》，Nature，2020-01-15. https://www.nature.com/articles/s41586-019-1923-7（访问于 2026-11-10）.
- John Jumper 等：《Highly accurate protein structure prediction with AlphaFold》，Nature，2021-07-15. https://www.nature.com/articles/s41586-021-03819-2（访问于 2026-11-10）.
- Google DeepMind：《AlphaFold: a solution to a 50-year-old grand challenge in biology》，2020-11-30. https://deepmind.google/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/（访问于 2026-11-10）.
- Josh Abramson 等：《Accurate structure prediction of biomolecular interactions with AlphaFold 3》，Nature，2024-05-08. https://www.nature.com/articles/s41586-024-07487-w（访问于 2026-11-10）.
- The Nobel Prize：《The Nobel Prize in Chemistry 2024》，2024-10-09. https://www.nobelprize.org/prizes/chemistry/2024/press-release/（访问于 2026-11-10）.
