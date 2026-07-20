<!-- BEGIN:nextjs-agent-rules -->
# Next.js project rules

Read the relevant Next.js guide in `node_modules/next/dist/docs/` before changing framework behavior. Keep Cloudflare-specific builds isolated from the default Vercel-compatible `npm run build` script.
<!-- END:nextjs-agent-rules -->

## DBL 产品获客上线规则（P0 基准）

P0 是所有 DBL 产品的可信入口，不是产品源码的单体仓库。每个产品必须拥有独立 GitHub 仓库、独立生产部署和独立回退能力；P0 只保存真实产品元数据、详情页和出站链接。

`Live` 只表示产品已公开可用，不等于获客闭环已经完成。一个产品只有同时满足以下条件，才可声明“获客上线完成”：

1. 生产 URL 可访问，陌生用户无需开发者解释即可完成一个定义明确的核心任务。
2. P0 有独立产品详情页，说明具体任务、数据边界并链接到产品；产品链接回对应的 P0 详情页。
3. 围绕真实且互不重复的搜索意图提供 1–3 个任务页；每页有独立内容、自引用 canonical、可直接开始任务，并与首页和 P0 互链。禁止只替换关键词的薄页面。
4. 所有真实公开页面均进入 sitemap；robots.txt 指向生产 sitemap；生产域名已在 Google Search Console 验证并提交 sitemap，首页和至少一个任务页经 URL 检查确认允许编入索引。
5. 一种简单统计工具已在生产后台收到真实数据，至少能判断来源/入口页、P0 到产品的访问，以及一次定义明确的核心任务成功证据。仅在前端派发但后台收不到的事件不算完成。
6. 若核心输入或结果可由 URL 安全表达，分享 URL 必须可复制、再次打开并恢复状态；不得把敏感输入放进 URL。
7. 桌面和移动端核心路径已验证，构建、类型检查和现有测试通过。
8. 人工选择 10 个真正相关且允许此类产品提交的目录、资源列表或社区，记录提交 URL、日期和状态；不伪造身份、不群发、不拉票。
9. 广告保持关闭，直到出现真实搜索展示、点击、完成任务和回访数据，并取得广告平台批准；开发者本人、自动化测试和内部访问不得充当里程碑证据。

完成 Search Console、生产统计和一次性分发后，在获得首批搜索数据前暂停视觉重做和新功能开发，只修复可访问性、索引和核心任务故障。

不要为满足这些规则建设 `.factory/seo.json`、SEO 流水线、自动报表平台或新的 Factory 自动化；先让真实页面被发现和使用。
