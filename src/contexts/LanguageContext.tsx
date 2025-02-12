"use client"

import { createContext, useContext, type ReactNode } from "react"

interface LanguageContextType {
  language: "es"
}

const LanguageContext = createContext<LanguageContextType>({ language: "es" })

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageContext.Provider value={{ language: "es" }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

