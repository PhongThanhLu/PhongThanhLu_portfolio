"use client"
import { useEffect, useState } from "react"
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { useRouter } from "next/navigation"
import { FullScreen } from "../full-screen"

export const ComingSoonPage = () => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <FullScreen className="flex-col">
      <Terminal>
        <TypingAnimation>&gt; initializing --about-me</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Found user: Phong Thanh Lu, CS junior @ USF.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Research assistant @ Robotics Perception &amp; Action Lab — optimizing ML models.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Summer @ FragsAI — AI-powered highlight detection from livestreams.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Scaled databases, improved models, cut storage use at FragsAI.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Passionate about robotics, AI, and building things that matter.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Outside of tech? Gym rat, LoL summoner, street photographer 📸</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-blue-500">
          <span>ℹ Personality:</span>
          <span className="pl-2">Curious, energetic, creative — always down to chat ideas or life.</span>
        </AnimatedSpan>

        <TypingAnimation delay={5000} className="text-muted-foreground">
          Ready to build the future with AI and innovative software solutions.
        </TypingAnimation>

        <AnimatedSpan delay={5500} className="text-muted-foreground">
          <span>Let&apos;s connect at <a href="https://www.linkedin.com/in/phongthanhlu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">LinkedIn</a> 🚀</span>
        </AnimatedSpan>
      </Terminal>

      <div className="flex mt-10 justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span>Back to home</span>
        </HoverBorderGradient>
      </div>
    </FullScreen>
  )
}
