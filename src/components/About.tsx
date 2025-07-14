'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/avatar.png" // asegurate que el archivo esté en public
            alt="Avatar de Bautista"
            width={240}
            height={240}
            className="rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
            Conoceme mejor
          </h2>
          <p className="text-base leading-relaxed">
            Soy Bautista, desarrollador Full Stack y estudiante de Ingeniería en Informática. Me apasiona combinar tecnología, diseño y propósito en cada proyecto. Valoro el trabajo en equipo, la evolución constante y la creación de soluciones que generen impacto positivo.
          </p>
          <p className="mt-4 text-sm italic text-slate-400">
            “Cada línea de código puede ser arte si se escribe con intención.”
          </p>
        </motion.div>
      </div>
    </section>
  )
}
