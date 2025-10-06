import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Adlane Soltani - Frontend Developer",
  description:
    "Frontend Developer with experience in building responsive and user-friendly web applications. Skilled in React.js, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Adlane Soltani"],
  authors: [{ name: "Adlane Soltani" }],
  openGraph: {
    title: "Adlane Soltani - Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js, and TypeScript",
    url: "https://adlanesoltani.com",
    siteName: "Adlane Soltani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adlane Soltani - Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js, and TypeScript",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
