'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Props = {
  name: string
  description: string
  tech: string[]
  repo: string
}

export default function ProjectCard({ name, description, tech, repo }: Props) {
  return (
    <motion.div
      className="border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-xl font-semibold mb-2 text-accent">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <ul className="flex gap-2 flex-wrap mt-3 text-xs">
        {tech.map((t) => (
          <li
            key={t}
            className="bg-accent text-white px-2 py-1 rounded-full font-medium"
          >
            {t}
          </li>
        ))}
      </ul>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-3 text-sm"
      >
        Ver en GitHub <ExternalLink size={16} />
      </a>
    </motion.div>
  )
}
