import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Sky Then star map",
  description: "Reconstruct the visible night sky for a meaningful date, local time, and place, then download a private keepsake.",
  alternates: { canonical: "/products/the-sky-then" },
  openGraph: {
    title: "The Sky Then star map | DBL-TOOLS",
    description: "Reconstruct a real night sky and turn one meaningful moment into a downloadable keepsake.",
    url: "/products/the-sky-then",
  },
};

export default function TheSkyThenProductPage() {
  return (
    <main className="product-detail-page">
      <nav className="product-detail-nav" aria-label="Breadcrumb">
        <Link href="/">DBL-TOOLS</Link><span>/</span><span>The Sky Then</span>
      </nav>
      <article className="product-detail">
        <p className="eyebrow">LIVE PRODUCT / CELESTIAL MEMORY</p>
        <h1>Return to one moment under the same sky.</h1>
        <p className="product-detail-lede">The Sky Then calculates the stars visible from a chosen place, date, and local time, then lets you explore or download that moment as a keepsake.</p>

        <section>
          <h2>Use The Sky Then when you want to</h2>
          <ul>
            <li>reconstruct the sky from a birthday, anniversary, wedding, or first meeting;</li>
            <li>explore visible stars and constellation lines for that exact moment;</li>
            <li>edit a title and download a private PNG artwork.</li>
          </ul>
        </section>

        <section>
          <h2>How the calculation works</h2>
          <p>The location service returns coordinates and a time zone. The sky calculation and artwork rendering happen in your browser; dates, titles, and the generated sky are not uploaded.</p>
        </section>

        <div className="product-detail-actions">
          <a className="button-primary" href="https://the-sky-then-live.vercel.app">Create a star map <span aria-hidden="true">↗</span></a>
          <Link className="text-link" href="/products/shelfmark">Explore Shelfmark <span aria-hidden="true">→</span></Link>
        </div>
      </article>
    </main>
  );
}
