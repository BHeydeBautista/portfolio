'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-6 pb-10 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="mailto:bautistaheyde@gmail.com"
          aria-label="Correo"
          className="hover:text-accent dark:hover:text-blue-400 transition"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/BHeydeBautista"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent dark:hover:text-blue-400 transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/bautista-heyde/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent dark:hover:text-blue-400 transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Bautista Heyde. Todos los derechos reservados.</p>
    </footer>
  )
}
