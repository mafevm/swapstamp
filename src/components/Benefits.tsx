"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Benefits() {
  const benefits = [
    "Mantente conectado con tus clientes más allá de la caja",
    "Convierte a los visitantes ocasionales en clientes habituales",
    "Sin papel, sin complicaciones: solo recompensas sin esfuerzo",
    "Fácil de configurar, aún más fácil de usar",
  ]

  return (
    <section id="beneficios" className="w-full py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegir SwapStamp?</h2>
      <div className="max-w-3xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CheckCircle className="text-primary mr-4" size={24} />
            <p className="text-lg">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

