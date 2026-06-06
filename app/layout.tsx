import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.heaparties-ne.co.uk/#business",
  name: "Happily Ever After-Parties NE LTD",
  legalName: "Happily Ever After-Parties NE LTD",
  url: "https://www.heaparties-ne.co.uk",
  logo: "https://www.heaparties-ne.co.uk/logo.png",
  image: "https://www.heaparties-ne.co.uk/images/images/north-east-wedding-dj-hero.jpeg",
  telephone: "+447356211274",
  email: "enquiries@heaparties-ne.co.uk",
  description:
    "Owner-led wedding and event DJ services across North East England, with professional sound, lighting and music tailored to each celebration.",
  priceRange: "££",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding and event DJ services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding DJ service",
          areaServed: "North East England",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event DJ service",
          areaServed: "North East England",
        },
      },
    ],
  },
  areaServed: [
    "Teesside",
    "County Durham",
    "Tyne and Wear",
    "Northumberland",
    "North Yorkshire",
    "North East England",
  ],
  sameAs: ["https://www.mixcloud.com/HappilyEverAfter-Parties/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447356211274",
    email: "enquiries@heaparties-ne.co.uk",
    contactType: "customer enquiries",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heaparties-ne.co.uk"),
  title: {
    default: "North East England Weddings & Events, Expertly Soundtracked",
    template: "%s | Happily Ever After-Parties NE",
  },
  description: "Owner-led wedding and event DJ services across North East England, crafted around your crowd, your venue and your big moments.",
  openGraph: {
    title: "North East England Weddings & Events, Expertly Soundtracked",
    description: "Owner-led wedding and event DJ services across North East England, crafted around your crowd, your venue and your big moments.",
    url: "https://www.heaparties-ne.co.uk",
    siteName: "Happily Ever After-Parties NE",
    images: ["/images/images/north-east-wedding-dj-hero.jpeg"],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
