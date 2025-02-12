"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="w-full py-20 px-6 bg-primary text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¿Listo para Transformar tu Programa de Fidelización?
      </motion.h2>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Únete a SwapStamp hoy y comienza a construir relaciones más fuertes con tus clientes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" variant="secondary">
          Regístrate Ahora
        </Button>
      </motion.div>
    </section>
  )
}

