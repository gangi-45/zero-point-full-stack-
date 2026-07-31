import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { StickyCTA } from "@/components/sticky-cta/StickyCTA";
import { CONTACT, SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} — Buy Sell Exchange | Mymensingh`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Zero Point",
    "buy sell exchange",
    "Mymensingh",
    "ফোন বিক্রি",
    "ল্যাপটপ কেনাবেচা",
    "mobile exchange",
    "used phone Mymensingh",
    "iPhone Mymensingh",
  ],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: `https://${SITE.domain}`,
    siteName: SITE.brand,
    title: `${SITE.name} — Buy Sell Exchange | Mymensingh`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Buy Sell Exchange | Mymensingh`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.brand,
  image: `https://${SITE.domain}/logo.png`,
  url: `https://${SITE.domain}`,
  telephone: CONTACT.phone,
  priceRange: "৳৳",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chorpara Road",
    addressLocality: "Mymensingh Sadar",
    addressRegion: "Mymensingh",
    postalCode: "2200",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7506,
    longitude: 90.4064,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "21:00",
  },
  sameAs: [
    "https://www.facebook.com/zeropointbyx",
    "https://www.instagram.com/zeropointbyx",
    "https://www.tiktok.com/@zeropointbyx",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
