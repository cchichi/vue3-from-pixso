# Vue3 × Pixso 课程

**从零基础，到把 Pixso 设计稿变成能跑、能改、能交互的 Vue3 页面。**

这是一套**自包含、可自学的开源课程**：每一课是一个独立 HTML 页面，30–45 分钟能完成一课，内含动手练习与即时反馈测验。课程由 AI 老师按「teach」教学法逐课打磨，主线就是设计稿转代码这条真实路径。

> 🌐 **在线学习：** [https://cchichi.github.io/vue3-from-pixso/](https://cchichi.github.io/vue3-from-pixso/)
>
> 课程仍在演进中：第 1–3 课已发布，第 4–7 课持续更新（见路线图）。

## 这门课给谁

- **零前端基础**：HTML / CSS / JS / 框架都没碰过，但想做出真实网页
- **手上有 Pixso（或同类设计工具）设计稿**，想把设计变成能跑的 Vue3 代码
- 学习时间零碎：每课可随时停、随时续

## 路线图（7 个里程碑）

| # | 里程碑 | 状态 |
|---|--------|------|
| 1 | 看得懂网页：HTML 结构与盒子思维 | ✅ 第 1 课 |
| 2 | 给盒子上妆：CSS 与盒模型 | ✅ 第 2 课 |
| 3 | 让页面会思考：JavaScript 基础 | ✅ 第 3 课 |
| 4 | 进入 Vue3：模板语法与响应式 | ⏳ 待发布 |
| 5 | 搭工程：Vite + Vue3，跑起 `npm run dev` | ⏳ 待发布 |
| 6 | 组件化：把设计稿页面拆成组件 | ⏳ 待发布 |
| 7 | 🎯 Pixso 稿 → Vue3 代码 → 跑通 + 假数据交互 | ⏳ 终极里程碑 |

## 目录结构

```
vue3-from-pixso/
├── index.html          # 课程首页（从这里开始）
├── lessons/            # 课程正文（0001-…、0002-…，每课一个 HTML）
├── reference/          # 可打印速查表（HTML / CSS / JS …）
├── assets/             # 共享样式与交互测验组件
├── practice/           # 配套练习文件（跟课动手改）
├── research/           # 备课研究（如：Pixso D2C 转 Vue 的能力与约束）
└── RESOURCES.md        # 官方文档资源清单（MDN / Vue 中文官方 / Pixso 文档）
```

## 快速开始

1. 克隆或下载本仓库
2. 双击打开 `index.html`（浏览器查看课程首页）
3. 从**第 1 课**开始：读课文 → 做练习 → 用测验自查

前几课只需**浏览器 + 文本编辑器**（推荐 [VS Code](https://code.visualstudio.com/)），无需安装任何开发环境；里程碑 5（Vite）起需要 [Node.js](https://nodejs.org/)。

## 学习建议（来自 teach 教学法）

- 每课要**动手做练习**，光看不会
- 学完隔天花 3 分钟**凭记忆复述**要点（检索练习），比反复重读有效
- 卡住时优先读报错、查官方文档（链接都在课文里），再求助于人

## 免责与致谢

- 课程知识引用自高可信官方文档：[MDN Web 开发入门](https://developer.mozilla.org/zh-CN/docs/Learn_web_development)、[Vue 中文官方文档](https://cn.vuejs.org/)、[Pixso 开发者文档](https://pre.pixso.cn/developer/zh/d2c/quick-start.html)
- 仓库内的学习记录 / 个性化教学档案为私有内容，不在本仓库公开
- 欢迎提 Issue / PR 勘误、补充练习或新课程

## 许可证

本课程内容以 **CC BY 4.0（知识共享 · 署名 4.0 国际）** 开源：可自由共享与演绎，使用时署名即可。
见 [LICENSE](./LICENSE)。
