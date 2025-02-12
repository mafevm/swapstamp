import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-xl flex-col items-center justify-center space-y-10 py-24 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Fideliza clientes con
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-500">
            sellos digitales
          </span>
        </h1>
        <p className="mx-auto max-w-[42rem] text-xl leading-normal text-muted-foreground sm:text-2xl sm:leading-8">
          Swapstamp reemplaza las tarjetas de fidelización tradicionales con una solución digital fácil y rápida para
          pequeños negocios.
        </p>
      </div>
      <div className="flex gap-6">
        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">
          Prueba Gratis
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6">
          Ver Demo
        </Button>
      </div>
    </section>
  )
}

