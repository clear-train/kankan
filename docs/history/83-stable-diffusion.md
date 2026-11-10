# Stable Diffusion：把画笔扔进人群里

## 它的来路

2022 年 8 月 22 日，Stability AI 的博客发出一篇短公告，标题就叫「Stable Diffusion 公开版」（[Stability AI](https://stability.ai/blog/stable-diffusion-public-release)）。公告里有一句我很喜欢：把人类视觉信息压进一个几 GB 的文件。那天放出来的是 1.4 的权重，许可证叫 CreativeML OpenRAIL-M，商用可以，附带一长串「不许拿它干这些事」的条款。两个月后，RunwayML 在 Hugging Face 上放了 1.5（[Hugging Face](https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5)）。

它也不是从零长出来的。开发由慕尼黑大学 CompVis 组和 Runway 的研究者主导，Stability 出算力，数据是 LAION-5B 的三个子集，从公开网页抓来的图文对（[Wikipedia](https://en.wikipedia.org/wiki/Stable_Diffusion)）。

## 当年为什么这么做

2022 年夏天，比它好看的图已经有人做了。Midjourney 出图更精致，DALL·E 2 在 OpenAI 手里，两家都只能上网、付钱、排队。Stability 反过来：权重给你，回家自己跑。

这不是大方，是算账。闭源把模型当产品卖，一份一份收钱；开源把模型当零件送，谁装机谁就是生态。零件不要钱，装机的人多了，云、服务、定制这些活才有人来找你。

还有一层更朴素的：用法在谁手里，就不由一家公司说了算。权重放出去，改它的人比写它的人多，这模型才活得过一个版本周期。

## 走对的和走岔的

走对的第一件，是让改。LoRA 2021 年就有论文（[arXiv](https://arxiv.org/abs/2106.09685)），2022 年被搬进 SD 生态，一张显卡、几十张图，就能训出一个人的画风。

第二件，是让控。2023 年 2 月的 ControlNet 把构图从提示词里拿出来，用线稿、骨架、深度图直接管（[arXiv](https://arxiv.org/abs/2302.05543)）。会画画的人第一次觉得这东西能干活，而不是抽奖。

第三件，是让装。ComfyUI 把流程拆成节点（[GitHub](https://github.com/comfyanonymous/ComfyUI)），Civitai 把风格做成货架，国内的 liblibAI 走同一条路。「本地跑图」自己成了一门手艺，显卡多了一个卖点。显存 2.4 GB 就能跑，这是它比同时代模型更狠的地方。

走岔的地方，长在钱上。

公司没赚到生态的钱。2024 年 3 月 23 日，创始人 Emad Mostaque 辞去 CEO（[The Verge](https://www.theverge.com/2024/3/23/24109511/stability-ai-ceo-emad-mostaque-resignation-decentralized-ai)）；4 月，公司裁员重组（[Reuters](https://nz.finance.yahoo.com/news/1-stability-ai-lay-off-123103318.html)）；6 月，Prem Akkaraju 接任，新钱进来。生态越长越大，账越算越紧。

版本也乱过。2.x 被社区嫌不好调，大家抱着 1.5 不放；3 Medium 发出来，公司自己在公告里承认它没达到自家标准，也没达到社区预期（[Stability AI](https://stability.ai/news/introducing-stable-diffusion-3-5)）。3.5 到 2024 年 10 月才补上，8.1B 的 Large 开放权重，许可证换成社区版，年收入 100 万美元以下免费商用。

定位也一直在摆：一边是给所有人的工具，一边是给娱乐公司的生产线。2026 年 8 月那轮 7600 万美元，投资方是环球、索尼、华纳、EA（[TechCrunch](https://techcrunch.com/2026/08/25/stability-ai-maker-of-image-generator-stable-diffusion-raises-76-million-in-fresh-funding/)）——答案已经写在这儿了，卖服务，不卖模型。

版权这件事，绕不过去。

训练数据是公开网页抓的。2023 年 1 月，三位艺术家把 Stability、Midjourney、DeviantArt 一起告了（[The Verge](https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart)）；同月，Getty Images 在英国高等法院起诉。

2025 年 11 月 4 日，一审判决下来。Getty 在结案陈词里撤了最核心的「训练侵权」，法院实际只审了两件事：把模型下载到英国算不算间接侵权，以及商标（[Slaughter and May](https://www.slaughterandmay.com/insights/ip-brief/the-ip-brief-november-2025/)）。结论是模型里没有存任何一张 Getty 的图，不构成间接侵权；商标上 Getty 赢了一部分，稀释那些主张输了。

两种立场都在。一边说训练就是复制，没许可证就是侵权；一边说模型学的是统计规律，不存副本，画出来的每一张都是新图。法院这次只回答了英国法下的一小块，没回答「训练本身合不合法」——美国那边还在打。

## 现在还剩什么

位置：图像开源模型的事实标准之一。今天几乎每一份「本地跑图」教程，第一课都是它。

习惯：先放权重，再谈生意；模型归社区，公司卖云、卖服务、卖定制。

留下一句话：开源赢的是生态，输的是账本，这两件事同时发生，不矛盾。

留下一个问题：当「能下载」不再稀奇，开源模型的护城河是什么——社区、许可证，还是那几个人的品味。

## 饭桌上怎么说

- **同事局**：「它把画笔扔进人群，自己没捡回来。」
- **老板局**：「开源赢生态，输账本，两件事一起发生。」
- **亲戚局**：「以前画画靠手，现在靠一句话，话得说对。」

## 时间线

- 2022 年 8 月 22 日，Stable Diffusion 1.4 的权重公开，OpenRAIL-M 许可证（[Stability AI](https://stability.ai/blog/stable-diffusion-public-release)）。
- 2022 年 10 月 20 日，RunwayML 在 Hugging Face 放出 1.5（[Hugging Face](https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5)）。
- 2023 年 1 月，艺术家与 Getty Images 分别起诉 Stability AI（[The Verge](https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart)）。
- 2024 年 3 月 23 日，创始人 Emad Mostaque 辞去 CEO，次月公司裁员重组（[The Verge](https://www.theverge.com/2024/3/23/24109511/stability-ai-ceo-emad-mostaque-resignation-decentralized-ai)）。
- 2024 年 10 月 22 日，Stable Diffusion 3.5 发布，Large 8.1B 开放权重（[Stability AI](https://stability.ai/news/introducing-stable-diffusion-3-5)）。
- 2025 年 11 月 4 日，英国高院一审判决，Getty 的间接侵权主张被驳回（[Slaughter and May](https://www.slaughterandmay.com/insights/ip-brief/the-ip-brief-november-2025/)）。

## 参考

- Stability AI：《Stable Diffusion Public Release》，2022-08-22. https://stability.ai/blog/stable-diffusion-public-release（访问于 2026-11-10）.
- Wikipedia：《Stable Diffusion》，2026-11-10 访问. https://en.wikipedia.org/wiki/Stable_Diffusion（访问于 2026-11-10）.
- Tom Warren：《Stability AI CEO resigns to “pursue decentralized AI”》，The Verge，2024-03-23. https://www.theverge.com/2024/3/23/24109511/stability-ai-ceo-emad-mostaque-resignation-decentralized-ai（访问于 2026-11-10）.
- Slaughter and May：《The IP Brief - November 2025》，2025-11. https://www.slaughterandmay.com/insights/ip-brief/the-ip-brief-november-2025/（访问于 2026-11-10）.
- Lucas Ropek：《Stability AI, maker of image generator Stable Diffusion, raises $76 million in fresh funding》，TechCrunch，2026-08-25. https://techcrunch.com/2026/08/25/stability-ai-maker-of-image-generator-stable-diffusion-raises-76-million-in-fresh-funding/（访问于 2026-11-10）.
