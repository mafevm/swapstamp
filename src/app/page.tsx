import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

