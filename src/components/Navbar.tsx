'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/contact', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full py-4 px-6 shadow bg-white sticky top-0 z-50">
      <ul className="flex gap-6 justify-center font-medium">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-blue-600 transition ${
                pathname === href ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
