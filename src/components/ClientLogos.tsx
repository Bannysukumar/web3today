'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Uniswap', delay: 0 },
  { name: 'Nouns', delay: 0.1 },
  { name: 'Zora', delay: 0.2 },
  { name: 'OpenSea', delay: 0.3 },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've helped some of the most innovative companies in web3 bring their ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: logo.delay }}
              whileHover={{ scale: 1.05 }}
              className="w-32 h-12 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative h-full w-full flex items-center justify-center">
                <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            And many more innovative companies in the web3 space
          </p>
        </motion.div>
      </div>
    </section>
  )
} 