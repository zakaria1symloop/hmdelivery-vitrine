import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "HM Pro Delivery — Service de Livraison Professionnel en Algérie",
  description:
    "HM Pro Delivery est votre partenaire de livraison de confiance en Algérie. Livraison rapide, suivi en temps réel, couverture nationale des 58 wilayas.",
  keywords: [
    "livraison",
    "algérie",
    "HM Pro Delivery",
    "livraison rapide",
    "suivi colis",
    "58 wilayas",
    "e-commerce livraison",
  ],
  openGraph: {
    title: "HM Pro Delivery — Service de Livraison Professionnel en Algérie",
    description:
      "Votre partenaire de livraison de confiance. Livraison rapide, suivi en temps réel, couverture des 58 wilayas.",
    type: "website",
    locale: "fr_DZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr" className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
