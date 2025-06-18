'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code2, Rocket, Repeat } from 'lucide-react'

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Idea',
    description: 'Share your protocol concept'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Scope',
    description: 'We define the build approach'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Fork/Build',
    description: 'Smart contracts come to life'
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: 'Testnet',
    description: 'Deploy and iterate'
  }
]

const BuilderJourney = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-sm font-medium mb-4">
              🧭 The Builder's Journey
            </span>
            <h2 className="text-4xl font-bold mb-4 font-satoshi">
              From Shower Thought to Mainnet
            </h2>
            <p className="text-xl text-gray-400">
              In Days, Not Months
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4 text-[#00FF00]">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00FF00] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-400 italic">
              "No meetings. No handoffs. Just async builds that work."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BuilderJourney 