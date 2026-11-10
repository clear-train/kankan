# BERT：先学会填空，再学会说话

## 它的来路

2018 年 10 月，谷歌的四个人把一篇论文挂上 arXiv，标题起得像简历：《BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding》（[论文](https://arxiv.org/abs/1810.04805)）。它干的事不复杂：给语言模型换了一道作业。

在这之前，语言模型的作业是「接着往下写」：给左半边，猜下一个词。BERT 换成了填空，一句话里随机挖掉 15% 的词，让它补回来。补洞的时候，左右两边都能看。

还顺带加了第二道题：判断后一句是不是真的跟在前一句后面。

2018 年 11 月，谷歌开源了模型权重（[博客](https://research.google/blog/open-sourcing-bert-state-of-the-art-pre-training-for-natural-language-processing/)）。几个月里，它在十一个自然语言处理任务上刷新了榜单，GLUE 那项推到 80 分上下（[论文](https://arxiv.org/abs/1810.04805)）。榜是当时的记分牌，它一次拿了十一块。

## 当年为什么这么做

那时做自然语言处理的常规流程是：一个任务标一批数据，模型从零开始学。学到的东西带不走，下个任务再标一批。

预训练的想法不新。[ELMo](https://arxiv.org/abs/1802.05365) 已经证明，先在海量文本上自学一遍，再拿去做具体任务，效果好一截。但 ELMo 是两个单向模型拼起来的：一个从左往右读，一个从右往左读，读完再合。它见过两边，没见过同时。

BERT 赌的就是同时。洞在句子中间，右边的词有用；洞在句尾，左边的词有用。要补得准，它就得学会一件事：一个词的意思，取决于它周围站着谁。

经济上也划算。填空不用人标答案，答案就是被挖掉的那个词。语料是现成的，标签是自带的，所以它能一口吃下那么多文本。

## 走对的和走岔的

走对的地方，是「预训练」这个想法被彻底证明。先自学，再用少量标注去调，这套工艺从此成了默认配置。后来所有大模型都走这条路，变的只是作业形式：填空换回续写，亿级参数换到千亿量级。

走岔的地方，是它选了下游的姿势。

BERT 只有编码器，没有解码器。编码器把一句话读成一组向量，解码器把向量还原成一句新话，两半的分工在[注意力那一篇](/base/17-attention)里讲过。它只有前一半。

后果很具体。让它续写「今天我去」，它没有那个出口。有人试过硬来：后面全挖成空格，一个一个填。可它训练时没见过一句话里一半是空的，一上手就塌。[维基百科这一段](https://en.wikipedia.org/wiki/BERT_%28language_model%29)的总结很直白：编码器结构让它难以被提示，也生成不出像样的文本。

第二处走岔小一些：下一句预测后来被发现没什么用。RoBERTa 把它整个拿掉，效果没掉，还更好一点（[论文](https://arxiv.org/abs/1907.11692)）。当年那套作业里，有半道是白做的。

所以它的处境可以一句话说完：它赢了考卷，GPT 赢了接口。

## 现在还剩什么

留下的是填空这门手艺。掩码语言模型后来不再是主线，但它作为训练目标之一，一直活在各种模型里；「先自学，再微调」这六个字，也一直活着。

留下的还有它在产品里的位置。2019 年 10 月，谷歌把它放进搜索（[博客](https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/)），先管美国的一成英文查询。2020 年 11 月，谷歌在 Search On 上说，几乎每一次英文查询都经过它这一类模型（[博客](https://blog.google/products-and-platforms/products/search/search-on/)）。2021 年有了 MUM（[博客](https://blog.google/products-and-platforms/products/search/introducing-mum/)）。2023 年之后，同一家公司开始把答案直接写在页面上，链接退到下面（[博客](https://blog.google/products/search/generative-ai-search/)）。

看这条线的走向：它一直在后台。理解完，把结果交给别人。前台换成对话框之后，它的活还在，只是没人再提它的名字。

榜单上的第一名，用户一次也感知不到。

一个模型可以同时是里程碑和过渡品：里程碑是说它证明了预训练这条路，过渡品是说它没赶上这条路通向的那个产品形态。

它把课本背熟了，可饭桌上没人考课本。

## 饭桌上怎么说

- **同事局**：「它把语言理解做到了极致，然后发现大家要的是生成。」
- **老板局**：「它是后台零件，不是前台产品。搜索、审核、客服里都有它，用户不会跟它聊天。」
- **亲戚局**：「一个特别会做阅读理解的学生。你让他写作文，他坐那儿半天不动笔。」

## 时间线

- 2018：论文挂上 arXiv（[论文](https://arxiv.org/abs/1810.04805)）；11 月开源权重（[博客](https://research.google/blog/open-sourcing-bert-state-of-the-art-pre-training-for-natural-language-processing/)）。
- 2019：RoBERTa 拿掉下一句预测（[论文](https://arxiv.org/abs/1907.11692)）；10 月进入谷歌搜索（[博客](https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/)）。
- 2020：谷歌称几乎全部英文查询都用到它这类模型（[博客](https://blog.google/products-and-platforms/products/search/search-on/)）。
- 2021：MUM 接棒（[博客](https://blog.google/products-and-platforms/products/search/introducing-mum/)）。
- 2023：生成式搜索把答案写进页面（[博客](https://blog.google/products/search/generative-ai-search/)）。

## 参考

- Devlin 等，*BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*, 2018. https://arxiv.org/abs/1810.04805（访问于 2026-11-10）
- Google AI，*Open Sourcing BERT: State-of-the-Art Pre-training for Natural Language Processing*, 2018. https://research.google/blog/open-sourcing-bert-state-of-the-art-pre-training-for-natural-language-processing/（访问于 2026-11-10）
- Google，*Understanding searches better than ever before*, 2019. https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/（访问于 2026-11-10）
- Google，*How AI is powering a more helpful Google*, 2020. https://blog.google/products-and-platforms/products/search/search-on/（访问于 2026-11-10）
- Google，*MUM: A new AI milestone for understanding information*, 2021. https://blog.google/products-and-platforms/products/search/introducing-mum/（访问于 2026-11-10）
- Google，*How Google is improving Search with Generative AI*, 2023. https://blog.google/products/search/generative-ai-search/（访问于 2026-11-10）
- Liu 等，*RoBERTa: A Robustly Optimized BERT Pretraining Approach*, 2019. https://arxiv.org/abs/1907.11692（访问于 2026-11-10）
