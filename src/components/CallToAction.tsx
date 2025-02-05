"use client"

import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function CallToAction() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-20 px-6 bg-primary text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.cta.title}
      </motion.h2>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.cta.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" variant="secondary">
          {t.cta.button}
        </Button>
      </motion.div>
    </section>
  )
}

