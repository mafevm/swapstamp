import type { Metadata } from "next"
import { LanguageProvider } from "../contexts/LanguageContext"
import "./globals.css"
import type React from "react"

export const metadata: Metadata = {
  title: "SwapStamp - Tarjetas de Fidelización Digital para Pequeños Negocios",
  description:
    "Reemplaza las tarjetas de fidelización tradicionales con una solución digital sin complicaciones. Aumenta la retención de clientes y ahorra costos con SwapStamp.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

