import { Zap, Smartphone, Rocket, Users, BarChartIcon as ChartBar } from "lucide-react"

const beneficios = [
  {
    titulo: "Fidelización Digital Instantánea",
    descripcion: "Implementa un programa de puntos y sellos digitales en minutos.",
    icono: Zap,
  },
  {
    titulo: "App Móvil Personalizada",
    descripcion: "Ofrece a tus clientes una experiencia de fidelización en sus smartphones.",
    icono: Smartphone,
  },
  {
    titulo: "Análisis de Clientes Avanzado",
    descripcion: "Obtén insights valiosos sobre el comportamiento de tus clientes en Barcelona.",
    icono: ChartBar,
  },
  {
    titulo: "Aumento de Retención de Clientes",
    descripcion: "Incrementa la frecuencia de visitas y el valor de por vida del cliente.",
    icono: Users,
  },
  {
    titulo: "Escalabilidad para tu Negocio",
    descripcion: "Crece tu programa de fidelización a medida que tu negocio se expande en Barcelona.",
    icono: Rocket,
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-gradient-to-b from-white to-gray-50/50 py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-swapstamp-black">
            Beneficios de Digitalizar tu Programa de Fidelización
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div
                className={`bg-swapstamp-fuchsia rounded-2xl p-4 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
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

