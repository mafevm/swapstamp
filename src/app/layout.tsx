import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import type React from "react"
import { LanguageProvider } from "../contexts/LanguageContext"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SwapStamp - Digital Loyalty Cards for Small Businesses",
  description:
    "Replace traditional loyalty cards with a digital, hassle-free solution. Increase customer retention and save costs with SwapStamp.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={manrope.className}>{children}</body>
      </LanguageProvider>
    </html>
  )
}

