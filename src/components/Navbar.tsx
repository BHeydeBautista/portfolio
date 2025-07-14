'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-950 backdrop-blur-lg z-50 px-4 py-3 flex justify-between items-center border-b border-slate-800"
    >
      <h2 className="text-white font-bold text-xl">Bautista</h2>
      <ul className="flex gap-6 text-white text-sm font-medium">
        {navItems.map((item, i) => (
          <li key={i}>
            <Link href={item.href} scroll={false}>
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
