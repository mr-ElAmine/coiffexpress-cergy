import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coiffexpress-cergy.fr"),
  title: "Coiff'express Cergy — Coiffeur & Barbier à Cergy-Saint-Christophe",
  description:
    "Salon de coiffure et barbier à Cergy-Saint-Christophe. 24 ans d'expérience. Coupe homme, barbe, rasage. Shampoing + coupe dès 12€. 35 rue du Chemin de Fer, 95800 Cergy.",
  keywords: [
    "coiffeur cergy",
    "barbier cergy",
    "salon coiffure cergy",
    "coiffure express cergy",
    "coiffeur cergy saint-christophe",
    "coupe homme cergy",
    "barbe cergy",
    "rasage cergy",
    "coiffure pas cher cergy",
    "barbier cergy pontoise",
    "coiffeur 95800",
  ],
  alternates: {
    canonical: "https://coiffexpress-cergy.fr",
  },
  openGraph: {
    title: "Coiff'express Cergy — Coiffeur & Barbier",
    description:
      "Express coiffure — 24 ans d'expérience. Coupe homme, barbe, rasage. Qualité et hygiène garanties.",
    url: "https://coiffexpress-cergy.fr",
    locale: "fr_FR",
    type: "website",
    siteName: "Coiff'express Cergy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content antialiased">
        {children}
      </body>
    </html>
  );
}
