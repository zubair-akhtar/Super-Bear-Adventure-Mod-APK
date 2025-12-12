import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
  description:
    "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free",
  keywords: "Super Bear Adventure Mod APK",
  authors: [{ name: "Super Bear Adventure Team" }],
  creator: "SuperBear",
  publisher: "SuperBear",
  applicationName: "SuperBear",
  referrer: "origin-when-cross-origin",
  category: "streaming application",
  classification: "Mobile Application",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://superbearadv.com"),
  alternates: {
    canonical: "https://superbearadv.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superbearadv.com",
    siteName: "SuperBear",
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description:
      "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free",
    images: [
      {
        url: "https://superbearadv.com/images/featured.webp",
        width: 1200,
        height: 630,
        alt: "Super Bear Adventure Mod APK ",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SuperBear",
    creator: "@SuperBear",
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description:
      "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free",
    images: {
      url: "https://superbearadv.com/images/featured.webp",
      alt: "Super Bear Adventure Mod APK ",
      width: 1200,
      height: 630,
      type: "image/webp",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.webp", sizes: "16x16", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "96x96", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/images/favicon.webp",
    apple: [
      { url: "/images/favicon.webp", sizes: "180x180", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "theme-color": " #A66930",
    "msapplication-TileColor": " #A66930",
  },
  verification: {
    // google: "94XZLnpuEmL8LUEHfPSk9EQRCPxavxKkbkILuFGF6vk",
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="image" content="https://superbearadv.com/images/featured.webp" />
        <meta property="og:image" content="https://superbearadv.com/images/featured.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://superbearadv.com/images/featured.webp" />
        <meta name="twitter:site" content="@SuperBear " />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              url: "https://superbearadv.com/",
              logo: "https://superbearadv.com/images/featured.webp",
              name: "Super Bear",
              image: "https://superbearadv.com/images/featured.webp",
              brand: { "@type": "Organization" },
              legalName: "Super Bear",
            }),
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CV5P20DK7Y"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CV5P20DK7Y');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
          <nav className="sr-only" aria-label="Site Navigation for Search Engines">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/download">Download</a>
              </li>
              
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a href="/robots.txt">Robots</a>
              </li>
            </ul>
          </nav>
        </ThemeProvider>
      </body>
    </html>
  )
}