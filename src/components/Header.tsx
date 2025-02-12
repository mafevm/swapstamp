"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
      <Link href="/" aria-label="SwapStamp Inicio">
        <Logo className="w-32 h-8" />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="#como-funciona" className="text-gray-600 hover:text-primary">
          Cómo Funciona
        </Link>
        <Link href="#beneficios" className="text-gray-600 hover:text-primary">
          Beneficios
        </Link>
        <Link href="#testimonios" className="text-gray-600 hover:text-primary">
          Testimonios
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Registrarse
        </Button>
      </div>
    </header>
  )
}

