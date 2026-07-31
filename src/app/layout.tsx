import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Patrick_Hand, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

import Header from "./components/Header";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const siteUrl = "https://slamoutloud.org";
const siteName = "Slam Out Loud";
const defaultTitle = "Slam Out Loud | Reimagining Education Through the Arts";
const defaultDescription =
  "Slam Out Loud reimagines learning through the arts, so children in government schools across India can flourish today and be ready for tomorrow. Explore our programmes, impact, and how to get involved.";
const defaultOgImage = {
  url: "/weare_sol.png",
  width: 1200,
  height: 630,
  alt: "Slam Out Loud - reimagining learning through the arts",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Slam Out Loud",
    "arts education India",
    "social-emotional learning",
    "government schools India",
    "arts for all",
    "Jijivisha Fellowship",
    "NGO India",
    "child development India",
    "arts-based learning",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage.url],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/sol_logo.png`,
  description: defaultDescription,
  sameAs: [
    "https://www.instagram.com/slamoutloud/",
    "https://www.linkedin.com/company/slam-out-loud/",
    "https://www.youtube.com/c/SlamOutLoud",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${patrickHand.variable} ${caveat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
