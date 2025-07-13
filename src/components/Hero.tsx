'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      className="text-center mt-10 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">
        ¡Hola! Soy <span className="text-blue-600">Bautista Heyde</span> 👋
      </h1>
      <h2 className="text-xl text-gray-600">Desarrollador Fullstack</h2>
      <p className="max-w-xl mx-auto text-gray-700">
        Apasionado por crear soluciones web modernas con tecnologías como <strong>Next.js</strong>, <strong>NestJS</strong> y <strong>PostgreSQL</strong>. Me enfoco en desarrollar aplicaciones escalables, mantenibles y con una excelente experiencia de usuario.
      </p>
      <a
        href="/CV_Bautista_Heyde.pdf"
        download
        className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Descargar CV
      </a>
    </motion.section>
  )
}
