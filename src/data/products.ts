export type HubProduct = {
  slug: string;
  number: string;
  name: string;
  description: string;
  status: "Live" | "In the studio";
  detailHref: string | null;
  liveUrl: string | null;
};

export const products: HubProduct[] = [
  {
    slug: "the-sky-then",
    number: "01",
    name: "The Sky Then",
    description: "A personal sky map for one meaningful moment.",
    status: "Live",
    detailHref: "/products/the-sky-then",
    liveUrl: "https://the-sky-then-live.vercel.app",
  },
  {
    slug: "shelfmark",
    number: "02",
    name: "Shelfmark",
    description: "Find a book and choose a legitimate way to read it.",
    status: "Live",
    detailHref: "/products/shelfmark",
    liveUrl: "https://books.bulidoge.site",
  },
  {
    slug: "atelier-zero",
    number: "03",
    name: "Atelier Zero",
    description: "A poster tool for public collections and quiet walls.",
    status: "In the studio",
    detailHref: null,
    liveUrl: null,
  },
];
