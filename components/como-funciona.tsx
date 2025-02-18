import { UserPlus, Settings, Share2, Gift } from "lucide-react"

const pasos = [
  {
    titulo: "Regístrate",
    descripcion: "Crea una cuenta gratuita para tu negocio en minutos.",
    icono: UserPlus,
    color: "bg-purple-500",
  },
  {
    titulo: "Personaliza",
    descripcion: "Configura los detalles de tu programa de recompensas.",
    icono: Settings,
    color: "bg-blue-500",
  },
  {
    titulo: "Comparte",
    descripcion: "Invita a tus clientes a unirse con un código QR.",
    icono: Share2,
    color: "bg-teal-500",
  },
  {
    titulo: "Recompensa",
    descripcion: "Otorga puntos digitales y gestiona las recompensas fácilmente.",
    icono: Gift,
    color: "bg-indigo-500",
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-white to-gray-50/50 py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl text-swapstamp-black">
            Cómo Funciona Swapstamp
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 pt-12 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl relative"
            >
              {/* Línea conectora */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-[60%] w-[80%] h-[2px] bg-gray-200">
                  <div className="h-full relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 -right-1 w-3 h-3 rounded-full border-2 border-gray-200" />
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 w-2 h-2 rounded-full bg-gray-200" />
                  </div>
                </div>
              )}

              <div
                className={`${paso.color} rounded-2xl p-4 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <paso.icono className="h-10 w-10 text-white" />
              </div>

              <h3 className="font-bold text-2xl mb-3 text-swapstamp-black group-hover:text-swapstamp-fuchsia transition-colors duration-300">
                {paso.titulo}
              </h3>
              <p className="text-swapstamp-gray-dark text-lg">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

