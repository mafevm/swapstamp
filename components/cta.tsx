import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-pink-200 text-gray-800">
      <div className="container flex flex-col items-center gap-6 py-16 px-4 md:py-24 text-center">
        <h2 className="font-bold text-2xl leading-[1.2] sm:text-3xl md:text-4xl lg:text-5xl">
          ¿Listo para modernizar tu programa de fidelización?
        </h2>
        <p className="max-w-[42rem] text-base leading-normal sm:text-lg md:text-xl text-gray-600">
          Únete a los negocios que ya están utilizando Swapstamp para fidelizar a sus clientes de manera fácil y
          efectiva.
        </p>
        <Button
          size="lg"
          className="mt-4 bg-primary text-white hover:bg-primary/90 text-base px-6 py-4 w-full sm:w-auto"
        >
          Comienza Gratis Ahora
        </Button>
      </div>
    </section>
  )
}

