import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/Ui";
import { isPreview, site } from "@/lib/site";
import { ghl } from "@/lib/img";
import { brand } from "@/data/media";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Property Management in East Central Minnesota | Property Management Professionals", template: "%s | Property Management Professionals" },
  description: "Rental homes, vacation stays and local property management in East Central Minnesota. Serving owners, renters and guests in North Branch, Cambridge, Pine City and nearby towns.",
  openGraph: { type: "website", siteName: site.name, locale: "en_US", images: [{ url: ghl("6b007be02c68ebcf46344450", 1200), width: 1200, height: 900 }] },
  robots: isPreview ? { index: false, follow: false, googleBot: { index: false, follow: false } } : { index: true, follow: true },
  icons: { icon: ghl(brand.logo, 64, 90) },
};

export const viewport: Viewport = { themeColor: "#191c20", width: "device-width", initialScale: 1 };

const business = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  url: site.url,
  telephone: "+1-612-210-8424",
  email: site.email,
  logo: ghl(brand.logo, 400, 90),
  image: ghl("6b007be02c68ebcf46344450", 1200),
  areaServed: site.serviceTowns.map((t) => ({ "@type": "City", name: `${t}, MN` })),
  address: { "@type": "PostalAddress", addressRegion: "MN", addressCountry: "US" },
  parentOrganization: { "@type": "Organization", name: "Property Investment Professionals LLC" },
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://images.leadconnectorhq.com" crossOrigin="" />
        <JsonLd data={business} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
