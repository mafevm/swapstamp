import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ParticleBackground from "./particle-background"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-swapstamp-white">
      <ParticleBackground />
      <div className="container max-w-screen-xl px-4 py-12 md:py-24 relative z-10">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-swapstamp-black">
            Que cada compra sea una <br />
            <span className="animated-gradient">oportunidad de conectar.</span>
          </h1>
          <p className="mx-auto max-w-[42rem] text-lg leading-normal text-swapstamp-gray-dark sm:text-xl md:text-2xl">
            Haz que tus clientes vuelvan una y otra vez con recompensas digitales que funcionan de verdad.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZzgwJuc03whTeegAvEDh_4k-enI_u57DOt0oGBOo4q6vPFA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-swapstamp-fuchsia text-white hover:bg-swapstamp-black transition-all duration-300 text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Empieza Gratis
                <ArrowRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-swapstamp-fuchsia via-purple-600 to-swapstamp-fuchsia bg-[length:200%_100%] animate-shimmer" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

