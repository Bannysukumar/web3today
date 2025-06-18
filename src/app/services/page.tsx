'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'Smart Contract Development',
    description: 'Custom smart contract development for DeFi, NFTs, DAOs, and other Web3 applications. Our expert team ensures secure, efficient, and auditable code.',
    icon: '🔐',
    technologies: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Foundry']
  },
  {
    title: 'DApp Development',
    description: 'End-to-end decentralized application development with modern UI/UX. We build scalable and user-friendly applications that connect seamlessly with blockchain networks.',
    icon: '⚡',
    technologies: ['React', 'Next.js', 'ethers.js', 'IPFS']
  },
  {
    title: 'Web3 Integration',
    description: 'Seamless integration of Web3 functionality into existing applications. Connect your platform to the blockchain ecosystem with wallet integration and transaction management.',
    icon: '🔗',
    technologies: ['Web3.js', 'WalletConnect', 'MetaMask', 'Rainbow']
  },
  {
    title: 'NFT Solutions',
    description: 'Complete NFT platform development including marketplaces, minting interfaces, and collection management tools. Create unique digital experiences for your community.',
    icon: '🎨',
    technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'Arweave']
  },
  {
    title: 'DeFi Development',
    description: 'Build sophisticated decentralized finance applications including DEXs, lending platforms, and yield aggregators. Our solutions prioritize security and efficiency.',
    icon: '💹',
    technologies: ['AMMs', 'Yield Farming', 'Staking', 'Oracles']
  },
  {
    title: 'DAO Infrastructure',
    description: 'Create decentralized autonomous organizations with custom governance mechanisms, voting systems, and treasury management tools.',
    icon: '🏛️',
    technologies: ['Snapshot', 'Gnosis Safe', 'Colony', 'Aragon']
  }
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Web3 Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge blockchain solutions. We bring your Web3 vision to life with expertise, innovation, and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 h-full border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-semibold">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-900 bg-opacity-30 rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  animate={{
                    scale: hoveredService === index ? 1.05 : 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Web3 Project?</h2>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
} 