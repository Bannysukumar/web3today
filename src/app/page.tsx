'use client'

import Hero from '@/components/Hero'
import ForkBelt from '@/components/ForkBelt'
import BuilderJourney from '@/components/BuilderJourney'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ForkBelt />
      <BuilderJourney />
    </main>
  )
} 