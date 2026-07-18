import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "The DBL-TOOLS privacy policy, written plainly.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">DBL-TOOLS</Link>
      <article>
        <p className="eyebrow">DBL-TOOLS / PRIVACY</p>
        <h1>Privacy, written plainly.</h1>
        <p className="legal-lede">The hub does not ask you to create an account, submit payment details, or upload personal files.</p>
        <section><h2>What the hub receives</h2><p>When you visit this site, your browser sends ordinary request information needed to serve a web page. The hub does not sell personal information or build advertising profiles from it.</p></section>
        <section><h2>Product-specific policies</h2><p>Each product can have its own data path. Shelfmark links to public catalog and reading sources and keeps saved books on your device. Review the policy shown on a product before using it.</p></section>
        <section><h2>Questions</h2><p>For a privacy question, use the contact route listed on the product you are asking about. This page will be expanded with a dedicated studio contact before advertising is enabled.</p></section>
      </article>
    </main>
  );
}
