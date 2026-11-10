# Claude：把价值观写下来，交给它自己执行

## 它的来路

Anthropic 的创始团队是从 OpenAI 出来的，在那边做过缩放规律、GPT-3、可解释性。分出来的理由，不是「路线不同」，是「还要不要继续加速」。他们自己的说法是：相信这件事影响会很大，但不相信它会顺利。

2022 年春天，他们训出第一版 Claude，决定先不发布，拿去当安全研究的对象。这在当时是个不划算的选择：模型能用了，却不许用。

同年 12 月，宪法式 AI 的论文出来了。办法不复杂：给模型一份写下来的原则，让它按原则批评自己的回答，再按批评改。

## 当年为什么这么做

因为 RLHF 卡在人的身上。要人一条条判断「这个回答好不好」，规模一上去，人就跟不上；标注员的标准会漂，模型还会学会讨好标注员——讨好在训练里是加分项。

宪法式做法把「判断」换成「引用」：人不写每条答案，只写原则；模型自己拿原则去批自己。省人，而且可审计——原则是文本，谁都能读。

用「宪法」这个词，是因为它把「我们希望它怎样」从训练者的手感，变成一份可以被引用、被争论的文件。争的东西从「你不懂技术」变成「你这条原则写错了」，这算进步。

代价也清楚：原则是公司写的。写的人，决定了模型在边界上偏向谁。

## 走对的和走岔的

走对的地方，是它把对齐从「标数据」变成了「写文本」。这套方法后来很多实验室都在用，不管叫不叫宪法。由此长出来的还有一类承诺：能力到某一档，先评估，再决定发不发。

走岔的地方，是合法性问题。一份公司写的文件，凭什么代表「广泛安全」？批评者的说法是，这等于把伦理外包给法务；支持者的说法是，写出来总比藏在训练者脑子里强，至少可以吵。

2026 年，新版宪法发布，CC0 放开，写明四层优先级：先广泛安全，再广泛合乎伦理，再遵守 Anthropic 的指南，最后才是有用。它承认了意图和行为之间有缝。这条缝，正是所有安全叙事的软肋。

还有一条更少人提：要做安全研究，就得先做出前沿模型。这个先有鸡还是先有蛋的处境，他们自己写在文章里。

## 现在还剩什么

留下的是一套动作：写原则、让模型自评、再训练。它现在是行业惯例的一部分。

留下的是一个组织实验：公益公司加长期利益信托，试着把「使命」写进治理，而不是写进博客。它能不能挡住钱，还没有被验证过。

留下的问题最硬：谁来审这份宪法。公司说欢迎外部评估，但评估的范围、标准、有没有否决权，仍在公司手里。它把「判断」推给了写原则的人，把「监督」推给了还没有权力的外部机构。

## 饭桌上怎么说

- **同事局**：「它不是被教出来的，是被念出来的。一份原则，自己批自己，批完再改。」
- **老板局**：「对齐不是加过滤器，是写一份公司愿意被引用的文件。写不出，就别谈安全。」
- **亲戚局**：「像给孩子立家规。规矩写下来了，谁写的、谁能改，才是真问题。」

## 时间线

- 2021：完成 1.24 亿美元 A 轮，领投方为 Jaan Tallinn（[Anthropic](https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems)）。
- 2022：春天训出第一版 Claude，先拿去做安全研究（[Anthropic](https://www.anthropic.com/news/core-views-on-ai-safety)）。
- 2022：宪法式 AI 论文发表，用 AI 反馈替代部分人工标注（[论文](https://arxiv.org/abs/2212.08073)）。
- 2023：Claude 公开发布（[Anthropic](https://www.anthropic.com/news/introducing-claude)）。
- 2026：新版宪法发布，四层优先级，CC0（[Anthropic](https://www.anthropic.com/news/claude-new-constitution)）。

## 参考

- Anthropic, *Anthropic raises $124 million to build more reliable, general AI systems*, 2021. https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems（访问于 2026-11-10）
- Anthropic, *Core views on AI safety*, 2023. https://www.anthropic.com/news/core-views-on-ai-safety（访问于 2026-11-10）
- Anthropic, *Constitutional AI: Harmlessness from AI Feedback*, 2022. https://arxiv.org/abs/2212.08073（访问于 2026-11-10）
- Anthropic, *Introducing Claude*, 2023. https://www.anthropic.com/news/introducing-claude（访问于 2026-11-10）
- Anthropic, *Claude's new constitution*, 2026. https://www.anthropic.com/news/claude-new-constitution（访问于 2026-11-10）
