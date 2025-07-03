import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | Phong Thanh Lu",
  description:
    "Explore the professional journey of Phong Thanh Lu - Computer Science student with experience in AI/ML research and software development.",
  openGraph: {
    title: "Experience | Phong Thanh Lu",
    description:
      "Professional experience and achievements of Phong Thanh Lu in AI/ML and software development.",
    url: "https://phongthanhlu.github.io/experience",
    siteName: "Phong Thanh Lu",
    images: [
      {
        url: "/avatar/3.jpg",
        width: 1200,
        height: 630,
        alt: "Phong Thanh Lu Experience Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Phong Thanh Lu",
    description:
      "Check out Phong Thanh Lu's professional experience in AI/ML research and software development.",
    images: ["/avatar/3.jpg"],
  },
  alternates: {
    canonical: "https://phongthanhlu.github.io/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
