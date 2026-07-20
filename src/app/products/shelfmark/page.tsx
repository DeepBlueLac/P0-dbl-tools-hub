import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shelfmark book lookup",
  description: "Search by title, author, or ISBN and choose a legitimate route to download, borrow, preview, or buy a book.",
  alternates: { canonical: "/products/shelfmark" },
  openGraph: {
    title: "Shelfmark book lookup | DBL-TOOLS",
    description: "Find a book, understand its access options, and keep a private device-only shelf.",
    url: "/products/shelfmark",
  },
};

export default function ShelfmarkProductPage() {
  return (
    <main className="product-detail-page">
      <nav className="product-detail-nav" aria-label="Breadcrumb">
        <Link href="/">DBL-TOOLS</Link><span>/</span><span>Shelfmark</span>
      </nav>
      <article className="product-detail">
        <p className="eyebrow">LIVE PRODUCT / BOOK ACCESS</p>
        <h1>Find the book. Choose how to read it.</h1>
        <p className="product-detail-lede">Shelfmark searches public catalogs, separates real access options, and never labels a restricted preview as a free ebook.</p>

        <section>
          <h2>Use Shelfmark when you need to</h2>
          <ul>
            <li>look up an exact edition by ISBN-10 or ISBN-13;</li>
            <li>search by title or author across multiple book sources;</li>
            <li>find a legitimate public-domain download, library borrow, preview, or purchase route.</li>
          </ul>
        </section>

        <section>
          <h2>What stays private</h2>
          <p>No account is required. Saved records, imported EPUB files, and PDFs stay in your browser and are not uploaded to Shelfmark.</p>
        </section>

        <div className="product-detail-actions">
          <a className="button-primary" href="https://books.bulidoge.site">Open Shelfmark <span aria-hidden="true">↗</span></a>
          <Link className="text-link" href="/products/the-sky-then">Explore The Sky Then <span aria-hidden="true">→</span></Link>
        </div>
      </article>
    </main>
  );
}
