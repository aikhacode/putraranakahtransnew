import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteData } from "@/lib/siteData";
import SuspendedPage from "@/components/SuspendedPage";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://putraranakahtrans.com"),
  title: {
    default: "Rental Mobil & Sewa Hiace Madiun – CV Putra Ranakah Trans",
    template: "%s | CV Putra Ranakah Trans",
  },
  description: siteData.description,
  keywords: siteData.keywords,
  authors: [{ name: "CV. Putra Ranakah Adhikari" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://putraranakahtrans.com",
    siteName: siteData.name,
    title: "Rental Mobil & Sewa Hiace Madiun – CV Putra Ranakah Trans",
    description: siteData.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteData.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil & Sewa Hiace Madiun – CV Putra Ranakah Trans",
    description: siteData.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "DmmlIlwJG9GhrKFrWUiFiri-GC1S9EhK6RA5Emq5NTU",
  },
};



const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://putraranakahtrans.com",
  name: siteData.name,
  image: "https://putraranakahtrans.com/images/ranakah-logo.png",
  description: siteData.description,
  url: "https://putraranakahtrans.com",
  telephone: siteData.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pucang Sari No.15",
    addressLocality: "Manisrejo, Kec. Taman",
    addressRegion: "Madiun, Jawa Timur",
    postalCode: "63138",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.6298,
    longitude: 111.5231,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    siteData.socials.instagram,
    siteData.socials.facebook,
    siteData.socials.tiktok,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Armada Rental",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa Toyota Innova Reborn Madiun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa Toyota Avanza Madiun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa Hiace Premio Madiun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa Toyota Hiace Premio Luxury Madiun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa Bus Pariwisata Madiun" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
    // <SuspendedPage />
  );
}
