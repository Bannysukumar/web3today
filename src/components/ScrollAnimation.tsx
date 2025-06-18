'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'scaleIn'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function ScrollAnimation({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration,
  className = '',
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold, once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20])

  const selectedAnimation = animations[animation]
  const transition = {
    ...selectedAnimation.transition,
    delay,
    duration: duration || selectedAnimation.transition.duration
  }

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={transition}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered container for multiple elements
export function StaggeredContainer({
  children,
  className = '',
  staggerDelay = 0.1
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered item for use within StaggeredContainer
export function StaggeredItem({
  children,
  className = '',
  animation = 'fadeIn'
}: {
  children: React.ReactNode
  className?: string
  animation?: keyof typeof animations
}) {
  const selectedAnimation = animations[animation]
  
  return (
    <motion.div
      variants={{
        hidden: selectedAnimation.initial,
        visible: selectedAnimation.animate
      }}
      transition={selectedAnimation.transition}
      className={className}
    >
      {children}
    </motion.div>
  )
} 