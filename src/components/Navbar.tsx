"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);

  // Traducciones de los textos de navegación
  const navItems = [
    { name: language === "es" ? "Inicio" : "Home", href: "#SpaceHero" },
    { name: language === "es" ? "Skills" : "Skills", href: "#skills" },
    { name: language === "es" ? "Proyectos" : "Projects", href: "#projects" },
  ];

  const contactText = language === "es" ? "Contactar" : "Contact";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-lg shadow-lg border-b border-purple-700/30"
          : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#SpaceHero"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent drop-shadow"
        >
          Bautista Heyde
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 text-2xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label={language === "es" ? "Abrir menú" : "Open menu"}
          suppressHydrationWarning
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación escritorio */}
        <div
          className="hidden md:flex items-center gap-2 text-[15px] font-medium"
          suppressHydrationWarning
        >
          {isClient &&
            navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 py-1 text-slate-200 hover:text-purple-400 transition group"
              >
                <span>{item.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-yellow-300 rounded group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

          {/* Redes */}
          <div className="flex gap-2 ml-4">
            <a
              href="mailto:bautistaheyde@hotmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://github.com/BHeydeBautista"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/bautista-heyde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Selector de idioma */}
          {isClient && (
            <Menu as="div" className="relative ml-4 z-50 hidden md:block">
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center gap-2 px-3 py-1 rounded bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <FaGlobe className="text-purple-300" />
                    <span>{language === "es" ? "Español" : "English"}</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        open ? "rotate-180" : "rotate-0"
                      } transition-transform`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.13.976l-4.25 5a.75.75 0 01-1.13 0l-4.25-5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-slate-900 border border-purple-600/30 rounded shadow-lg focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setLanguage("es")}
                            className={`w-full px-4 py-2 text-left text-sm ${
                              active
                                ? "bg-purple-600 text-white"
                                : "text-slate-200"
                            }`}
                          >
                            🇪🇸 Español
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setLanguage("en")}
                            className={`w-full px-4 py-2 text-left text-sm ${
                              active
                                ? "bg-purple-600 text-white"
                                : "text-slate-200"
                            }`}
                          >
                            🇺🇸 English
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
          )}

          {/* Botón Contactar */}
          {isClient && (
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-yellow-400 hover:to-purple-500 text-white font-semibold shadow-lg transition"
            >
              {contactText}
            </a>
          )}
        </div>
      </div>

      {/* Overlay y menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />
            {/* Menú */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-slate-950/95 backdrop-blur-lg z-50 shadow-2xl flex flex-col gap-6 px-8 py-10"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-slate-200 hover:text-purple-400 transition font-semibold py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="mailto:bautistaheyde@hotmail.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
                  aria-label="Email"
                >
                  <FaEnvelope size={22} />
                </a>
                <a
                  href="https://github.com/BHeydeBautista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/bautista-heyde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-purple-600/80 text-purple-300 hover:text-white transition shadow"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
              {/* Selector de idioma en menú móvil */}
              <Menu as="div" className="relative mt-8 z-50">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex items-center gap-2 px-3 py-2 rounded bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white transition w-full justify-between focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <span className="flex gap-2 items-center">
                        <FaGlobe className="text-purple-300" />
                        {language === "es" ? "Español" : "English"}
                      </span>
                      <svg
                        className={`w-4 h-4 transform ${
                          open ? "rotate-180" : "rotate-0"
                        } transition-transform`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.13.976l-4.25 5a.75.75 0 01-1.13 0l-4.25-5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>

                    <Menu.Items className="absolute right-0 mt-2 w-40 bg-slate-900 border border-purple-600/30 rounded shadow-lg focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                setLanguage("es");
                                setMenuOpen(false);
                              }}
                              className={`w-full px-4 py-2 text-left text-sm ${
                                active
                                  ? "bg-purple-600 text-white"
                                  : "text-slate-200"
                              }`}
                            >
                              🇪🇸 Español
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                setLanguage("en");
                                setMenuOpen(false);
                              }}
                              className={`w-full px-4 py-2 text-left text-sm ${
                                active
                                  ? "bg-purple-600 text-white"
                                  : "text-slate-200"
                              }`}
                            >
                              🇺🇸 English
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </>
                )}
              </Menu>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-yellow-400 hover:to-purple-500 px-5 py-2 rounded-lg text-white font-semibold shadow-lg text-center transition"
              >
                {contactText}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
