'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

export default function ForkSlider() {
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const scale = useTransform(x, [-100, 0, 100], [0.8, 1, 0.8])
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])

  return (
    <div className="relative w-full max-w-md mx-auto mb-12">
      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span>Forked</span>
        <span>Custom</span>
      </div>

      {/* Slider track */}
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-500"
          style={{ width: '50%', x: '25%' }}
        />
      </div>

      {/* Slider handle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x, scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ opacity }}
          animate={{
            boxShadow: isDragging
              ? '0 0 20px rgba(147, 51, 234, 0.5)'
              : '0 0 0px rgba(147, 51, 234, 0)',
          }}
        >
          <div className="w-4 h-4 rounded-full bg-black" />
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: isDragging
            ? 'radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, transparent 70%)'
            : 'none',
        }}
      />
    </div>
  )
} 