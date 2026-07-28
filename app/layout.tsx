import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
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
    "Owner-led wedding and event DJ services across Yorkshire, Durham, Cumbria and Northumberland, with professional sound, lighting and music tailored to each celebration.",
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
          areaServed: "Yorkshire, Durham, Cumbria and Northumberland",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event DJ service",
          areaServed: "Yorkshire, Durham, Cumbria and Northumberland",
        },
      },
    ],
  },
  areaServed: [
    "Teesside",
    "Yorkshire",
    "County Durham",
    "Cumbria",
    "Northumberland",
  ],
  sameAs: ["https://open.spotify.com/user/31k747dtbsgpaszqbkkqvt47id6i"],
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
    default: "Yorkshire, Durham, Cumbria & Northumberland Weddings & Events",
    template: "%s | Happily Ever After-Parties NE",
  },
  description: "Owner-led wedding and event DJ services across Yorkshire, Durham, Cumbria and Northumberland, crafted around your crowd, your venue and your big moments.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yorkshire, Durham, Cumbria & Northumberland Weddings & Events",
    description: "Owner-led wedding and event DJ services across Yorkshire, Durham, Cumbria and Northumberland, crafted around your crowd, your venue and your big moments.",
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18328463194"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              var storedConsent = null;
              try {
                storedConsent = JSON.parse(localStorage.getItem('hea_cookie_consent'));
              } catch (error) {}

              gtag('consent', 'default', {
                'ad_storage': storedConsent && storedConsent.advertising ? 'granted' : 'denied',
                'analytics_storage': storedConsent && storedConsent.analytics ? 'granted' : 'denied',
                'ad_user_data': storedConsent && storedConsent.advertising ? 'granted' : 'denied',
                'ad_personalization': storedConsent && storedConsent.advertising ? 'granted' : 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'AW-18328463194');

              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18328463194/D1AlCI7GzdMcENrO2KNE',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
