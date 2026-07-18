export type HubProduct = {
  number: string;
  name: string;
  description: string;
  status: "Live" | "In the studio";
  href: string | null;
};

export const products: HubProduct[] = [
  {
    number: "01",
    name: "The Sky Then",
    description: "A personal sky map for one meaningful moment.",
    status: "Live",
    href: "https://the-sky-then-live.vercel.app",
  },
  {
    number: "02",
    name: "Shelfmark",
    description: "Find a book and choose a legitimate way to read it.",
    status: "Live",
    href: "https://books.bulidoge.site",
  },
  {
    number: "03",
    name: "Atelier Zero",
    description: "A poster tool for public collections and quiet walls.",
    status: "In the studio",
    href: null,
  },
];
