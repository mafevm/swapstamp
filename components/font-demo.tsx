import { Button } from "@/components/ui/button"

const fonts = [
  { name: "Poppins", className: "font-poppins" },
  { name: "Outfit", className: "font-outfit" },
  { name: "Space Grotesk", className: "font-space-grotesk" },
  { name: "Lexend", className: "font-lexend" },
  { name: "Manrope", className: "font-manrope" },
]

export default function FontDemo() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Opciones de Fuentes</h2>
      {fonts.map((font) => (
        <div key={font.name} className={`mb-8 ${font.className}`}>
          <h3 className="text-2xl font-bold mb-4">{font.name}</h3>
          <p className="text-xl mb-4">SwapStamp: Digitaliza tu negocio fácil y rápido.</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Empieza ahora
          </Button>
        </div>
      ))}
    </div>
  )
}

