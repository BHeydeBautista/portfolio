export default function Home() {
  return (
    <section className="text-center mt-10">
      <h1 className="text-4xl font-bold">¡Hola! Soy Bautista Heyde 👋</h1>
      <h2 className="text-xl text-gray-600 mt-2">Desarrollador Fullstack</h2>
      <p className="mt-4 text-gray-700 max-w-xl mx-auto">
        Apasionado por crear soluciones web modernas con tecnologías como <strong>Next.js</strong>, <strong>NestJS</strong> y <strong>PostgreSQL</strong>. 
        Me enfoco en desarrollar aplicaciones escalables, mantenibles y con una excelente experiencia de usuario.
      </p>
      <a
        href="/CV_Bautista_Heyde.pdf"
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Descargar CV
      </a>
    </section>
  )
}
