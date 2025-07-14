'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Inicio', href: '#SpaceHero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#SpaceHero" className="flex items-center gap-3 hover:opacity-90 transition">
          <span className="text-yellow-400 font-bold text-[18px] tracking-wide">
            Bautista Heyde
          </span>
        </Link>

        {/* Menú hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 text-xl p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación escritorio */}
        <div className="hidden md:flex gap-6 items-center text-slate-300 text-[15px] font-medium">
          {navItems.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-yellow-400 transition">
              {item.name}
            </a>
          ))}

          {/* Redes */}
          <div className="flex gap-3 ml-4">
            <a href="mailto:tucorreo@ejemplo.com" target="_blank" className="bg-slate-800 p-[10px] rounded-full text-yellow-400 hover:scale-110 transition">
              <FaEnvelope size={20} />
            </a>
            <a href="https://github.com/bautistaheyde" target="_blank" className="bg-slate-800 p-[10px] rounded-full text-yellow-400 hover:scale-110 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/bautistaheyde" target="_blank" className="bg-slate-800 p-[10px] rounded-full text-yellow-400 hover:scale-110 transition">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Botón Contactar */}
          <a href="#contact" className="ml-6 bg-yellow-400 px-5 py-2.5 rounded-md text-slate-950 font-medium shadow-md hover:bg-yellow-300 transition">
            Contactar
          </a>
        </div>
      </div>

      {/* Navegación móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-slate-950 text-yellow-300 px-6 py-4 flex flex-col gap-4 border-t border-slate-800"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition text-lg"
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-3 mt-4">
              <a href="mailto:tucorreo@ejemplo.com" target="_blank" className="bg-slate-800 p-3 rounded-full text-yellow-400 hover:scale-110 transition">
                <FaEnvelope size={20} />
              </a>
              <a href="https://github.com/bautistaheyde" target="_blank" className="bg-slate-800 p-3 rounded-full text-yellow-400 hover:scale-110 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/bautistaheyde" target="_blank" className="bg-slate-800 p-3 rounded-full text-yellow-400 hover:scale-110 transition">
                <FaLinkedin size={20} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-yellow-400 px-5 py-2 rounded-md text-slate-950 font-medium shadow-md hover:bg-yellow-300 transition text-center"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
