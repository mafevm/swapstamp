import { CheckCircle } from "lucide-react"

const pasos = [
  {
    titulo: "Regístrate",
    descripcion: "Crea una cuenta gratuita para tu negocio en minutos.",
  },
  {
    titulo: "Personaliza",
    descripcion: "Configura tu programa de fidelización y diseña tus sellos digitales.",
  },
  {
    titulo: "Comparte",
    descripcion: "Invita a tus clientes a unirse con un código QR o enlace.",
  },
  {
    titulo: "Recompensa",
    descripcion: "Otorga sellos digitales y gestiona las recompensas fácilmente.",
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-white to-pink-50 py-24 md:py-32">
      <div className="container max-w-screen-xl">
        <h2 className="text-center font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl mb-16">
          Cómo Funciona Swapstamp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-white rounded-full p-3 mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-2xl mb-3">{paso.titulo}</h3>
              <p className="text-muted-foreground text-lg">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

