import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-xl flex-col items-center justify-center space-y-8 py-12 px-4 md:py-24 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Fideliza clientes con
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-500">
            sellos digitales
          </span>
        </h1>
        <p className="mx-auto max-w-[42rem] text-base leading-normal text-muted-foreground sm:text-lg md:text-xl">
          Swapstamp reemplaza las tarjetas de fidelización tradicionales con una solución digital fácil y rápida para
          pequeños negocios.
        </p>
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-center gap-4">
        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-base px-6 py-4 w-full sm:w-auto">
          Prueba Gratis
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="text-base px-6 py-4 w-full sm:w-auto">
          Ver Demo
        </Button>
      </div>
    </section>
  )
}

