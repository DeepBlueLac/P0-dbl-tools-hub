# DBL-TOOLS Google AdSense 接入清单

## 当前阶段

当前阶段为 `application-ready`。网站使用中国 AdSense 账号 `pub-7206621498529527` 的元标记验证；审核通过前不加载 Google 广告脚本。

## 环境变量

仅填写真实账号值，不要提交 `.env.local`：

```text
NEXT_PUBLIC_ADSENSE_STAGE=hypothesis
NEXT_PUBLIC_ADSENSE_CLIENT=
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=
NEXT_PUBLIC_ADSENSE_VERIFICATION=none
NEXT_PUBLIC_ADSENSE_RESULT_SLOT=
```

只有 AdSense 通过审核后，才把阶段改成 `approved` 或 `active`，并填入匹配的：

- `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX`
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-XXXXXXXXXXXXXXXX`

Vercel 等构建平台在修改 `NEXT_PUBLIC_*` 后需要重新部署；不要把真实值写进 Git 或 `ads.txt.example`。

如果 AdSense 后台要求先验证站点，可把阶段设为 `application-ready`，在 Next.js Metadata 中输出 `getAdSenseVerificationMeta()`。这只生成 `google-adsense-account` meta，不加载广告脚本；验证完成后仍需等待 AdSense 将站点标记为 `Ready` 才能投放广告。

```tsx
import { getAdSenseVerificationMeta } from "@/platform/adsense";

export const metadata = {
  other: getAdSenseVerificationMeta(),
};
```

## CMP 与调用

先在 AdSense Privacy & messaging 中配置 Google 认可的 CMP（面向 EEA、英国和瑞士流量时尤其必要），再把 CMP 回调映射成模块的 `AdConsentState`：`unknown`、`granted`、`non-personalized` 或 `denied`。

```tsx
import { AdSenseScript, AdSenseSlot } from "@/platform/adsense";

<AdSenseScript consent={consentState} />
<AdSenseSlot
  slot="1234567890"
  consent={consentState}
  status={resultState === "ready" ? "ready" : "empty"}
/>
```

示例中的 slot 只是格式示意，必须替换为 AdSense 后台创建的真实广告单元 ID。

## ads.txt

新中国账户已经在 AdSense 界面给出精确 Publisher ID，生产站使用：

```text
google.com, pub-7206621498529527, DIRECT, f08c47fec0942fa0
```

不要把 `ads.txt.example`、占位 ID 或旧日本账户 ID 发布到生产站。

## 位置门禁

- 结果或正文完成后再展示广告。
- 广告必须有清晰的 Advertisement 语义标识，并与搜索、下载、借阅、复制、导航操作分开。
- 加载中、空结果、错误结果和主操作区域不展示广告。
- 不使用“点击广告支持我们”等诱导语，不监听或模拟广告点击。
- 广告加载失败时核心功能仍可使用。

## 发布前证据

- AdSense Sites 审核状态和真实 Publisher ID。
- 隐私政策、Terms、联系入口和 CMP 配置记录。
- `https://<domain>/ads.txt` 返回真实记录。
- 桌面端和移动端广告加载失败降级、CLS、核心任务成功率验证。
