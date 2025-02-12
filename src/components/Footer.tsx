"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">SwapStamp</h3>
          <p className="text-sm text-gray-400">© 2023 SwapStamp. Todos los derechos reservados.</p>
        </div>
        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link href="/privacidad" className="text-sm hover:text-primary-light">
            Política de Privacidad
          </Link>
          <Link href="/terminos" className="text-sm hover:text-primary-light">
            Términos de Servicio
          </Link>
          <Link href="/contacto" className="text-sm hover:text-primary-light">
            Contáctanos
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

