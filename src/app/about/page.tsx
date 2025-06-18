import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Blockchain Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'With over 8 years of blockchain experience, Alice leads our technical development and architecture.',
  },
  {
    name: 'Bob Smith',
    role: 'Smart Contract Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Expert in Solidity and blockchain security, Bob ensures our smart contracts are secure and efficient.',
  },
  {
    name: 'Carol Lee',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Carol brings blockchain applications to life with intuitive and beautiful user interfaces.',
  },
  {
    name: 'David Kim',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'David ensures smooth project delivery and excellent communication with our clients.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '30+', label: 'Global Clients' },
  { number: '0', label: 'Security Breaches' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We leverage cutting-edge blockchain technologies to create forward-thinking solutions that drive the future of Web3.',
    icon: '🚀',
  },
  {
    title: 'Security',
    description: 'Our rigorous security protocols and multiple audit layers ensure your smart contracts are bulletproof.',
    icon: '🛡️',
  },
  {
    title: 'Transparency',
    description: 'We maintain open communication and clear documentation throughout every step of your project.',
    icon: '📈',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every line of code, every design decision, and every client interaction.',
    icon: '⭐',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Pioneering Web3 Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate blockchain experts dedicated to transforming innovative ideas into secure, scalable smart contract solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Building the Future of Blockchain</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Founded in 2021, QuickContracts has rapidly emerged as a leading force in blockchain development and smart contract solutions. Our mission is to bridge the gap between traditional business and Web3 technology.
                </p>
                <p className="text-gray-300 text-lg">
                  We specialize in developing secure, scalable smart contracts and decentralized applications that power the next generation of blockchain innovation. Our expertise spans DeFi, NFTs, DAOs, and custom blockchain solutions.
            </p>
                <p className="text-gray-300 text-lg">
                  With a proven track record of successful deployments and zero security breaches, we're trusted by startups and enterprises alike to deliver robust blockchain solutions.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Technology illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-blue-500/30"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-white">{member.name}</h3>
                <p className="text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-400 text-center text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Blockchain Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your blockchain vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
          </a>
      </div>
      </section>
    </div>
  );
};

export default AboutUs; 