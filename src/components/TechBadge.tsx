'use client'
import { motion } from 'framer-motion'

export default function TechBadge({ name }: { name: string }) {
  return (
    <motion.li
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {name}
    </motion.li>
  )
}
