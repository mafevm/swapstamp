import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PorQueSwapstamp from "@/components/por-que-swapstamp"
import ComoFunciona from "@/components/como-funciona"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PorQueSwapstamp />
        <ComoFunciona />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

