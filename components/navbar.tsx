import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
            Swapstamp
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#caracteristicas" className="transition-colors hover:text-primary">
            Características
          </Link>
          <Link href="#como-funciona" className="transition-colors hover:text-primary">
            Cómo Funciona
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
            Empezar Gratis
          </Button>
        </div>
      </div>
    </header>
  )
}

