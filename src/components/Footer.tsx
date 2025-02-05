"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="w-full py-8 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">SwapStamp</h3>
          <p className="text-sm text-gray-400">{t.footer.rights}</p>
        </div>
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link href="/privacy" className="text-sm hover:text-primary-light">
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className="text-sm hover:text-primary-light">
            {t.footer.terms}
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary-light">
            {t.footer.contact}
          </Link>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

