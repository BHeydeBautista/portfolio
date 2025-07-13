export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-700">Sobre mí</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        ¡Hola! Soy <strong>[Tu Nombre]</strong>, un desarrollador Full Stack apasionado por la tecnología y la construcción de soluciones web modernas.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Me especializo en tecnologías como <span className="font-semibold">JavaScript, TypeScript, React, Node.js</span> y herramientas modernas como Next.js, Tailwind CSS y más.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Disfruto trabajar en equipo, aprender nuevas herramientas y enfrentar desafíos que me ayuden a crecer profesionalmente.
      </p>
      <a
        href="/cv.pdf"
        target="_blank"
        className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Descargar CV
      </a>
    </section>
  );
}
