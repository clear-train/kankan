# Anthropic：把所有赌注押在「不敢做的事」上

## 这一族怎么长出来的

2021 年，一队从 OpenAI 出来的人拉了一家新公司，A 轮 1.24 亿美元，领投方 Jaan Tallinn（[Anthropic](https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems)）。融资稿里报的家底不是模型，是做过 GPT-3、写过规模定律、拆过神经元的那批人。

2023 年 3 月 14 日，Claude 第一次对外开放（[Anthropic](https://www.anthropic.com/news/introducing-claude)）。7 月，Claude 2，上下文拉到十万 token，主要卖给企业（[Anthropic](https://www.anthropic.com/news/claude-2)）。

2024 年 3 月 4 日，Claude 3 一次给三档：Haiku、Sonnet、Opus，按能力和价格分层（[Anthropic](https://www.anthropic.com/news/claude-3-family)）。6 月出 3.5 Sonnet，把「够用且便宜」这一档做成主力（[Anthropic](https://www.anthropic.com/news/claude-3-5-sonnet)）。

2025 年 5 月 22 日，Claude 4（[Anthropic](https://www.anthropic.com/news/claude-4)）。

2026 年是钱和上市的一年。2 月 G 轮 300 亿美元，投后 3800 亿；5 月 H 轮 650 亿，投后 9650 亿（[Anthropic](https://www.anthropic.com/news/series-h)）。6 月 1 日秘密递交 S-1（[Anthropic](https://www.anthropic.com/news/confidential-draft-s1-sec)），10 月 26 日公开递交，代码 ANT（[Anthropic](https://www.anthropic.com/news/s1-sec)）。11 月 9 日一份定价版本流出又被撤回（[Reuters](https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775)）；11 月 18 日定价每股 83 美元，11 月 20 日交割，含超额配售共 11.27 亿股（[Anthropic](https://www.anthropic.com/news/ipo-close)）。按发行价与股数算，这一单约 935 亿美元。

## 技术路线

三条线，彼此咬着。

宪法式 AI。不给它一长串「不许做」，给它一份原则，让它拿原则批评自己的回答，再按批评重写（[arXiv](https://arxiv.org/abs/2212.08073)）。好处是可扩展：改原则比改标注便宜。代价是原则本身谁写、写得多细，成了新的争点——2026 年的新版宪法把这层摊开写了，四层优先级从「广义安全」一路排到「真帮忙」（[Anthropic](https://www.anthropic.com/news/claude-new-constitution)）。

可解释性。打开模型看里面有什么，而不是只看输出。这条线短期不赚钱，长期是它跟对手的差别：能说清「它为什么这么答」，企业才敢签字。

长上下文与工具使用。十万 token 起步，后来是二十万；工具调用让它能读文件、跑命令、改代码。企业要的不是聪明，是「一次能塞进一整个代码库」。

三条合起来是一句话：所有技术选择都指向「可被审计」。

## 现在谁在用

企业与编程为主。2025 年底年化收入约 90 亿美元，2026 年 4 月过 300 亿（[Reuters](https://en.aletihad.ae/news/ai/4660793/google-plans-to-invest-up-to--40-billion-in-anthropic--bloom)）。客户是写代码的、写文档的、跑合规的——都是有人签字、有预算科目的地方。

个人用户少，这是结构性选择，不是失手：资源压在 API 与企业合同上，消费级入口始终不是主战场。

上市之后多一类人：公开市场股东。他们不看榜单，看季报。

## 预期寿命

这一节全部是估计值。

企业这条路线，18 到 30 个月内不会被价格战拖下来，但毛利会被压。这是区间，不是预言。

依据三条。一，用户在搬家有成本：换模型要重做评测、重写提示、重跑合规，采购周期以季度计，价格战打不进已经签了的合同。二，价格在跌：推理成本每年往下走一截，降价会先出现在通用对话这种标准化场景，不容易出现在定制合同里。三，生态在长：云市场、IDE、Agent 框架都接进来了，接得越深越难拆；但接口也在废，旧模型一轮轮下线，用户每隔一两年就得重估一次。

真正的风险不在价格，在结构：上市之后有季度压力，降价是最快的增长手段，也是最伤毛利的手段。这两件事同时成立时，先动的是安全团队的预算。

过期信号四个：毛利率连续两个季度下滑；头部客户开始自建；对手用「云+办公」打包抢单；开源权重追到企业能接受的门槛。出现两个，这一节的判断就该重写。

## 参考

- Anthropic：《Anthropic raises $124 million to build more reliable, general AI systems》，2021-05-28，https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems，访问日期 2026-11-26
- Anthropic：《Introducing Claude》，2023-03-14，https://www.anthropic.com/news/introducing-claude，访问日期 2026-11-26
- arXiv：《Constitutional AI: Harmlessness from AI Feedback》，2022-12-15，https://arxiv.org/abs/2212.08073，访问日期 2026-11-26
- Anthropic：《Claude 3 family》，2024-03-04，https://www.anthropic.com/news/claude-3-family，访问日期 2026-11-26
- Anthropic：《Claude 4》，2025-05-22，https://www.anthropic.com/news/claude-4，访问日期 2026-11-26
- Anthropic：《Anthropic files S-1 with the SEC for proposed initial public offering》，2026-10-26，https://www.anthropic.com/news/s1-sec，访问日期 2026-11-26
- Anthropic：《Anthropic announces closing of initial public offering》，2026-11-20，https://www.anthropic.com/news/ipo-close，访问日期 2026-11-26
- Reuters：《Anthropic's nearly $70bln IPO plan briefly circulated to banks, then retracted》，2026-11，https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/anthropics-nearly-70bln-ipo-plan-briefly-circulated-to-banks-then-retracted-2142775，访问日期 2026-11-26
