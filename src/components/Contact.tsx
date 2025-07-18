'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const contacts = [
  {
    name: 'Email',
    href: 'mailto:bautistaheyde@hotmail.com',
    icon: <FaEnvelope size={32} />,
    description: 'Envíame un correo directo',
    bg: 'bg-yellow-400 text-slate-950 hover:bg-yellow-300',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bautista-heyde/',
    icon: <FaLinkedin size={32} />,
    description: 'Conectemos en LinkedIn',
    bg: 'bg-blue-600 text-white hover:bg-blue-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/BHeydeBautista',
    icon: <FaGithub size={32} />,
    description: 'Mirá mis proyectos',
    bg: 'bg-slate-800 text-white hover:bg-slate-700',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/3435135755',
    icon: <FaWhatsapp size={32} />,
    description: 'Escribime directo al WhatsApp',
    bg: 'bg-green-500 text-white hover:bg-green-400',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white px-6 py-20 font-mono"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">
        ¿Conectamos?
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto text-slate-300 mb-12"
      >
        Elegí la forma que más te convenga para contactarme — estoy disponible por correo, redes profesionales o directamente por WhatsApp.
      </motion.p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
        {contacts.map((contact) => (
          <motion.a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`flex items-center gap-4 rounded-xl p-5 ${contact.bg} shadow-lg transition-colors duration-300`}
          >
            <div className="p-3 bg-white/10 rounded-full">{contact.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-sm opacity-80">{contact.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
