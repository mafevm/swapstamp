import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Caracteristicas from "@/components/caracteristicas"
import ComoFunciona from "@/components/como-funciona"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Caracteristicas />
        <ComoFunciona />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

