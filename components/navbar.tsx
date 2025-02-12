"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://raw.githubusercontent.com/mafevm/images/refs/heads/main/banner-logo.svg"
            alt="Swapstamp Logo"
            width={150}
            height={30}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center">
          <nav
            className={`fixed top-16 left-0 w-full bg-background p-4 transition-all duration-300 ease-in-out md:static md:w-auto md:bg-transparent md:p-0 ${isMenuOpen ? "block" : "hidden md:block"}`}
          >
            <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <li>
                <Link
                  href="#caracteristicas"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href="#como-funciona"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cómo Funciona
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
              Empezar Gratis
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

