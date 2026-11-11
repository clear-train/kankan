# 机器人：能站起来的，还不太能干活

## 它的来路

第一台工业机器人没有脸。1961 年，一台叫 Unimate 的机械臂进了通用汽车在新泽西的工厂，干的活是搬压铸件、往车身上焊（[Wikipedia](https://en.wikipedia.org/wiki/Unimate)）。它固定在地上，只会一套动作。

原因很朴素：那些活有毒气、有高温、会夹断手。机器人最早不是要像人，是要替人挨这些。

1966 年到 1972 年，斯坦福研究所做出 Shakey，第一台能自己盘算「下一步去哪」的移动机器人（[Wikipedia](https://en.wikipedia.org/wiki/Shakey_the_robot)）。它走得很慢，挪几步就停下算。当时人第一次看见机器在屋里自己走，很兴奋，没人觉得它能干活。

中间几十年，两条线各走各的：机械臂成了工厂标准件，移动机器人留在实验室。例外在天上，1997 年的旅居者号、2004 年的勇气号和机遇号（[NASA](https://science.nasa.gov/mission/mars-pathfinder/)），轮子加遥控。

2013 到 2015 年，DARPA 办了一场机器人挑战赛（[Wikipedia](https://en.wikipedia.org/wiki/DARPA_Robotics_Challenge)）。开门、拧阀门、开车、爬楼梯，赛道本身就是一份难点清单。决赛里机器人摔倒、卡住、走到一半停住，观众第一次看见：难的不是脑子，是身体。

## 当年为什么这么做

三条线动机不一样。工厂那条是经济账：一台机械臂多少钱、替几个工人、几年回本，算得清。移动机器人那条是学术账：机器能不能自己决定去哪，这个问题值得研究。火星车那条是被逼的：信号来回要几十分钟，人没法实时操作，只能让它在原地自己想一点。

DARPA 那场比赛的动机更直接：人进不去的地方，需要机器进去。所以赛道不设计成演示，设计成考试，专门考那些在实验室里不会被考到的事。

所有选择背后是同一个约束：错误要付多少钱，决定它能自主到什么程度。火星车不敢乱走，摔了就没了；工厂机械臂敢，因为围栏里没有人。

## 走对的和走岔的

走对的是工厂那条线。它几十年只干「重复、危险、环境可控」的活，不追求像人，回报稳定。

走岔的第一处，是把「能站起来」当成了进度。双足平衡、全身协调、成本控制，人形是所有形态里最难的一类，也是发布会拍得最多的一类。视频里它翻跟头，视频外它要人扶着换电池。

第二处，是拿语言模型的进度去推机器人。语言模型答错，改一个字重来；机器人答错，摔一跤，撞一个人。这一行要过的那一关叫「错误要付代价」，过了这关才谈得上迭代速度。

第三处，是仿真给人的错觉。在仿真里练一亿次很便宜，搬到真机上常常就散了：摩擦力、光照、零件磨损，每一样都对不上。这个差距有个名字，叫 sim-to-real。

尖锐的话放在这里：现在人形机器人的发布会，和 2015 年那批「通用人工智能」的发布会是同一种结构，一段好看的演示，加一个五年后的时间表。

## 现在还剩什么

真正在干活的地方都不太像人：仓库搬运和分拣，工厂焊接和喷涂，电站和化工厂巡检，农田喷药。共同点是出错不致命，或者出错有人兜着。

人形还在找第一个不丢人的岗位。现实的顺序是先在流水线旁搬东西，再去仓库，最后才谈家里。家里最难，有老人、有小孩、有楼梯、有地毯。

模型侧在动。2025 年 Meta 的 V-JEPA 2 用海量视频学「接下来会发生什么」，再拿少量机器人数据对齐，就能零样本做简单的抓取和规划（[论文](https://arxiv.org/abs/2506.09985)）。这跟[具身智能](/words/36-embodied)、[世界模型](/words/37-world-model)两篇讲的是同一件事：脑子在变便宜。

但身体没有变便宜。电机、减速器、力控、电池、维护，一样样都是钱，也都是故障点。这行真正的瓶颈不是算法，是「身体的价格」和「试错的次数」。

所以别按视频看进度，按失败成本看。先让它别摔，再让它上班。

## 饭桌上怎么说

- **同事局**：「这行不缺演示，缺的是摔了不心疼的地方。」
- **老板局**：「先问它出错赔多少，再问它干得多好。」
- **亲戚局**：「会翻跟头的是表演，能搬箱子的才叫上班。」

## 时间线

- 1961：Unimate 进通用汽车工厂（[Wikipedia](https://en.wikipedia.org/wiki/Unimate)）。
- 1966–1972：Shakey 在斯坦福研究所做成（[Wikipedia](https://en.wikipedia.org/wiki/Shakey_the_robot)）。
- 1997：旅居者号在火星着陆（[NASA](https://science.nasa.gov/mission/mars-pathfinder/)）。
- 2004：勇气号、机遇号先后着陆（[NASA](https://science.nasa.gov/mission/mer-spirit/)）。
- 2013–2015：DARPA 机器人挑战赛（[Wikipedia](https://en.wikipedia.org/wiki/DARPA_Robotics_Challenge)）。
- 2016：波士顿动力的视频开始刷屏（[Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics)）。
- 2022：特斯拉展示 Optimus 原型（[Wikipedia](https://en.wikipedia.org/wiki/Optimus_(robot))）。
- 2025：V-JEPA 2 用视频模型做机器人规划（[论文](https://arxiv.org/abs/2506.09985)）。

## 参考

- Wikipedia，*Unimate*. https://en.wikipedia.org/wiki/Unimate（访问于 2026-11-11）
- Wikipedia，*Shakey the robot*. https://en.wikipedia.org/wiki/Shakey_the_robot（访问于 2026-11-11）
- NASA，*Mars Pathfinder*. https://science.nasa.gov/mission/mars-pathfinder/（访问于 2026-11-11）
- NASA，*Mars Exploration Rovers: Spirit*. https://science.nasa.gov/mission/mer-spirit/（访问于 2026-11-11）
- Wikipedia，*DARPA Robotics Challenge*. https://en.wikipedia.org/wiki/DARPA_Robotics_Challenge（访问于 2026-11-11）
- Assran 等，*V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning*, 2025. https://arxiv.org/abs/2506.09985（访问于 2026-11-11）
