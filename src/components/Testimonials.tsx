"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="testimonials" className="w-full py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">{t.testimonials.title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {t.testimonials.quotes.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
            <p className="text-gray-600">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

