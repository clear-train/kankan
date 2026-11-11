# Mistral 与 xAI：一个卖主权，一个卖脾气

## 它的来路

2023 年 4 月，三个从大厂出来的法国研究者成立了 Mistral（[Mistral AI](https://en.wikipedia.org/wiki/Mistral_AI)）。它的第一张牌不是参数，是权重。2023 年 12 月，Mixtral 8x7B 把权重直接放了出来，一个专家混合的模型，跑起来不贵（[Mistral](https://mistral.ai/news/mixtral-of-experts)）。

第二年 2 月，微软投了 1600 万美元，模型上了 Azure。同期它开始在官网讲 Sovereign AI，主权 AI（[Mistral](https://mistral.ai/sovereign-ai)）。2025 年 9 月，ASML 投 13 亿欧元，拿了 11% 的股份（[新华社](https://english.news.cn/20250909/abd052bf65314c9a91f356179bcf2039/c.html)）。

xAI 走的是另一只钟。2023 年 7 月对外宣布，11 月把 Grok 挂在 X 上（[xAI](https://x.ai/news/series-b)）。2024 年 5 月 B 轮融了 60 亿美元。6 月宣布在孟菲斯建 Colossus，122 天建成，到 12 月满负荷跑起来（[Colossus](https://en.wikipedia.org/wiki/Colossus_(data_center))）。2025 年 3 月，它把 X 收了（[TechCrunch](https://techcrunch.com/2025/03/28/elon-musk-says-xai-acquired-x/)）。

## 当年为什么这么做

Mistral 回答的是「数据出不出境」。欧洲的公共部门和企业采购时，这一条比榜单靠前。开源权重加欧洲公司身份，是当时唯一能同时回答「便宜」和「可信」的方案。

它卖的其实不是模型，是「这套东西可以放在你自己的机房里」。所以它必须开源：不开源，主权就只是个说法。

xAI 回答的是「模型从哪来」。它没有企业客户的历史包袱，但它有一个现成的分发入口和一个现成的语料库。模型要实时，就得贴着社交平台长；模型要有性格，就得有一群愿意为性格付钱的人。

换我可能也这么选。一个从信任的缺口切进去，一个从注意力的缺口切进去。

## 走对的和走岔的

Mistral 走对的是分发。权重一放，推理框架、云厂商、论文全在适配它；欧洲的公共部门采购多了一个本土选项。ASML 入股，说明工业资本也认这个故事。

它走岔的地方，是同一件事的另一面：开源换生态，换来的是别人的分发权。权重放出去，谁都能托管、谁都能微调、谁都能拿它做产品，那份钱 Mistral 收不到。它自己的 API 还要和一堆免费托管打价格战。

主权叙事也把它架住了。客户要的是「欧洲的模型」，不是「最好的模型」。这是护城河，也是天花板——很难既当政府采购的默认选项，又当开发者心里的第一选择。

xAI 走对的是速度。122 天建成一个机房，模型迭代跟着热点走，获客几乎不花钱，因为入口就在用户每天刷的那个界面里。

代价是数据。X 上的语料实时、便宜、带情绪，模型的脾气从这里长出来，争议也从这里长出来。社交平台的产品节奏会传染：热点、争论、插队，模型团队得跟着跑。你绑定了谁的流量，就绑定了谁的噪音。

## 现在还剩什么

Mistral 留下的是一个品类。它把采购语言改写了：现在欧洲的招标文件里会写数据驻留、可审计、可自托管。一个词被写进合同，比一场发布会值钱。

xAI 留下的是一个路径：模型不必先有好产品，可以先有分发入口。这条路径后来被不少人抄。

两家都没靠「最强」活着。一家靠「可以放在你这」，一家靠「就在你刷的地方」。

一句话分开它们：一个卖的是不用把数据交出去，一个卖的是不用换 App。

## 饭桌上怎么说

- **同事局**：「Mistral 卖的是不出境，xAI 卖的是不换台。」
- **老板局**：「选 Mistral 是选合规，选 xAI 是选流量，别只看榜单。」
- **亲戚局**：「一个像把厨房搬进你家，一个像把摊子支在你门口。」

## 时间线

- 2023 年 4 月，Mistral 成立（[Mistral AI](https://en.wikipedia.org/wiki/Mistral_AI)）。
- 2023 年 12 月，Mixtral 8x7B 开源（[Mistral](https://mistral.ai/news/mixtral-of-experts)）。
- 2024 年 5 月，xAI 完成 60 亿美元 B 轮（[xAI](https://x.ai/news/series-b)）。
- 2024 年 12 月，孟菲斯 Colossus 满负荷运行（[Colossus](https://en.wikipedia.org/wiki/Colossus_(data_center))）。
- 2025 年 3 月，xAI 收购 X（[TechCrunch](https://techcrunch.com/2025/03/28/elon-musk-says-xai-acquired-x/)）。
- 2025 年 9 月，ASML 投 13 亿欧元、持股 11%（[新华社](https://english.news.cn/20250909/abd052bf65314c9a91f356179bcf2039/c.html)）。

## 参考

- Mistral AI：《Sovereign AI》，https://mistral.ai/sovereign-ai（访问于 2026-11-11）.
- Mistral AI：《Mixtral of experts》，2023-12-11. https://mistral.ai/news/mixtral-of-experts（访问于 2026-11-11）.
- xAI：《Series B funding round》，2024-05-26. https://x.ai/news/series-b（访问于 2026-11-11）.
- TechCrunch：《Elon Musk says xAI acquired X》，2025-03-28. https://techcrunch.com/2025/03/28/elon-musk-says-xai-acquired-x/（访问于 2026-11-11）.
- Wikipedia：《Mistral AI》，https://en.wikipedia.org/wiki/Mistral_AI（访问于 2026-11-11）.
