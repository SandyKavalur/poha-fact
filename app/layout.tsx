import './globals.css';
import Navbar from './components/Navbar/index';
// import Footer from './components/Footer/index';

import { Manrope } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gavi Shri Poha Industries | Premium Poha Manufacturer in Karnataka",
  description:
    "Gavi Shri Poha Industries is a premium poha manufacturer in Karnataka producing thick poha, thin poha, and nutritious red poha with hygienic and sustainable processing.",
  
  keywords: [
    "Gavi Shri Poha",
    "Gavi Shri Poha Industries",
    "Poha manufacturer Karnataka",
    "premium poha India",
    "thick poha supplier",
    "thin poha manufacturer",
    "red poha supplier"
  ],

  authors: [{ name: "Gavi Shri Poha Industries" }],
  
  openGraph: {
    title: "Gavi Shri Poha Industries",
    description:
      "Premium quality poha manufacturer delivering hygienic and sustainable poha products.",
    url: "https://gavishripoha.com",
    siteName: "Gavi Shri Poha",
    images: [
      {
        url: "https://gavishripoha.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodManufacturer",
              name: "Gavi Shri Poha Industries",
              image: "https://gavishripoha.com/logo.png",
              url: "https://gavishripoha.com",
              telephone: "+919876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "315/2, NH 63, Bypass, road, behind Fire Station",
                addressLocality: "Koppal",
                addressRegion: "Karnataka",
                postalCode: "583231",
                addressCountry: "IN",
              },
            }),
          }}
        />

        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
