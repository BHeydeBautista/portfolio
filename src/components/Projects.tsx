'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Proyectos destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-yellow-400/20 hover:scale-[1.02] hover:border-yellow-400 transition-transform duration-300"
          >
            {/* Imagen del proyecto con hover */}
            <div className="relative h-48 w-full overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.stackName && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-slate-950 text-xs font-medium px-2 py-1 rounded">
                  {project.stackName}
                </span>
              )}
            </div>

            {/* Contenido textual */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>

              {/* Stack tecnológico */}
              <div className="flex gap-3 mb-4 text-yellow-400 text-xl flex-wrap">
                {project.stack.map((Icon, j) => (
                  <Icon key={j} />
                ))}
              </div>

              {/* Acciones */}
              <div className="flex gap-4 items-center">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-slate-950 text-sm px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
                  >
                    Ver online
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    Proyecto privado o en desarrollo
                  </span>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline text-sm hover:text-yellow-300 transition"
                  >
                    Código fuente
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
