"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">Adlane Soltani</h1>
              <p className="text-xl md:text-2xl text-primary font-medium">Frontend Developer</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build accessible, pixel-perfect digital experiences for the web, specializing in React.js, Next.js, and
              TypeScript.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/SOLTANI.ADLANE_resume.pdf" download="SOLTANI_ADLANE_Resume.pdf">
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/adlene1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/adlane-soltani-0245a9283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adlanesoltani@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div
            className={`flex justify-center ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/adlane-photo.jpg" alt="Adlane Soltani" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
