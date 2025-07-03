import { Metadata } from "next"
// import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Phong Thanh Lu",
  description:
    "Learn more about Phong Thanh Lu - Computer Science student, AI/ML enthusiast, and tech explorer.",
  keywords: [
    "Phong Thanh Lu",
    "About Phong Thanh Lu",
    "Computer Science",
    "AI/ML",
    "University of South Florida",
    "Python",
    "Next.js",
  ],
  openGraph: {
    title: "About | Phong Thanh Lu",
    description:
      "Discover the story and journey of Phong Thanh Lu in computer science and AI/ML development.",
    url: "https://phongthanhlu.github.io/about",
    siteName: "Phong Thanh Lu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/avatar/3.jpg",
        width: 1200,
        height: 630,
        alt: "Phong Thanh Lu About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Phong Thanh Lu",
    description:
      "Learn more about Phong Thanh Lu - Computer Science student and AI/ML enthusiast.",
    images: ["/avatar/3.jpg"],
  },
  alternates: {
    canonical: "https://phongthanhlu.github.io/about",
  },
}

// export default function Page() {
//   return <ComingSoonPage pageName="About" />
// }
