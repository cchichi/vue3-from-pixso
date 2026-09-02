# Vue3 × Pixso 学习资源

主教材以官方文档为准；每课会引用本表资源。**知识讲解只从这里取材，不凭记忆瞎编。**

## Knowledge（知识）

- [Vue 官方文档（中文）— 入门](https://cn.vuejs.org/guide/introduction.html)
  官方主教材，对应英文 [vuejs.org](https://vuejs.org/guide/introduction.html)。用于：Vue3 一切概念（响应式、模板语法、组件）。里程碑 4 起每课必引。
- [Vue 官方交互式教程（中文）](https://cn.vuejs.org/tutorial/)
  边做边学的小关卡。用于：里程碑 4–6 的随堂练习与复习（检索练习）。
- [MDN：Web 开发入门（中文）](https://developer.mozilla.org/zh-CN/docs/Learn_web_development)
  HTML / CSS / JS 最权威的免费教材。用于：里程碑 1–3 的知识引用与课外阅读。
- [MDN：HTML 基础](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content)
  HTML 标签、文档结构。用于：第 1–2 课引用。
- [MDN：CSS 入门](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics)
  选择器、盒模型、布局。用于：里程碑 2 引用。
- [MDN：JavaScript 第一步](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Scripting)
  变量、函数、事件、DOM 初识。用于：里程碑 3 引用。
- [Pixso 官方文章：Design to Code（D2C）](https://pixso.net/articles/design-to-code/)
  Pixso 官方 D2C 说明：开发/设计模式下选代码框架（支持 Vue / React / HTML / ArkUI / Flutter），一键识别图层布局与设计系统组件，可提取样式、设计 token、组件。用于：里程碑 7「导出」环节的操作依据，第 7 课前需再次深读并按当时实际界面核实。
- [Pixso 开发者文档：D2C⁺ 快速开始（中文）](https://pre.pixso.cn/developer/zh/d2c/quick-start.html)
  D2C⁺（企业研发模式设计转代码）官方文档：入口（右上角研发模式 → 右栏 D2C → D2C⁺）、多框架输出（React/Vue/Flutter）、DSM 组件映射、前提条件。⚠️ 前提：企业版 全功能/研发席位，且文件须在企业空间。
- [Pixso 开发者文档：MCP 工具与指令](https://pre.pixso.cn/developer/zh/mcp/tools.html)
  Pixso MCP 工具清单：`design_to_code`（按 Pixso 链接生成 Vue 等代码）、`refine_generated_code`、`get_export_image`、`take_screenshot`、`get_node_dsl` 等；同样要求企业席位。用于：里程碑 7 路线 B（Agent 代转）。
- [Vite 官方文档（中文）](https://cn.vitejs.dev/guide/)
  本地开发服务器与构建工具。用于：里程碑 5 搭建工程。

## Wisdom（社区 / 实践场）

- [Vue 官方论坛 / Discord](https://discord.gg/vue)
  官方社区，提问质量高。用于：里程碑 6 之后遇到官方文档没讲清的问题。
- [掘金（Vue 标签）](https://juejin.cn/tag/Vue.js)
  中文一线开发者聚集地，教程与踩坑文章多。用于：查中文踩坑经验（注意甄别版本是否为 Vue3）。
- 学习建议：先自学 + 问 AI 老师，确有需要再加入社群。

## Gaps（缺口，驱动后续检索）

- ~~Pixso D2C 导出「Vue 代码」后落到真实 Vite 工程里的具体格式与改造步骤~~ → 已研究主体，见 `research/0001-pixso-d2c-vue-research.md`；Vue 代码包的实际工程结构（是否自带构建配置/.vue 文件）待里程碑 7 用用户真实文件实证。
- ~~Pixso 中文界面上 D2C 功能入口的中文名称与当前版本差异~~ → 已确认中文名为「研发模式 + D2C⁺」（见开发者文档）；用户实际版本入口以实操为准。
- 用户的 Pixso 账号席位/企业空间状态未知 → 决定里程碑 7 走 A（官方 D2C⁺）/ B（MCP）/ C（手工）哪条路线，须向用户确认。
