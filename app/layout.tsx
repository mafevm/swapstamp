import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "SwapStamp - Digitaliza tu negocio fácil y rápido",
  description: "SwapStamp te ofrece herramientas digitales simples y efectivas para hacer crecer tu negocio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'