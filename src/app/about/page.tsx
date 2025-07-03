import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Phong Thanh Lu",
  description:
    "Learn more about Phong Thanh Lu — software engineer, AI enthusiast, and robotics researcher based in Tampa, FL.",
  keywords: [
    "Phong Thanh Lu",
    "Software Engineer",
    "AI Developer",
    "Next.js Portfolio",
    "Robotics",
    "FragsAI",
    "USF",
    "Vietnamese Developer",
  ],
  openGraph: {
    title: "About | Phong Thanh Lu",
    description:
      "Explore the story of Phong Thanh Lu — AI researcher, full-stack developer, and robotics innovator.",
    url: "https://phonglu.dev/about",
    siteName: "Phong Lu Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      // Optional: add image here later
      // {
      //   url: "https://phonglu.dev/images/about-og.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "About Phong Lu",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Phong Thanh Lu",
    description:
      "Learn about Phong Thanh Lu, a software engineer with hands-on experience in AI, web development, and robotics.",
    // images: ["https://phonglu.dev/images/about-twitter.png"],
  },
  alternates: {
    canonical: "https://phonglu.dev/about",
  },
}

export default function Page() {
  return <ComingSoonPage />
}
