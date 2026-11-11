# 专家系统：比大模型更早赚到钱的那一批

## 它的来路

1970 年代，斯坦福的 Shortliffe 和 Buchanan 做了 MYCIN：约 600 条 if-then 规则，治血液感染。医生回答问题，它一步步推出该用哪种抗生素（[MYCIN](https://en.wikipedia.org/wiki/Mycin)）。评测里它给出的方案，被院方接受的比率是 65%，八位传染病专科医生在 42.5% 到 62.5% 之间。也就是说，它在一场小范围考试里赢过了一部分专家。但它从没真正进过临床——卡在责任和流程上，不卡在准确率上。

1980 年，卡内基梅隆的 McDermott 把 R1 装进了 DEC 在新罕布什尔的工厂，后来改名 XCON：给 VAX 电脑配零件，客户下单，它自动算出一套能装进机柜、不打架的配置（[McDermott, 1980](https://cdn.aaai.org/AAAI/1980/AAAI80-076.pdf)）。到 1986 年，它处理了 8 万张订单，准确率 95% 到 98%，一年给 DEC 省下约 2500 万美元（[XCON](https://en.wikipedia.org/wiki/XCON)）。规则从几百条长到约 2500 条。

同一时期，日本通产省在 1982 年启动第五代计算机计划，十年，赌逻辑编程和大规模并行，目标是把推理机做成国家产业；1992 年结束，没有达成（[FGCS](https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems)）。

还有两条支线：Cyc 从 1984 年起在 MCC 手写常识（[Cyc](https://en.wikipedia.org/wiki/Cyc)）；伯纳斯-李等人在 2001 年提出语义网，想给网页加上机器读得懂的标注（[Scientific American](https://www.scientificamerican.com/article/the-semantic-web/)）。都是同一条路：人来写知识，机器照着用。

## 当年为什么这么做

企业买的不是聪明，是能算清楚的东西。

规则系统每给一条建议，都能倒推回是哪几条规则触发的。出了事，可以指着规则说话；采购要论证，审计要留痕，责任要落到人。这种「可解释」在 1980 年代是硬通货，不是加分项。

钱也说得清。XCON 每年省的 2500 万美元，是能写进预算表的数字。AI 第一次进企业账本，不是因为它像人，是因为它省下的钱比它贵。

换我可能也这么选。老师傅的经验装在脑子里，人一退休就带走了；把它一条条写下来，至少下一个厂还能用。

## 走对的和走岔的

走对的三件：结论能解释，规则链摊开给人看；场景窄，边界清楚，不用对付开放世界；收益可算，买它的人知道自己在买什么。

走岔的，也是三件。

知识写不完。MYCIN 六百条，XCON 两千五，写到后面，维护成本超过重写成本。规则之间会打架，改一条牵动一片，知识工程师成了最贵的工种。

换个场景就废。XCON 是照着 VAX 长的，产品线一变，规则库跟着改；最后它跟 VAX 一起退场。第五代计划赌的是逻辑编程和并行硬件，十年后，个人电脑和工作站把那条路走完了。

还有责任那道关。MYCIN 没进临床，不是它算得不准，是没有人愿意为它的建议签字。这跟今天的自动驾驶撞上的是同一堵墙。

## 现在还剩什么

留下的是一种执念：知识应该被写下来。这条线从 Cyc 走到语义网，再走到知识图谱和企业知识库，一直没有断。

留下的还有一句教训：写下来的那一刻，它就开始过期。规则库像一本要天天校对的说明书，校对的人一走，本子就废。

大模型不是把规则写得更全，是把「写规则」这件事本身省掉了。规则库维护的是知识，模型维护的是数据。这是两次浪潮真正的分界，不是参数多少，是有没有人还在负责校对。

## 饭桌上怎么说

- **同事局**：「专家系统是被维护成本拖死的，不是被算力。」
- **老板局**：「当年买它图它能解释。今天上大模型，得先想好出了事谁替它解释。」
- **亲戚局**：「它像一本很厚的老师傅笔记，老师傅一退休，就没人校对了。」

## 时间线

- 1970 年代，MYCIN 在斯坦福成形，约 600 条规则（[MYCIN](https://en.wikipedia.org/wiki/Mycin)）。
- 1980 年，XCON 进 DEC 工厂，后来每年省约 2500 万美元（[XCON](https://en.wikipedia.org/wiki/XCON)）。
- 1982 年，日本第五代计算机计划启动，十年后结束（[FGCS](https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems)）。
- 1984 年，Cyc 在 MCC 开始手写常识（[Cyc](https://en.wikipedia.org/wiki/Cyc)）。
- 2001 年，语义网论文发表，同一条路换了个名字（[Scientific American](https://www.scientificamerican.com/article/the-semantic-web/)）。

## 参考

- Wikipedia：《MYCIN》，https://en.wikipedia.org/wiki/Mycin（访问于 2026-11-10）.
- John McDermott：《R1: An Expert in the Computer Systems Domain》，AAAI，1980. https://cdn.aaai.org/AAAI/1980/AAAI80-076.pdf（访问于 2026-11-10）.
- Wikipedia：《XCON》，https://en.wikipedia.org/wiki/XCON（访问于 2026-11-10）.
- Wikipedia：《Fifth Generation Computer Systems》，https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems（访问于 2026-11-10）.
- Tim Berners-Lee、James Hendler、Ora Lassila：《The Semantic Web》，Scientific American，2001-05-01. https://www.scientificamerican.com/article/the-semantic-web/（访问于 2026-11-10）.
