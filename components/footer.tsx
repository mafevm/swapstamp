import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col gap-8 py-12 px-4 md:flex-row md:py-16">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
            Swapstamp
          </h2>
          <p className="text-sm text-muted-foreground">Fidelización digital simple para pequeños negocios.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#caracteristicas" className="text-muted-foreground transition-colors hover:text-primary">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-muted-foreground transition-colors hover:text-primary">
                  Cómo Funciona
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground transition-colors hover:text-primary">
                  Términos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Swapstamp. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

