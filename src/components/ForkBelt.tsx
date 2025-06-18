'use client'

import { motion } from 'framer-motion'
import { Code2, Wrench, Shield, Zap } from 'lucide-react'
import Section from './Section'
import ScrollAnimation, { StaggeredContainer, StaggeredItem } from './ScrollAnimation'
import { typography } from '@/styles/typography'

const tools = [
  {
    icon: <Code2 className="w-6 h-6" />,
    name: 'Foundry',
    description: 'Fast, portable and modular toolkit for Ethereum application development'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: 'Hardhat',
    description: 'Ethereum development environment for professionals'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: 'OpenZeppelin',
    description: 'Battle-tested smart contract libraries'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: 'Wagmi',
    description: 'React Hooks for Ethereum'
  }
]

const protocols = [
  'Uniswap',
  'Zora',
  'Nouns',
  'Safe (Gnosis)'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }),
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: '0 10px 30px -10px rgba(147, 51, 234, 0.3)',
    borderColor: 'rgba(147, 51, 234, 0.5)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
}

const iconVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  visible: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const ForkBelt = () => {
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
              🛠️ What's In Our Fork Belt
            </span>
            <h2 className="text-4xl font-bold mb-4 font-satoshi">
              We Don't Reinvent the Wheel
            </h2>
            <p className="text-xl text-gray-400">
              But we're very good at forging new ones.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4 text-[#00FF00]">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Supported Protocol Forks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {protocols.map((protocol, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-lg font-medium">{protocol}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-400 text-center">
              If needed, we build Full Custom Solidity
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ForkBelt 