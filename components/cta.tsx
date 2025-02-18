import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="bg-swapstamp-black">
      <div className="container flex flex-col items-center gap-8 py-20 px-4 md:py-28 text-center">
        <h2 className="font-bold text-3xl leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl text-white">
          ¿Listo para dar el salto digital?
        </h2>
        <p className="max-w-[42rem] text-xl leading-normal sm:text-2xl md:text-3xl text-swapstamp-gray">
          Con SwapStamp, tu negocio pasa de analógico a digital en un abrir y cerrar de ojos.
        </p>
        <Button
          size="lg"
          className="mt-4 bg-gradient-to-r from-swapstamp-fuchsia via-purple-600 to-swapstamp-fuchsia hover:bg-gradient-to-l text-white text-xl px-8 py-6 transition-all duration-500 bg-[length:200%_100%] bg-right hover:bg-left"
        >
          Empieza gratis ahora
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}

