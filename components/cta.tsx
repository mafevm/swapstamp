import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-primary text-white">
      <div className="container flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          ¿Listo para modernizar tu programa de fidelización?
        </h2>
        <p className="max-w-[42rem] text-xl leading-normal sm:text-2xl sm:leading-8 text-white/80">
          Únete a los negocios que ya están utilizando Swapstamp para fidelizar a sus clientes de manera fácil y
          efectiva.
        </p>
        <Button size="lg" variant="secondary" className="mt-4 text-primary hover:text-primary/90 text-lg px-8 py-6">
          Comienza Gratis Ahora
        </Button>
      </div>
    </section>
  )
}

