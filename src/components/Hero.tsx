import { motion } from 'framer-motion';
import Image from 'next/image';
import NavMenu from './NavMenu';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <NavMenu />
      {/* Background Protocol Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">⚡</div>
        <div className="absolute top-40 right-20 text-6xl">🔒</div>
        <div className="absolute bottom-40 left-20 text-6xl">💎</div>
        <div className="absolute bottom-20 right-10 text-6xl">🌐</div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-sm font-medium mb-4">
              🚀 QuickContracts.dev
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-satoshi">
              Smart Contracts,<br />
              <span className="text-[#00FF00]">Forked or Custom</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Turn your protocol idea into a working smart contract in days, not months. We handle the technical heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#00FF00] text-black font-semibold rounded-lg hover:bg-[#00FF00]/90 transition-colors"
              >
                Send Your Idea
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Our Builds
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/10 to-transparent rounded-2xl" />
            <Image
              src="/hero-illustration.svg"
              alt="Smart Contract Development"
              fill
              className="object-contain p-8"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 