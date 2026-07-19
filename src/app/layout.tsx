import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const adsenseClient = "ca-pub-6262164590697267";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const uiFont = Manrope({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bulidoge.site"),
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": adsenseClient,
  },
  title: {
    default: "DBL-TOOLS | Small tools, carefully made.",
    template: "%s | DBL-TOOLS",
  },
  description:
    "A small studio for useful tools that respect your time, your data, and the details between ideas.",
  keywords: ["DBL-TOOLS", "useful web tools", "indie software", "Shelfmark", "The Sky Then"],
  openGraph: {
    title: "DBL-TOOLS | Small tools, carefully made.",
    description: "A small studio for useful tools that respect your time and your data.",
    type: "website",
    url: "https://bulidoge.site",
    images: [{ url: "/media/dbl-tools-hero.png", width: 1536, height: 1024, alt: "A circular metal portal surrounded by orbiting paper fragments." }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${uiFont.variable} ${displayFont.variable}`}>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
