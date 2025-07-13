'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/contact', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="w-full py-4 px-6 shadow bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center justify-center">
        <ul className="flex gap-6 justify-center font-medium">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <motion.li
                key={href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={href}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? 'text-accent dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-blue-400'
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            )
          })}
        </ul>
        <div className="absolute right-0 top-0">
          <DarkModeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
