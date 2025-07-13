import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    name: 'Ecommerce Backend',
    description: 'API RESTful completa con autenticación JWT, manejo de órdenes y productos.',
    tech: ['NestJS', 'TypeORM', 'PostgreSQL'],
    repo: 'https://github.com/BHeydeBautista/backend-ecommerce-nestjs',
  },
  {
    name: 'Chat en tiempo real',
    description: 'App de mensajería usando Next.js y Socket.io.',
    tech: ['Next.js', 'Socket.io', 'Tailwind'],
    repo: 'https://github.com/BHeydeBautista/',
  },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-center">Proyectos</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
