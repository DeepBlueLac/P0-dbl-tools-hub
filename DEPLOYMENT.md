# 部署记录

## 2026-07-19

- Worker：`dbl-tools-edge`
- 版本：`578abdd9-f156-4706-a8c5-b4257413000f`
- Cloudflare 账户：已登录的 `Bulidoge0422@gmail.com's Account`
- 入口路由：
  - `bulidoge.site/*`
  - `www.bulidoge.site/*`
- 线上验证：根首页、`www` 首页、`/privacy`、`/robots.txt`、`/sitemap.xml` 均返回 HTTP 200。
- Shelfmark 回归验证：`https://books.bulidoge.site/` 返回 HTTP 200。
- Vercel 回归验证：`https://isbn-book-lookup-seven.vercel.app/` 返回 HTTP 200。
- SEO 复核：根域名 canonical 已输出为 `https://bulidoge.site`，`www` 作为可访问别名保留。

## 为什么使用 Route 而不是 Custom Domain

根域名和 `www` 原本已经存在 Cloudflare 代理 DNS 记录。直接声明 Custom Domain 时，Cloudflare API 对记录变更返回 409。当前配置复用这些已代理记录，仅把请求路由到 Worker，因此不需要删除或替换 DNS，也不影响 `books` 子域名。

如果未来要改成 Custom Domain，必须先在 Cloudflare DNS 中确认并处理根域名和 `www` 的冲突记录，再修改 `wrangler.jsonc`；没有明确需要时保持现状。

## 复核命令

```powershell
curl.exe -I https://bulidoge.site/
curl.exe -I https://www.bulidoge.site/
curl.exe -I https://bulidoge.site/privacy
curl.exe -I https://bulidoge.site/robots.txt
curl.exe -I https://bulidoge.site/sitemap.xml
curl.exe -I https://books.bulidoge.site/
```
