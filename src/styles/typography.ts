import { Inter, Space_Grotesk } from 'next/font/google'

// Font definitions
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// Typography styles
export const typography = {
  h1: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: { base: '2.5rem', md: '3.5rem', lg: '4rem' },
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: { base: '2rem', md: '2.5rem', lg: '3rem' },
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: 'var(--font-space-grotesk)',
    fontSize: { base: '1.5rem', md: '1.75rem', lg: '2rem' },
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.3,
  },
  body: {
    fontFamily: 'var(--font-inter)',
    fontSize: { base: '1rem', md: '1.125rem' },
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  quote: {
    fontFamily: 'var(--font-inter)',
    fontSize: { base: '1.125rem', md: '1.25rem' },
    fontStyle: 'italic',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  link: {
    fontFamily: 'var(--font-inter)',
    fontSize: '1rem',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    _hover: {
      color: 'white',
      textDecoration: 'underline',
    },
  },
}

// Animation variants for text
export const textAnimations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  gradientText: {
    background: 'linear-gradient(135deg, #fff 0%, #a8a8a8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 200%',
    animation: 'gradient 8s ease infinite',
  }
} 