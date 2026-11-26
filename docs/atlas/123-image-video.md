# 图像与视频：卖能力的人和卖眼光的人

生成图像用了三年变成水电，生成视频用两年半才证明它还不是。

这一族里有两门生意。一门卖能力，模型能出图、出片，按张、按秒收费；一门卖眼光，知道该出什么、哪一版能投、哪一帧能留。前者随算力降价，后者按项目收费。

## 这一族怎么长出来的

2022 年 8 月，Stable Diffusion 公开权重（[Stability AI](https://stability.ai/news-updates/stable-diffusion-public-release)）。换掉的是「模型留在公司手里」：能力变成一个可下载的文件，一张显卡就能跑，社区开始训 LoRA，提示词从技术活变成手工艺。

2022 年 7 月，Midjourney 在 Discord 开放测试，按月订阅（[时间线](https://shapeofintelligence.com/timeline/2022-midjourney/)）。换掉的是「会调参数」的价值：它把参数藏起来，只留四个按钮，卖的是挑图那双眼睛。同期 DALL·E 2 把文字出图变成大众话题，DALL·E 3 把生成塞进对话框，提示词的溢价进一步被抹平。

2023 年 7 月，SDXL 1.0 发布（[Stability AI](https://stability.ai/press-articles/stable-diffusion-xl-1-featured-amazon-aws-bedrock)）；2024 年 8 月，Flux.1 以 12B 参数开源权重、同时开 API（[Black Forest Labs](https://bfl.ai/blog/24-08-01-bfl)）。换掉的是「开源必然落后」：权重追平之后，接口不再是护城河，值钱的东西从模型挪到工作流。

2024 年 2 月，Sora 放出样片；2024 年 12 月开放使用；2025 年 9 月 30 日 Sora 2 上线；2026 年 3 月 24 日宣布停服，应用在 4 月 26 日关停，接口在 9 月 24 日关停（[Sora 词条](https://en.wikipedia.org/wiki/Sora_(text-to-video_model))）。日均成本约 100 万美元，用户峰值约 100 万后跌到 50 万以下（[报道](https://timesofindia.indiatimes.com/technology/tech-news/million-dollar-reason-why-openai-shut-down-its-once-hot-app/articleshowprint/129894380.cms)）。换掉的是「视频是下一个 ChatGPT」这个假设。

同一条线上，可灵在 2024 年 6 月上线，扩散主干加自研 3D 变分自编码器（[可灵词条](https://en.wikipedia.org/wiki/Kling_AI)）；Veo 3 在 2025 年 5 月把声音一起生成（[TechCrunch](https://techcrunch.com/2025/05/20/googles-veo-3-can-generate-videos-and-soundtracks-to-go-along-with-them/)）；Seedance 1.0 在 2025 年 6 月公开技术报告，支持两三个镜头、十秒、1080p（[字节 Seed](https://seed.bytedance.com/zh/blog/tech-report-of-seedance-1-0-is-now-publicly-available)）。视频从「几秒无声片段」变成「能剪进片子的素材」。

## 技术路线

图像这一支基本收敛：潜空间扩散加 Transformer 主干，开放权重与闭源接口并存，差别在审美调校和版权策略。

视频这一支没收敛，分歧有三条。

扩散还是自回归。主流是扩散 Transformer：Sora 走这条，Seedance 把空间层和时间层拆开做，可灵在扩散主干上加三维压缩。自回归视频一直有人做，但公开榜单的前排仍是扩散系。

开放权重还是闭源接口。图像有可下载的权重，才长出 LoRA、节点式工作流和一整套模板市场；视频的权重基本不开，能力锁在接口后面，于是「怎么用」比「用什么」更值钱。

卖模型还是卖工作流。模型商按秒计费，价格跟着算力走；工具商卖分镜、角色一致性、批量出片，按项目收费。前者会被降价追上，后者卖的是判断，降价降不到它头上。

## 现在谁在用

广告和电商最稳：主图、模特换装、场景图按张算，投放素材按条批量出，一次测试的成本从「拍一条」降到「生成十条」。

短剧最热，也最拧巴。2026 年一季度，全行业上线微短剧约 12.8 万部，其中 AI 微短剧约 12.2 万部，占比超过 95%（[中国青年报](https://s.cyol.com/articles/2026-05/01/toutiao_Q4aYQGfW.html)）。同一个档期，真人剧上线量约为 AI 剧的五十分之一，总播放量却是 AI 剧的 25 倍。供给被 AI 填满，注意力还在真人身上，于是短剧工厂一边用 AI 出片，一边把预算花在剧本和演员上。

独立创作者是第三类买家：用 Flux 加 LoRA 画概念图，用可灵或 Seedance 做动态分镜，按条付费，不养团队。他们买的不是能力，是「今天能交片」。

## 预期寿命

第一，还能当默认选择多久。图像生成作为独立品类，估计还有 2 到 3 年；视频生成作为独立产品，窗口更短，1 到 2 年。两个都是估计值，不是统计值。

第二，判断依据。用户在搬家：从单独的图像工具搬进工作流，再搬进平台内置的生成按钮。价格在跌：按秒计价持续下探，行业没有统一价目表，方向是单向下行。生态在长：LoRA、节点式工作流、模板市场都围着开放权重长。接口在废：Sora 的接口活不到两年就关，模型版本一年换几代，接口的寿命比模型还短。

第三，过期的信号。角色一致性和多镜头变成默认能力；工具商开始卖模板而不是卖服务；按秒价格跌到和按张同一个量级；平台把生成直接放进投放后台；AI 短剧的播放量追上真人剧。看到其中两条，这一篇就该重写。

## 参考

- Stability AI：《Stable Diffusion Public Release》，2022-08-22，<https://stability.ai/news-updates/stable-diffusion-public-release>，访问日期 2026-11-26
- Stability AI：《Stable Diffusion XL 1.0》，2023-07-26，<https://stability.ai/press-articles/stable-diffusion-xl-1-featured-amazon-aws-bedrock>，访问日期 2026-11-26
- Black Forest Labs：《Announcing Black Forest Labs》，2024-08-01，<https://bfl.ai/blog/24-08-01-bfl>，访问日期 2026-11-26
- Shape of Intelligence：《Midjourney timeline》，2022，<https://shapeofintelligence.com/timeline/2022-midjourney/>，访问日期 2026-11-26
- Wikipedia：《Sora (text-to-video model)》，<https://en.wikipedia.org/wiki/Sora_(text-to-video_model)>，访问日期 2026-11-26
- Times of India：《Million-dollar reason why OpenAI shut down its once-hot app》，2026-03-30，<https://timesofindia.indiatimes.com/technology/tech-news/million-dollar-reason-why-openai-shut-down-its-once-hot-app/articleshowprint/129894380.cms>，访问日期 2026-11-26
- Wikipedia：《Kling AI》，<https://en.wikipedia.org/wiki/Kling_AI>，访问日期 2026-11-26
- 字节跳动 Seed：《Seedance 1.0 技术报告》，2025-06-11，<https://seed.bytedance.com/zh/blog/tech-report-of-seedance-1-0-is-now-publicly-available>，访问日期 2026-11-26
- 中国青年报：《AI 微短剧的供给与播放》，2026-05-01，<https://s.cyol.com/articles/2026-05/01/toutiao_Q4aYQGfW.html>，访问日期 2026-11-26
- TechCrunch：《Google's Veo 3 can generate videos and soundtracks》，2025-05-20，<https://techcrunch.com/2025/05/20/googles-veo-3-can-generate-videos-and-soundtracks-to-go-along-with-them/>，访问日期 2026-11-26
