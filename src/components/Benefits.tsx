"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function Benefits() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="benefits" className="w-full py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{t.benefits.title}</h2>
      <div className="max-w-3xl mx-auto">
        {t.benefits.list.map((benefit, index) => (
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

