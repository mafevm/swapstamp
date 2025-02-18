import { Zap, Smartphone, Rocket, Users, Clock } from "lucide-react"

const caracteristicas = [
  {
    nombre: "Gratis para empezar",
    descripcion: "Sin trampas. Sin historias.",
    icono: Zap,
  },
  {
    nombre: "2 minutos y listo",
    descripcion: "Lo configuras más rápido que un café.",
    icono: Clock,
  },
  {
    nombre: "Cero instalaciones",
    descripcion: "Funciona en cualquier móvil, sin apps.",
    icono: Smartphone,
  },
  {
    nombre: "Atrae más clientes",
    descripcion: "Y haz que vuelvan una y otra vez.",
    icono: Users,
  },
  {
    nombre: "Crece con nosotros",
    descripcion: "Empieza con rewards, llega a lo más alto.",
    icono: Rocket,
  },
]

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="container space-y-12 py-16 px-4 md:py-24">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.2] sm:text-4xl md:text-5xl">Sin rollos, puro negocio</h2>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">SwapStamp es la chispa que tu negocio necesita</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caracteristicas.map((caracteristica) => (
          <div
            key={caracteristica.nombre}
            className="relative overflow-hidden rounded-2xl border-2 border-primary/10 bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <caracteristica.icono className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">{caracteristica.nombre}</h3>
            </div>
            <p className="mt-2 text-lg text-muted-foreground">{caracteristica.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

