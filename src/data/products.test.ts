import { describe, expect, it } from "vitest";
import { products } from "./products";

describe("DBL-TOOLS product index", () => {
  it("keeps every product entry honest and actionable", () => {
    expect(products).toHaveLength(3);
    for (const product of products) {
      expect(product.name.length).toBeGreaterThan(2);
      expect(product.description.length).toBeGreaterThan(20);
      expect(["Live", "In the studio"]).toContain(product.status);
      if (product.status === "Live") {
        expect(product.detailHref).toBe(`/products/${product.slug}`);
        expect(product.liveUrl).toMatch(/^https:\/\//);
      }
      if (product.status === "In the studio") {
        expect(product.detailHref).toBeNull();
        expect(product.liveUrl).toBeNull();
      }
    }
  });
});
