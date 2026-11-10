# AlphaGo：先让机器学会不确定，再让它学会不用人教

## 它的来路

2016 年 3 月，首尔，一间没有窗的对局室。李世石坐在棋盘这头，对面没有人。第一局他输了，赛后说，我没想到会输。

在那之前，围棋被当成机器过不去的坎：棋盘大，变化多，高手说不清自己为什么下这一手。2015 年 10 月，AlphaGo 已经 5 比 0 赢过欧洲冠军樊麾（[Wikipedia](https://en.wikipedia.org/wiki/AlphaGo)），但没多少人当真。

DeepMind 的做法不神秘，是把三样东西接在一起：策略网络决定往哪看，价值网络判断这盘棋现在谁好，蒙特卡洛树搜索把两条意见合起来，往下推几步。2016 年 1 月的《自然》论文写得很清楚（[论文](https://www.nature.com/articles/nature16961)）。

## 当年为什么这么做

围棋的搜索空间大到不可能穷举。硬算，只会算到天荒地老。所以他们不追求算尽，追求「少算，但算得准」：网络先砍掉明显不像样的分支，搜索只往有希望的地方走。

另一个选择是跟人学。先拿人类棋谱做监督学习，学会像人一样下，再靠自我对弈强化。这样能躲开早期围棋程序那种「人类看不懂的怪手」。

代价有两层：它的上限一开始是人类棋谱的上限；更麻烦的是，这套办法依赖一个前提——规则写死、胜负判得清、可以重来无数次。

## 走对的和走岔的

走对的地方，是「搜索加学习」在封闭规则里第一次超过了人类最强。五局下来 4 比 1。

第二局第 37 手，它落在右边第五路，肩冲。解说席上安静了几秒，一位解说后来说，我以为这是失误（[Wired](https://www.wired.com/2016/03/two-moves-alphago-lee-sedol-redefined-future/)）。复盘之后，职业棋手承认那手棋成立。机器下出了人没想到、但人能验算的一手。

李世石赢的第四局，他下出白 78，古力称它为「神之一手」。

2017 年 5 月，乌镇，对柯洁三局全胜。同年 10 月，AlphaGo Zero 公布：不用人类棋谱，只靠规则和自我对弈，100 比 0 赢下上一代（[Nature](https://www.nature.com/articles/nature24270)）。从跟人学，走到不用人教。

走岔的地方不在比分，在前提。这套成功的条件被记住了成绩、忘掉了条件：围棋规则明确，胜负只有一种判法，一局输了可以再开一局。

## 现在还剩什么

留下的方法是一个三段式：先学一个感觉，再用搜索去校验，最后拿结果反哺感觉。今天做推理的模型，多少还在借这个结构。

留下的教训更值钱：能重来的地方，机器进步快；不能重来的地方，它得靠别的办法。

留下的问题：当一局只有一次、复盘也补不回来的时候，那个「感觉」该由谁签字。

## 饭桌上怎么说

- **同事局**：「它不是算得比人深，是先学会了往哪儿看。」
- **老板局**：「棋盘上每一步都能重来一万次，你的周一早上不能。」
- **亲戚局**：「像个不看棋谱、自己跟自己下了一万盘的人。输得起，所以下得好。」

## 时间线

- 2016：首尔五番棋，4 比 1 胜李世石（[Wikipedia](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol)）。
- 2016：《自然》论文发表，策略网络、价值网络加树搜索（[论文](https://www.nature.com/articles/nature16961)）。
- 2017：乌镇三局全胜柯洁（[Wikipedia](https://en.wikipedia.org/wiki/AlphaGo_versus_Ke_Jie)）。
- 2017：AlphaGo Zero 不用人类棋谱，100 比 0 胜上一代（[Nature](https://www.nature.com/articles/nature24270)）。

## 参考

- Silver 等，*Mastering the game of Go with deep neural networks and tree search*, 2016. https://www.nature.com/articles/nature16961（访问于 2026-11-10）
- Metz, *In Two Moves, AlphaGo and Lee Sedol Redefined the Future*, 2016. https://www.wired.com/2016/03/two-moves-alphago-lee-sedol-redefined-future/（访问于 2026-11-10）
- Silver 等，*Mastering the game of Go without human knowledge*, 2017. https://www.nature.com/articles/nature24270（访问于 2026-11-10）
- Wikipedia, *AlphaGo versus Lee Sedol*, 2026. https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol（访问于 2026-11-10）
- Wikipedia, *AlphaGo versus Ke Jie*, 2026. https://en.wikipedia.org/wiki/AlphaGo_versus_Ke_Jie（访问于 2026-11-10）
