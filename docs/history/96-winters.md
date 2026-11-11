# 两次寒冬：这门手艺是怎么被冻住的

## 它的来路

1966 年 11 月，一份报告放到华盛顿的办公桌上，七个人签名，牵头的是约翰·皮尔斯。结论很短：机器翻译还不行，钱先停一停（[ALPAC](https://en.wikipedia.org/wiki/ALPAC)）。

七年后的伦敦，另一份评估报告更不客气。它说，这个领域「没有任何一部分的发现，产生过当初承诺的那种影响」（[Lighthill 报告](https://en.wikipedia.org/wiki/Lighthill_report)）。英国随后停掉了对多数大学 AI 研究的支持。

两次都不是从技术失败开始的，是从账单开始的。

## 当年为什么这么做

1950 年代末到 60 年代，承诺是具体的：机器翻译、通用问题求解、十年内造出会思考的机器。资助方听懂了，也下了注。

1970 年代，账对不上。美国 1969 年通过一条修正案，要求 DARPA 只资助「直接服务于任务的研究」，自由探索的钱就断了（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。这不是谁讨厌 AI，是预算科目换了名字。

1980 年代换了一种赌法：专家系统。1985 年，全球企业一年在 AI 上花掉十亿美元以上，多数进了公司自己的 AI 部门（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。最成功的例子 XCON，按公开估算，六年给 DEC 省下 4000 万美元（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。

但 XCON 的维护费比开发费还高。改一条规则要动一堆规则，它不会学，遇到没见过的输入就崩。到 1990 年代初，最早那批专家系统大多被弃用（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。

硬件那头一起塌。LISP 机器是专门跑 LISP 的贵电脑；通用工作站便宜下来之后，没人再买专用机。1987 年，这个市场在一年之内被替掉，整个行业值五亿美元（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。

## 走对的和走岔的

走对的是：东西没死，只是换了地方。逻辑编程里的并发部分留了下来，LISP 机器上的垃圾回收和网络协议后来成了常识。统计方法在 1990 年代接手，2012 年那场比赛把这些零件重新装起来（[《2012 年那场比赛》](93-imagenet.md)）。

走岔的是押硬件。日本 1982 年立项第五代计算机，说好十年，最后拖到 1994 年收场，花掉近 570 亿日元，商业化失败（[FGCS](https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems)）。钱不是不够，是押在了「更快的专用机」上。

还有一次更安静的走岔：换个名字回来。专家系统变成知识管理，知识管理变成数字化转型，数字化转型变成 Agent。

## 现在还剩什么

剩下的是人。两次寒冬里被裁掉的不是想法，是会调试的人。想法写在论文里，调试的手感留在人身上。

等到下一次热起来，那批人不在了。于是同样的坑重新踩一遍，同样的 demo 重新做一遍，然后管它叫「重新发明」。

所以这一行真正的周期不是技术周期，是耐心周期。技术按年走，耐心按十年走，两者对不上，就有了冬天。

## 饭桌上怎么说

- **同事局**：「寒冬不是技术不行，是承诺的账到期了。」
- **老板局**：「这一行的周期不是技术周期，是耐心周期。」
- **亲戚局**：「它没死过，只是被欠薪欠到没人干了。」

## 时间线

- 1966 年，ALPAC 报告否掉机器翻译经费（[ALPAC](https://en.wikipedia.org/wiki/ALPAC)）。
- 1969 年，修正案要求 DARPA 只资助任务导向研究（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。
- 1973 年，Lighthill 报告之后，英国削减 AI 支持（[Lighthill 报告](https://en.wikipedia.org/wiki/Lighthill_report)）。
- 1974—1980 年，第一个寒冬（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。
- 1982 年，日本第五代计算机计划立项（[FGCS](https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems)）。
- 1987 年，LISP 机器市场崩掉，第二个寒冬开始（[AI winter](https://en.wikipedia.org/wiki/AI_winter)）。
- 2012 年，深度学习回到台前（[《2012 年那场比赛》](93-imagenet.md)）。

## 参考

- Wikipedia：《ALPAC》. https://en.wikipedia.org/wiki/ALPAC（访问于 2026-11-11）.
- Wikipedia：《Lighthill report》. https://en.wikipedia.org/wiki/Lighthill_report（访问于 2026-11-11）.
- Wikipedia：《AI winter》. https://en.wikipedia.org/wiki/AI_winter（访问于 2026-11-11）.
- Wikipedia：《Fifth Generation Computer Systems》. https://en.wikipedia.org/wiki/Fifth_Generation_Computer_Systems（访问于 2026-11-11）.
- Wikipedia：《Lisp machine》. https://en.wikipedia.org/wiki/Lisp_machine（访问于 2026-11-11）.
