# DALL·E 卖能力，Midjourney 卖眼光

## 它的来路

2021 年 1 月 5 日，OpenAI 发了一篇博客，标题就叫 DALL·E：把 GPT-3 那套方法从文字挪到像素，输入一句话，输出一张图（[Wikipedia](https://en.wikipedia.org/wiki/DALL-E)）。图很怪，但它是从语言模型里长出来的，不是画出来的。

2022 年 4 月 6 日，DALL·E 2 出来，分辨率和构图都上了一级台阶；同年 9 月底取消等待名单，谁都能用（同页）。

中间隔了十一个月，另一条路上，Midjourney 在 2022 年 7 月 12 日开放测试（[Wikipedia](https://en.wikipedia.org/wiki/Midjourney)）。没有独立网站，入口是 Discord 里的一个机器人：输入 /imagine，排队，等图。

同一个夏天，两拨人做的是同一件事，卖法完全不同。

## 当年为什么这么做

OpenAI 的路子是研究机构的惯常做法：先出模型，再出论文和博客，再开 API，把能力批发给所有想做产品的人。它卖的是「模型能到什么程度」。

Midjourney 反过来。它不做通用模型，也不做 API；钱收在订阅上，用户关在一个聊天室里，互相看、互相投票、互相学提示词。它卖的是「出来的图好不好看」。

为什么图像先落地？因为像素可以立刻评判，也可以立刻卖。一段文字好不好，要读、要信、要时间；一张图好不好，半秒就知道，而且图库、广告、电商本来就有预算。

扩散模型那条线的原理，83 篇写过，这里只留一句：它擅长从噪声里把图「擦」出来，而不是一个像素一个像素往外猜（[回链](/history/83-stable-diffusion)）。

## 走对的和走岔的

OpenAI 走对的是把图像并进了平台叙事：模型、API、企业合同，一张图只是其中一个模态。走岔处也在同一处——它太像研究机构，产品体验一直是配角，用户习惯反而是 Discord 里那批人先养出来的。

Midjourney 走对的是放弃「最先进」，去抓「最常用」。设计师不需要一个能画一切的模型，他们需要一个今晚能交稿的模型。它把能力藏起来，只留下风格和速度。

走岔的是它把护城河修在了别人的地基上：不把力气花在基座上，能力上限就跟着别人的开源进度走；社区做得再好，也挡不住一次模型代差。

第三条路是开源那条，83 篇已写过：权重放出去，成本和风险一起转给使用者（[回链](/history/83-stable-diffusion)）。

## 现在还剩什么

剩下三种位置：卖模型的、卖订阅的、卖权重的。

客户层也分开了。设计公司买改稿速度，电商买主图批量，游戏公司买概念图和贴图草稿。他们买的不是「AI」，是周期从一周压到一小时，以及一张能交给法务的授权凭证。

版权这块，三家给的不是答案，是三种成本分摊。OpenAI 在条款里把输出交给用户，又给企业客户加了版权赔付，等于把诉讼风险买进合同（[The Verge](https://www.theverge.com/2023/11/6/23948486/openai-copyright-shield-legal-fees)）。Midjourney 不对训练数据作公开说明，把商用权限写进订阅档位。开源的 Stable Diffusion 把权重放出去，风险跟着权重走。

2023 年 1 月，三位艺术家起诉 Stability、Midjourney 等（[The Verge](https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart)）。2025 年 9 月，华纳起诉 Midjourney（[Wikipedia](https://en.wikipedia.org/wiki/Midjourney)）。

所以「画出来的图归谁」，眼下不看判决，看合同：条款写在哪家，图就记在哪家名下。这句不好听，但它在饭桌上最管用。

## 饭桌上怎么说

- **同事局**：「做模型的和做审美的，最后卖的不是一个东西。」
- **老板局**：「出事时能拿出合同的那家，才是版权方。」
- **亲戚局**：「跟请摄影师一样，图是你出的钱，版权看你怎么签。」

## 时间线

- 2021：DALL·E 发布，把语言模型挪到图像（[Wikipedia](https://en.wikipedia.org/wiki/DALL-E)）。
- 2022：4 月 DALL·E 2 发布；7 月 Midjourney 开放测试；9 月 DALL·E 2 取消等待名单（[Wikipedia](https://en.wikipedia.org/wiki/DALL-E)、[Wikipedia](https://en.wikipedia.org/wiki/Midjourney)）。
- 2023：1 月，三位艺术家起诉 Stability、Midjourney 等（[The Verge](https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart)）；11 月，OpenAI 推出面向企业客户的版权赔付（[The Verge](https://www.theverge.com/2023/11/6/23948486/openai-copyright-shield-legal-fees)）。
- 2025：9 月，华纳起诉 Midjourney（[Wikipedia](https://en.wikipedia.org/wiki/Midjourney)）。

## 参考

- Wikipedia, *DALL-E*, 2026. https://en.wikipedia.org/wiki/DALL-E（访问于 2026-11-11）
- Wikipedia, *Midjourney*, 2026. https://en.wikipedia.org/wiki/Midjourney（访问于 2026-11-11）
- The Verge, *AI art tools Stable Diffusion and Midjourney targeted with copyright lawsuit*, 2023. https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart（访问于 2026-11-11）
- The Verge, *OpenAI offers to pay for copyright lawsuits faced by its API customers*, 2023. https://www.theverge.com/2023/11/6/23948486/openai-copyright-shield-legal-fees（访问于 2026-11-11）
- 本书：*Stable Diffusion：把模型放出去之后*，/history/83-stable-diffusion
