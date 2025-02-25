export default function BlogPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {/* Aquí irán los posts del blog cuando los tengamos */}
        <div className="p-8 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Próximamente</h2>
          <p className="text-gray-600">
            Estamos preparando contenido interesante para compartir contigo. ¡Vuelve pronto!
          </p>
        </div>
      </div>
    </div>
  )
}

