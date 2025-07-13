'use client'
import { useTheme } from '../context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  )
}
