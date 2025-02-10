import Footer from "@/components/shared/Footer";
import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "TLC - Leading Edge Technology Solutions",
  description: "Discover TLC's expertise in Telecom and IT services, offering innovative solutions for a connected future.",
  keywords: "Telecom Solutions, ICT Services, Network Integration, FTTH, 5G CPE, Saudi Arabia Technology, TLC Services, Telecom Accessories",
  author: "Technical Lead Company (TLC)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satlc.com",
    siteName: "Technical Lead Company - TLC",
    title: "TLC - Leading Edge Technology Solutions",
    description: "Delivering innovative Telecom and IT services globally.",
    images: [
      {
        url: "favicon.ico",
        width: 1200,
        height: 630,
        alt: "TLC - Leading Edge Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TLC_Solutions",
    title: "TLC - Leading Edge Technology Solutions",
    description: "Comprehensive Telecom and IT solutions for businesses.",
    image: "favicon.ico",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound(); // Will show the 404 page if the locale is not valid
  }

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={`antialiased font-montserrat overflow-x-clip`}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative">
            <Navbar />
            <main>
              <div className="pt-[88px] bg-blueShades-200/[.32]" />
              {children}
            </main>
            <Footer lang={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}