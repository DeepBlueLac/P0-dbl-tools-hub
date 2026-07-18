# DBL-TOOLS 总入口

这是 DBL-TOOLS 的品牌首页与产品索引。它负责承接根域名流量，不改动 Shelfmark 的 Vercel 项目。

## 地址

- 生产站点：[https://bulidoge.site](https://bulidoge.site)
- `www` 入口：[https://www.bulidoge.site](https://www.bulidoge.site)
- Shelfmark：[https://books.bulidoge.site](https://books.bulidoge.site)
- Cloudflare Worker：[dbl-tools-edge.bulidoge0422.workers.dev](https://dbl-tools-edge.bulidoge0422.workers.dev)

## 本地开发

```powershell
npm install
npm run dev
```

发布前检查：

```powershell
npm run check
npm test
npm run cf:build
npm run cf:deploy
```

## 架构边界

- 根域名和 `www` 使用 Cloudflare Zone Route：`bulidoge.site/*`、`www.bulidoge.site/*`。
- 当前 DNS 已有 Cloudflare 代理记录，因此没有让 Wrangler 自动创建 Custom Domain 记录；这样不会覆盖原有 DNS，也避免 409 冲突。
- `books.bulidoge.site` 继续由原 Shelfmark Worker/Vercel 链路提供，禁止在这个项目里改写或删除它。
- OpenNext 的 Cloudflare 构建使用 Webpack，默认 `npm run build` 仍保持普通 Next.js/Vercel 兼容。

## 设计资产

首屏视觉来自原创生图资产 `public/media/dbl-tools-hero.png`。完整设计决策、颜色 Token、字体、动效和反模板化规则见 [DESIGN.md](./DESIGN.md)。

产品列表必须保持“真实状态、真实链接”：未上线产品使用 `In the studio`，不展示虚假指标、客户或评价。

## 下一步运营

在申请广告审核前补齐独立联系邮箱、Terms、Cookie/Consent 说明、`ads.txt`、Search Console 与正式 OG 分享图；广告脚本应在获得审核批准后再加入。
