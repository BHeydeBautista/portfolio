'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Inicio', href: '#SpaceHero' },
  { name: 'Skills', href: '#TechGrid' },
  { name: 'Proyectos', href: '#Projects' },
  { name: 'Contacto', href: '#Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-purple-700/30 shadow-md'
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#SpaceHero" className="text-purple-400 text-lg font-bold tracking-wide hover:opacity-80 transition">
          Bautista Heyde
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 text-2xl p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center gap-6 text-slate-300 text-[15px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-purple-400 transition duration-200"
            >
              {item.name}
            </a>
          ))}

          {/* Redes */}
          <div className="flex gap-3 ml-4">
            <a href="mailto:tucorreo@ejemplo.com" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full text-purple-400 transition hover:scale-110">
              <FaEnvelope size={18} />
            </a>
            <a href="https://github.com/bautistaheyde" target="_blank" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full text-purple-400 transition hover:scale-110">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/bautistaheyde" target="_blank" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full text-purple-400 transition hover:scale-110">
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Botón Contactar */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow transition duration-200"
          >
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
            className="md:hidden bg-slate-950 text-purple-300 px-6 py-4 flex flex-col gap-4 border-t border-purple-700/30"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-purple-400 transition"
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-3 mt-4">
              <a href="mailto:tucorreo@ejemplo.com" className="bg-slate-800 p-3 rounded-full text-purple-400 hover:scale-110 transition">
                <FaEnvelope size={20} />
              </a>
              <a href="https://github.com/bautistaheyde" className="bg-slate-800 p-3 rounded-full text-purple-400 hover:scale-110 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/bautistaheyde" className="bg-slate-800 p-3 rounded-full text-purple-400 hover:scale-110 transition">
                <FaLinkedin size={20} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md text-white font-medium shadow-md text-center transition"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
