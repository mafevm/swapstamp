"use client"

import Link from "next/link"
import { Button } from "../components/ui/button"
import Logo from "./Logo"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
      <Link href="/" aria-label="SwapStamp Home">
        <Logo className="w-32 h-8" />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="#how-it-works" className="text-gray-600 hover:text-primary">
          {t.nav.howItWorks}
        </Link>
        <Link href="#benefits" className="text-gray-600 hover:text-primary">
          {t.nav.benefits}
        </Link>
        <Link href="#testimonials" className="text-gray-600 hover:text-primary">
          {t.nav.testimonials}
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Sign Up
        </Button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "es")}
          className="bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  )
}

