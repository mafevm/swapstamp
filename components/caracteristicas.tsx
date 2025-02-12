import { Smartphone, CloudIcon as CloudCheck, TrendingUp, Zap } from "lucide-react"

const caracteristicas = [
  {
    nombre: "100% Digital",
    descripcion: "Sin tarjetas físicas, todo en el smartphone de tus clientes.",
    icono: Smartphone,
  },
  {
    nombre: "Fácil de Usar",
    descripcion: "Interfaz intuitiva para negocios y clientes.",
    icono: Zap,
  },
  {
    nombre: "En la Nube",
    descripcion: "Accede desde cualquier dispositivo, en cualquier momento.",
    icono: CloudCheck,
  },
  {
    nombre: "Analíticas Simples",
    descripcion: "Conoce el impacto de tu programa de fidelización.",
    icono: TrendingUp,
  },
]

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="container space-y-12 py-16 px-4 md:py-24">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-2xl leading-[1.2] sm:text-3xl md:text-4xl">Características Principales</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Descubre cómo Swapstamp simplifica la fidelización de clientes para tu negocio.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {caracteristicas.map((caracteristica) => (
          <div
            key={caracteristica.nombre}
            className="relative overflow-hidden rounded-2xl border-2 border-primary/10 bg-background p-4 sm:p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <caracteristica.icono className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg">{caracteristica.nombre}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{caracteristica.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

