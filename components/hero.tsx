import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import ParticleBackground from "./particle-background"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-swapstamp-white">
      <ParticleBackground />
      <div className="container max-w-screen-xl px-4 py-12 md:py-24 relative z-10">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-swapstamp-black">
            Tu negocio, sin rollos, <br />
            <span className="animated-gradient">más smart.</span>
          </h1>
          <p className="mx-auto max-w-[42rem] text-xl leading-normal text-swapstamp-gray-dark sm:text-2xl">
            Haz que tus clientes vuelvan una y otra vez con recompensas digitales que funcionan de verdad.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="bg-swapstamp-fuchsia text-white hover:bg-swapstamp-black transition-all duration-300 text-xl px-8 py-6 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Empieza Gratis Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-swapstamp-fuchsia via-purple-600 to-swapstamp-fuchsia bg-[length:200%_100%] animate-shimmer" />
          </Button>
        </div>
      </div>
    </section>
  )
}

