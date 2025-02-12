"use client"

import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    { title: "Regístrate", description: "Crea tu cuenta SwapStamp en minutos" },
    { title: "Personaliza", description: "Configura las reglas de tu programa de fidelización" },
    { title: "Lanza", description: "Invita a los clientes a unirse a tu programa digital" },
  ]

  return (
    <section id="como-funciona" className="w-full py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Cómo Funciona</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm border border-[#FFEDF3] bg-[#FFEDF3]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

