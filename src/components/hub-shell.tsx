"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Compass,
  Cube,
} from "@phosphor-icons/react";
import { products } from "@/data/products";

const reveal = (reduce: boolean, delay = 0) => ({
  initial: reduce ? false : { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function HubShell() {
  const reduce = useReducedMotion();

  return (
    <main className="hub-page">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="DBL-TOOLS home">
          <span className="wordmark-mark">DBL</span>
          <span>
            <strong>DBL-TOOLS</strong>
            <small>Small software studio</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#principles">Why</a>
          <a className="nav-product-link" href="https://books.bulidoge.site">Open Shelfmark</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <motion.div className="hero-copy" {...reveal(Boolean(reduce), 0)}>
          <p className="eyebrow">DBL-TOOLS / PRODUCT STUDIO</p>
          <h1 id="hero-title">Tools for the work between <span>ideas.</span></h1>
          <p>Small, focused products for the moments where a good tool should disappear into the work.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#products">Explore products <ArrowDown size={16} weight="bold" /></a>
            <a className="text-link" href="https://books.bulidoge.site">Open Shelfmark <ArrowUpRight size={16} weight="bold" /></a>
          </div>
        </motion.div>

        <figure className="hero-visual">
          <Image
            className="hero-image"
            src="/media/dbl-tools-hero.png"
            alt="A circular brushed-metal portal with orbiting paper fragments."
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <figcaption className="hero-index">01 / A useful beginning</figcaption>
        </figure>
      </section>

      <section className="section" id="products" aria-labelledby="products-title">
        <motion.div className="section-heading" {...reveal(Boolean(reduce), 0)}>
          <h2 id="products-title">A small collection, built with care.</h2>
          <p>Each product has one job. The interface stays quiet so the result can be useful.</p>
        </motion.div>

        <motion.article className="featured-product" {...reveal(Boolean(reduce), 0.08)}>
          <a className="featured-media" href="https://books.bulidoge.site" aria-label="Open Shelfmark">
            <Image
              src="/media/shelfmark-preview.webp"
              alt="A book opening into a warm illuminated reading portal."
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </a>
          <div className="featured-copy">
            <span className="product-label">Live product</span>
            <h3>Shelfmark</h3>
            <p>Search a title, author, or ISBN, then follow an official route to download, borrow, preview, or purchase.</p>
            <div className="product-meta"><span>Open Library</span><span>Archive.org</span><span>Private shelf</span></div>
            <a className="text-link" href="https://books.bulidoge.site">Visit Shelfmark <ArrowUpRight size={16} weight="bold" /></a>
          </div>
        </motion.article>
      </section>

      <section className="section index-section" aria-labelledby="index-title">
        <motion.div className="section-heading" {...reveal(Boolean(reduce), 0)}>
          <h2 id="index-title">What is being made.</h2>
          <p>Live work stays available. Unfinished work stays honest.</p>
        </motion.div>
        <motion.ul className="product-index" {...reveal(Boolean(reduce), 0.08)}>
          {products.map((product) => (
            <li className="product-row" key={product.number}>
              <span className="product-number">{product.number}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.href ? (
                <a className="product-status product-status-link" href={product.href}>
                  {product.status} <ArrowUpRight size={15} weight="bold" />
                </a>
              ) : (
                <span className="product-status">{product.status}</span>
              )}
            </li>
          ))}
        </motion.ul>
      </section>

      <section className="section principles" id="principles" aria-labelledby="principles-title">
        <motion.h2 id="principles-title" {...reveal(Boolean(reduce), 0)}>The standard is simple.</motion.h2>
        <motion.ul className="principle-list" {...reveal(Boolean(reduce), 0.08)}>
          <li><span><Compass size={18} weight="light" /></span><div><strong>Clear before clever.</strong><p>The next action should be visible without a tour.</p></div></li>
          <li><span><ShieldIcon /></span><div><strong>Open where possible.</strong><p>Sources, limits, and access routes are named plainly.</p></div></li>
          <li><span><Cube size={18} weight="light" /></span><div><strong>Small enough to finish.</strong><p>One useful surface is better than a roadmap of empty promises.</p></div></li>
        </motion.ul>
      </section>

      <footer className="site-footer">
        <p><strong>DBL-TOOLS</strong><br />Tools for the work between ideas.</p>
        <div className="footer-links"><a href="#products">Products</a><a href="https://books.bulidoge.site">Shelfmark</a><a href="/privacy">Privacy</a></div>
      </footer>
    </main>
  );
}

function ShieldIcon() {
  return <Check size={18} weight="bold" aria-hidden="true" />;
}
