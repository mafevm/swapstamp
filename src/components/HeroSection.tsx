"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-primary to-primary-light text-white text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La Forma Más Fácil de Fidelizar Clientes
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sin más tarjetas perdidas. Sin dolores de cabeza de configuración. Solo fidelización de clientes sin esfuerzo.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 font-bold shadow-lg">
          Comienza Gratis
        </Button>
      </motion.div>
    </section>
  )
}

