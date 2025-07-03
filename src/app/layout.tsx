import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: {
    default: "Phong Thanh Lu",
    template: "%s | Phong Thanh Lu",
  },
  description:
    "Portfolio of Phong Thanh Lu - Computer Science student, AI/ML enthusiast, and aspiring software engineer.",
  keywords: [
    "Phong Thanh Lu",
    "Computer Science",
    "AI",
    "Machine Learning",
    "Software Engineer",
    "Portfolio",
    "University of South Florida",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [
    {
      name: "Phong Thanh Lu",
      url: "https://www.linkedin.com/in/phongthanhlu/",
    },
  ],
  creator: "Phong Thanh Lu",
  metadataBase: new URL("https://phongthanhlu.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phongthanhlu.github.io",
    title: "Phong Thanh Lu",
    description:
      "Portfolio of Phong Thanh Lu - Computer Science student, AI/ML enthusiast, and aspiring software engineer.",
    siteName: "Phong Thanh Lu",
    images: [
      {
        url: "/avatar/3.jpg",
        width: 1200,
        height: 630,
        alt: "Phong Thanh Lu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phong Thanh Lu",
    description:
      "Portfolio of Phong Thanh Lu - Computer Science student, AI/ML enthusiast, and aspiring software engineer.",
    images: ["/avatar/3.jpg"],
    creator: "@PhongThanhLu",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
