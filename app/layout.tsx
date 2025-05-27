import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Art Vandeth - Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with cutting-edge technologies.",
  openGraph: {
    title: "Art Vandeth - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, and Node.js.",
    url: "https://artvandeth.dev",
    siteName: "Art Vandeth Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Vandeth - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, and Node.js.",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
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
        </ThemeProvider>
      </body>
    </html>
  )
}
