export default function ContactPage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-4">Podés escribirme a mi correo o encontrarme en redes:</p>
      <div className="space-y-2">
        <a href="mailto:bautistaheyde@gmail.com" className="text-blue-600 hover:underline">
          bautistaheyde@gmail.com
        </a><br />
        <a href="https://github.com/BHeydeBautista" target="_blank" className="text-blue-600 hover:underline">
          GitHub
        </a><br />
        <a href="https://www.linkedin.com/in/bautista-heyde/" target="_blank" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
