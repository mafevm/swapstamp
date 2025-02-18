import { Check, Zap, Smartphone, Users, Rocket } from "lucide-react"

const beneficios = [
  {
    titulo: "Empieza gratis en minutos",
    descripcion: "Sin complicaciones, sin compromisos.",
    icono: Check,
    color: "bg-purple-500",
  },
  {
    titulo: "Digitaliza sin esfuerzo",
    descripcion: "Olvídate de los tecnicismos.",
    icono: Zap,
    color: "bg-blue-500",
  },
  {
    titulo: "Funciona en cualquier móvil",
    descripcion: "Sin instalar nada, directo al grano.",
    icono: Smartphone,
    color: "bg-teal-500",
  },
  {
    titulo: "Atrae más clientes",
    descripcion: "Y haz que vuelvan una y otra vez.",
    icono: Users,
    color: "bg-indigo-500",
  },
  {
    titulo: "SwapStamp crece contigo",
    descripcion: "Hoy stamps, mañana lo que necesites.",
    icono: Rocket,
    color: "bg-violet-500",
  },
]

export default function BeneficiosClave() {
  return (
    <section id="beneficios" className="bg-gradient-to-b from-white to-gray-50/50 py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-swapstamp-black">
            Beneficios que marcan la diferencia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div
                className={`${beneficio.color} rounded-2xl p-4 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <beneficio.icono className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-swapstamp-black group-hover:text-swapstamp-fuchsia transition-colors duration-300">
                {beneficio.titulo}
              </h3>
              <p className="text-swapstamp-gray-dark text-lg">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

