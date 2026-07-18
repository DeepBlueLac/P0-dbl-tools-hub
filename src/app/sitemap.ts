import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bulidoge.site";
  return [{ url: base, lastModified: new Date("2026-07-19") }, { url: `${base}/privacy`, lastModified: new Date("2026-07-19") }];
}
