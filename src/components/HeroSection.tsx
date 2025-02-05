"use client"

import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../utils/translations"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-primary to-primary-light text-white text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.hero.title}
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.hero.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 font-bold shadow-lg">
          {t.hero.cta}
        </Button>
      </motion.div>
    </section>
  )
}

