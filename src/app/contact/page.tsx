'use client'
import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const contactItems = [
  {
    label: 'Email',
    value: 'bautistaheyde@gmail.com',
    icon: Mail,
    link: 'mailto:bautistaheyde@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'BHeydeBautista',
    icon: Github,
    link: 'https://github.com/BHeydeBautista',
  },
  {
    label: 'LinkedIn',
    value: 'bautista-heyde',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/bautista-heyde/',
  },
]

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <motion.h1
        className="text-3xl font-bold text-center text-accent dark:text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contacto
      </motion.h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {contactItems.map(({ label, value, icon: Icon, link }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="p-4 border rounded-lg bg-white dark:bg-gray-900 shadow"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
              aria-label={label}
            >
              <Icon className="text-accent dark:text-blue-400" size={24} />
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{value}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
