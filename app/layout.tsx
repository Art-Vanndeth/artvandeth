import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  title: "Art Vandeth | Java Developer",
  description:
    "Experienced Java Developer specializing in Spring Boot, microservices, and enterprise applications. Building scalable backend solutions with modern Java technologies.",
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Enterprise Applications",
    "Backend Development",
    "Software Engineer",
    "Java Specialist",
    "API Development",
    "Agile Development",
  ],
  authors: [
    {
      name: "Art Vandeth",
      url: "https://artvandeth.vercel.app",
    },
  ],
  creator: "Art Vandeth",
  applicationName: "Art Vandeth Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/logo.svg",
        type: "image/svg+xml",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
  metadataBase: new URL("https://artvandeth.vercel.app"),
  alternates: {
    canonical: "https://artvandeth.vercel.app",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
      "application/json": "/feed.json",
    },
  },
  category: "technology",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  publisher: "Art Vandeth",
  openGraph: {
    title: "Art Vandeth - Java Developer",
    description: "Experienced Java Developer specializing in Spring Boot, microservices, and enterprise applications.",
    url: "https://artvandeth.vercel.app",
    siteName: "Art Vandeth Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Art Vandeth Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    site: "@artvandeth",
    card: "summary_large_image",
    title: "Art Vandeth - Java Developer",
    description: "Experienced Java Developer specializing in Spring Boot, microservices, and enterprise applications.",
    images: {
      url: "/logo.png",
      alt: "Art Vandeth Logo",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
