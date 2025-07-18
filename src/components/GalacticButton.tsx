'use client'
import { motion } from 'framer-motion'

export default function GalacticButton({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px #facc15' }}
      whileTap={{ scale: 0.95, boxShadow: '0 0 30px #eab308' }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden font-semibold px-6 py-3 rounded-md bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 text-white text-sm md:text-base tracking-wide shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
    >
      <span className="absolute inset-0 bg-white/10 blur-md opacity-10 animate-pulse pointer-events-none" />
      <span className="relative z-10">{text}</span>
    </motion.button>
  )
}
