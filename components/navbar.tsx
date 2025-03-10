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
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://raw.githubusercontent.com/mafevm/images/refs/heads/main/banner-logo.svg"
            alt="SwapStamp - Programa de fidelización digital"
            width={120}
            height={24}
            className="h-6 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <nav
            className={`fixed top-16 left-0 w-full bg-background p-4 transition-all duration-300 ease-in-out md:static md:w-auto md:bg-transparent md:p-0 ${
              isMenuOpen ? "block" : "hidden md:block"
            }`}
          >
            <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-swapstamp-gray-dark transition-colors hover:text-swapstamp-fuchsia"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZzgwJuc03whTeegAvEDh_4k-enI_u57DOt0oGBOo4q6vPFA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-swapstamp-fuchsia via-purple-600 to-swapstamp-fuchsia hover:bg-gradient-to-l text-white px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 transition-all duration-500 bg-[length:200%_100%] bg-right hover:bg-left whitespace-nowrap"
              >
                Empieza Gratis
              </Button>
            </Link>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menú">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

