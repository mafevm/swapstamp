import { Ticket, Smartphone, Zap, Rocket } from "lucide-react"

const razones = [
  {
    titulo: "Más stamps, más clientes",
    descripcion: "Tus clientes suman stamps y vuelven. Así de simple.",
    icono: Ticket,
  },
  {
    titulo: "Sin apps, sin descargas",
    descripcion: "SwapStamp funciona en cualquier móvil, sin complicaciones.",
    icono: Smartphone,
  },
  {
    titulo: "Automático desde el día 1",
    descripcion: "Lo activas en minutos y listo, sin dolores de cabeza.",
    icono: Zap,
  },
  {
    titulo: "Empieza fácil, crece sin límites",
    descripcion: "Hoy recompensas digitales, mañana lo que tu negocio necesite.",
    icono: Rocket,
  },
]

export default function PorQueSwapstamp() {
  return (
    <section id="por-que-swapstamp" className="container space-y-12 py-16 px-4 md:py-24 bg-white">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.2] sm:text-4xl md:text-5xl text-swapstamp-black">
          ¿Por qué SwapStamp?
        </h2>
        <p className="mt-4 text-xl text-swapstamp-gray-dark sm:text-2xl">
          Porque digitalizar tu negocio debería ser pan comido
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        {razones.map((razon, index) => (
          <div
            key={razon.titulo}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Fondo con gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-swapstamp-fuchsia/5 via-purple-500/5 to-swapstamp-fuchsia/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6">
                {/* Contenedor del icono con efectos */}
                <div className="relative">
                  <div className="absolute inset-0 bg-swapstamp-fuchsia rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div
                    className={`relative bg-gradient-to-br p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-500 shadow-lg ${
                      index === 0
                        ? "bg-purple-500"
                        : index === 1
                          ? "bg-blue-500"
                          : index === 2
                            ? "bg-teal-500"
                            : "bg-indigo-500"
                    }`}
                  >
                    <razon.icono className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-2xl mb-2 text-swapstamp-black group-hover:text-swapstamp-fuchsia transition-colors duration-300">
                    {razon.titulo}
                  </h3>
                  <p className="text-lg text-swapstamp-gray-dark group-hover:text-swapstamp-black transition-colors duration-300">
                    {razon.descripcion}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute bottom-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="h-1.5 w-1.5 rounded-full bg-swapstamp-fuchsia/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-swapstamp-fuchsia/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-swapstamp-fuchsia" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

