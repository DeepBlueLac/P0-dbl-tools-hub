import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "The DBL-TOOLS privacy policy, written plainly.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">DBL-TOOLS</Link>
      <article>
        <p className="eyebrow">DBL-TOOLS / PRIVACY</p>
        <h1>Privacy, written plainly.</h1>
        <p className="legal-lede">The hub does not ask you to create an account, submit payment details, or upload personal files.</p>
        <section><h2>What the hub receives</h2><p>When you visit this site, your browser sends ordinary request information needed to serve a web page. The hub does not sell personal information.</p></section>
        <section><h2>Access analytics</h2><p>DBL-TOOLS uses Cloudflare Web Analytics to count page visits and measure page performance. It does not use cookies or collect personal information.</p></section>
        <section><h2>Advertising</h2><p>DBL-TOOLS is prepared for Google AdSense verification but does not currently load advertisements. Ads remain off until a product has real search impressions, clicks, completed tasks, and return visits, and the site has been approved. If advertising is enabled later, Google and its advertising partners may use cookies or similar technologies as described in <a href="https://policies.google.com/technologies/ads">Google&apos;s advertising privacy documentation</a>.</p></section>
        <section><h2>Your choices</h2><p>Where required, an approved consent message is shown before personalized advertising is used. You can accept, reject, or manage available choices and revisit them through the privacy controls shown on the site.</p></section>
        <section><h2>Product-specific policies</h2><p>Each product can have its own data path. Shelfmark links to public catalog and reading sources and keeps saved books on your device. Review the policy shown on a product before using it.</p></section>
        <section><h2>Questions</h2><p>For a privacy question, use the contact route listed on the product you are asking about. A dedicated studio contact will be published before personalized advertising is enabled.</p></section>
      </article>
    </main>
  );
}
