export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Sobre mí</h1>
      <p>
        Soy un desarrollador fullstack argentino con experiencia en desarrollo web usando tecnologías como Next.js, NestJS, PostgreSQL, TypeORM y JWT. Actualmente me sigo capacitando mientras desarrollo proyectos personales y colaborativos.
      </p>
      <p>
        Me destaco por mi compromiso, habilidades comunicativas y capacidad para resolver problemas técnicos en equipo.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Tecnologías</h2>
      <ul className="flex flex-wrap gap-3 mt-2 text-sm">
        {['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'JWT', 'React', 'TypeORM'].map((tech) => (
          <li key={tech} className="bg-gray-200 px-3 py-1 rounded-full">{tech}</li>
        ))}
      </ul>
    </section>
  )
}
