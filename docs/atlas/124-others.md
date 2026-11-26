# 长尾：Mistral、xAI、Cohere、Nova，还有国产那几家

这一批公司很少出现在「最强模型」的标题里，但它们在采购单上。长尾不是技术路线，是采购结构：每一朵云、每一个区域、每一个行业，都想要一个自己的模型。

## 这一族怎么长出来的

2023 年 4 月，Mistral 在巴黎成立（[报道](https://www.swissinfo.ch/por/mistral,-a-joia-francesa-da-ia-generativa-que-quer-desafiar-os-gigantes-americanos/88731065)）；同年 12 月，Mixtral 8x7B 开放权重（[Mistral](https://mistral.ai/news/mixtral-of-experts)）。换掉的是「欧洲只能买美国接口」：权重交到客户手里，卖点从能力变成「东西在我这儿」。

2023 年 7 月，xAI 成立，Grok 接进 X。2024 年 7 月，孟菲斯的 Colossus 集群点亮，10 万张 H100，从动工到通电 122 天（[SDxCentral](https://www.sdxcentral.com/news/xai-to-double-colossus-compute-capacity-reveals-cluster-uses-nvidia-spectrum-x-ethernet/)）。换掉的是「模型公司只卖模型」：算力和分发本身成了产品。

2024 年 12 月，Amazon Nova 在 re:Invent 发布（[Amazon](https://press.aboutamazon.com/2024/12/introducing-amazon-nova-a-new-generation-of-foundation-models)）。换掉的是「云厂商只转售别人的模型」：云开始自己供最便宜的那一档。

国产三家几乎同时起步：2023 年 4 月商汤日日新（[证券时报](https://www.stcn.com/article/detail/837496.html)），2023 年 5 月讯飞星火（[安徽省科技厅](https://kjt.ah.gov.cn/public/21671/121696711.html)），2023 年 9 月腾讯混元（[腾讯](https://www.tencent.com/en-us/articles/2201685.html)）。换掉的是「模型只能从研究院出来」：云、硬件、行业数据各长出一条线。

## 技术路线

一句话各自的位置。

Mistral 卖「可下载的前沿」：开放权重加专家混合，重心转向私有化部署和欧洲客户。xAI 卖「实时」：前沿规模、自有集群、社交分发绑在一起。Cohere 不做通用助手，做企业检索、嵌入和重排，卖「接进你的库」（[Command 系列](https://cohere.com/blog/command-series-0824)）。Nova 对齐 Bedrock 的价格和延迟，卖「够用且便宜」。混元、星火、日日新绑各自的云、硬件和行业项目，卖「交付」。

分野只有两条：卖前沿的靠融资和算力续命，卖交付的靠合同和集成续命。

## 现在谁在用

Mistral：欧洲的企业与公共部门做私有化部署。2025 年 9 月，ASML 以 13 亿欧元领投，拿到约 11% 股份和一个顾问席位（[新华社](https://english.news.cn/20250909/abd052bf65314c9a91f356179bcf2039/c.html)）。股东同时是客户，这是长尾公司最想要的结构。

xAI：X 的订阅用户和接口调用方。Colossus 既是训练场，也是谈判筹码，算力规模本身就是融资材料。

Cohere：企业知识库、客服、检索增强。它卖的不是聊天，是把模型接进别人已有的文档和权限体系。

Nova：AWS 客户在 Bedrock 上按量调用。没有公开的客户名单和收入拆分，能确认的只有「按量计费、与其他模型并列可选」。

混元、星火、日日新：腾讯云客户与自家游戏社交场景；教育硬件与办公；视觉、汽车、医疗的项目制交付。三家的共同点是不单独卖模型，模型是合同里的一项。

## 预期寿命

第一，这一批作为独立模型公司，还能当默认选择 3 到 5 年（估计值）。卖交付的活得久一些，因为它们卖的是集成和合同；卖前沿的看融资节奏和算力补给。

第二，判断依据。大厂在补贴：云厂商用别处的利润给模型定价，价格随时能压到成本线以下。生态在被吸走：开放权重让能力持续贬值，客户留在了云上，模型只是其中一栏。接口在废：版本迭代以季度计，旧模型下线，迁移成本由客户承担。用户在搬家：企业采购从「选模型」变成「选云」，模型成了附件。

第三，过期的信号。停止发布新基座，只做微调和行业版；云厂商把同类模型价格再砍一半；开源社区出现同尺寸更强的权重；出现合并或收购；某家开始靠合规认证而不是跑分卖模型。看到两条，这一篇就该重写。

## 参考

- Mistral AI：《Mixtral of Experts》，2023-12-11，<https://mistral.ai/news/mixtral-of-experts>，访问日期 2026-11-26
- Swissinfo：《Mistral, a joia francesa da IA generativa》，2024，<https://www.swissinfo.ch/por/mistral,-a-joia-francesa-da-ia-generativa-que-quer-desafiar-os-gigantes-americanos/88731065>，访问日期 2026-11-26
- SDxCentral：《xAI to double Colossus compute capacity》，2024-12，<https://www.sdxcentral.com/news/xai-to-double-colossus-compute-capacity-reveals-cluster-uses-nvidia-spectrum-x-ethernet/>，访问日期 2026-11-26
- Amazon：《Introducing Amazon Nova》，2024-12-03，<https://press.aboutamazon.com/2024/12/introducing-amazon-nova-a-new-generation-of-foundation-models>，访问日期 2026-11-26
- Cohere：《Command series update》，2024-08，<https://cohere.com/blog/command-series-0824>，访问日期 2026-11-26
- 新华社：《ASML 领投 Mistral》，2025-09-09，<https://english.news.cn/20250909/abd052bf65314c9a91f356179bcf2039/c.html>，访问日期 2026-11-26
- 腾讯：《腾讯混元大模型》，2023-09，<https://www.tencent.com/en-us/articles/2201685.html>，访问日期 2026-11-26
- 安徽省科技厅：《讯飞星火》，2023-05，<https://kjt.ah.gov.cn/public/21671/121696711.html>，访问日期 2026-11-26
- 证券时报：《商汤日日新》，2023-04，<https://www.stcn.com/article/detail/837496.html>，访问日期 2026-11-26
