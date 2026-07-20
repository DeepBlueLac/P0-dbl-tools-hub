<!-- BEGIN:nextjs-agent-rules -->
# Next.js project rules

Read the relevant Next.js guide in `node_modules/next/dist/docs/` before changing framework behavior. Keep Cloudflare-specific builds isolated from the default Vercel-compatible `npm run build` script.
<!-- END:nextjs-agent-rules -->

## P0 产品上线完成定义

P0 是所有 DBL 产品的可信入口。新增产品只有同时满足以下条件，才可以在 `src/data/products.ts` 标记为 `Live`：

1. 产品生产 URL 可访问，核心任务由陌生用户从首页进入后可以独立完成。
2. P0 已有独立产品详情页；详情页说明具体任务、数据边界并链接到产品。
3. 产品所有真实公开页面都有自引用 canonical，并全部出现在 sitemap；robots.txt 指向该 sitemap。
4. 产品页面链接回对应的 P0 详情页，形成双向链接。
5. 已启用一种简单访问统计，并能区分至少一次产品入口访问和一次核心任务请求。
6. 已验证桌面与移动端的核心路径，且构建、类型检查和现有测试通过。
7. 广告保持关闭，直到出现真实搜索展示、点击、完成任务和回访数据，并取得广告平台批准。

不要为了满足这些规则建设新的 SEO 平台、报表系统或 Factory 自动化；优先把真实页面上线并收集数据。
