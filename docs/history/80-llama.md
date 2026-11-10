# Llama：权重漏出来的那一次

## 它的来路

2023 年 2 月 27 日，Meta 把一篇论文挂上 arXiv：LLaMA，7B 到 65B 四档，全部用公开数据训练，13B 在多数基准上压过 175B 的 GPT-3。论文最后一句写得很客气，说把模型发布给研究社区（[论文](https://arxiv.org/abs/2302.13971)）。

发布方式是填表申请，许可只给研究用途。门开了一条缝，缝里站着审核的人。

一周多以后，权重出现在海外论坛上，随后在 Hugging Face 上被反复转手。3 月 6 日，有媒体把标题写成「Meta 版 ChatGPT 被迫开源」（[36氪](https://www.36kr.com/p/2159588915421193)）。

## 当年为什么这么做

Meta 当时的处境是：闭源对手跑在前面，自己没有能卖的产品，但有人、有卡、有论文传统。给研究社区一份可复现的模型，换来引用、人才和「开放也能做出好东西」的名声，比追一场发布会便宜。

不给商用，是为了不让这份礼物挤掉自己未来的产品线。这个算盘在纸面上成立。

它唯一没算到的是：权重是文件。文件一旦离开服务器，许可条款就只剩下道德约束力。

## 走对的和走岔的

走对的是底座。漏出来的权重让没有算力的人第一次有了能改的东西。几周之内，Alpaca、Vicuna 这类项目就出现了（[Alpaca](https://github.com/tatsu-lab/stanford_alpaca)、[Vicuna](https://github.com/lm-sys/FastChat)）。中文团队的第一版模型，不少也是在 LLaMA 权重上微调的——这是印象，不是统计。私有部署和垂直行业微调，都是从这一步开始的。

走岔的是词义。2023 年 7 月，Llama 2 改成可商用许可（[Meta 公告](https://about.fb.com/news/2023/07/llama-2/)）；2024 年 4 月，Llama 3 发布，8B 和 70B，15T token 训练（[Meta 博客](https://ai.meta.com/blog/meta-llama-3/)）；7 月，Llama 3.1 放出 405B，许可放宽到允许用输出改进别的模型（[Meta 博客](https://ai.meta.com/blog/meta-llama-3-1/)）。

但「开源」这个词被用得太顺了。Llama 3.1 的许可文本里写着：月活超过 7 亿要单独向 Meta 申请，产品要标「Built with Llama」，还要遵守一份可接受使用政策（[许可原文](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE)）。权重给了，训练数据、数据配方、完整的训练流水线没给。

这叫开放权重。开放权重是一门生意，开源是一种承诺，两者长得像，签字的地方不一样。

## 现在还剩什么

位置：Llama 成了默认基线。新模型发布，第一件事是跟它比；创业公司选底座，第一件事是看它能不能改。3.1 发布时，官方说全系累计下载超过 3 亿次。

习惯：先放权重，再放论文，最后打许可的补丁。

Meta 没靠模型本身赚到钱，赚的是生态位——这句是判断，不是财报。它真正卖出去的东西，是「AI 不该只有几家能做」这个说法。这个说法后来成了它自己的护城河。

## 饭桌上怎么说

- **同事局**：「它不是把配方给了你，是把做好的半成品放在门口，谁都能拿走。」
- **老板局**：「我们省下的授权费，是别人战略预算里的一行。」
- **亲戚局**：「东西是白送的，但送东西的人赚的是别处的钱。」

## 时间线

- 2023 年 2 月 27 日，LLaMA 论文公开，7B 到 65B，仅限研究用途（[论文](https://arxiv.org/abs/2302.13971)）。
- 2023 年 3 月，权重在海外论坛与 Hugging Face 上流传（[36氪](https://www.36kr.com/p/2159588915421193)）。
- 2023 年 7 月 18 日，Llama 2 发布，许可转为可商用（[Meta 公告](https://about.fb.com/news/2023/07/llama-2/)）。
- 2024 年 4 月 18 日，Llama 3 发布，8B 与 70B，15T token 训练（[Meta 博客](https://ai.meta.com/blog/meta-llama-3/)）。
- 2024 年 7 月 23 日，Llama 3.1 发布，405B 开放权重，上下文 128K（[Meta 博客](https://ai.meta.com/blog/meta-llama-3-1/)）。

## 参考

- Meta AI：《Introducing Meta Llama 3》，2024-04-18. https://ai.meta.com/blog/meta-llama-3/（访问于 2026-11-10）.
- Meta AI：《Introducing Llama 3.1》，2024-07-23. https://ai.meta.com/blog/meta-llama-3-1/（访问于 2026-11-10）.
- Meta：《Meta and Microsoft Introduce the Next Generation of Llama》，2023-07-18. https://about.fb.com/news/2023/07/llama-2/（访问于 2026-11-10）.
- Hugo Touvron 等：《LLaMA: Open and Efficient Foundation Language Models》，arXiv:2302.13971，2023. https://arxiv.org/abs/2302.13971（访问于 2026-11-10）.
- 36氪：《Meta 版 ChatGPT 惨遭「开源」？最新大模型 LLaMA 被泄露》，2023-03-06. https://www.36kr.com/p/2159588915421193（访问于 2026-11-10）.
