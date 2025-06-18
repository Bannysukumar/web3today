'use client'

import { motion } from 'framer-motion'

const codeLines = [
  { width: '90%', delay: 0.2 },
  { width: '75%', delay: 0.3 },
  { width: '85%', delay: 0.4 },
  { width: '65%', delay: 0.5 },
  { width: '80%', delay: 0.6 },
  { width: '70%', delay: 0.7 },
]

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-1">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl" />
        <div className="relative h-full w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
          
          {/* Code-like elements */}
          <div className="absolute inset-0 p-8">
            <div className="space-y-4">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: line.delay }}
                  className="h-4 bg-white/5 rounded-full"
                  style={{ width: line.width }}
                />
              ))}
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-lg backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-pink-500/20 rounded-lg backdrop-blur-sm"
          />
        </div>
      </div>
    </motion.div>
  )
} 