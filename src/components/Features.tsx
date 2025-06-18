import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  BarChart2, 
  Clock, 
  Lock, 
  Search,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Smart Contract Analysis',
    description: 'AI-powered analysis of contract terms, risks, and obligations.',
    benefits: ['Automated risk assessment', 'Key term extraction', 'Compliance checking']
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Workflow',
    description: 'Streamline contract review and approval processes.',
    benefits: ['Real-time collaboration', 'Role-based access', 'Version control']
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Analytics Dashboard',
    description: 'Gain insights into your contract portfolio performance.',
    benefits: ['Contract metrics', 'Risk analysis', 'Performance tracking']
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Automated Reminders',
    description: 'Never miss important contract deadlines and renewals.',
    benefits: ['Custom alerts', 'Renewal tracking', 'Deadline management']
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'Bank-level security for your sensitive contract data.',
    benefits: ['End-to-end encryption', 'Audit trails', 'Compliance ready']
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Advanced Search',
    description: 'Find any contract or clause in seconds.',
    benefits: ['Full-text search', 'Semantic search', 'Filter by metadata']
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Powerful Features
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Contracts
            </h2>
            <p className="text-xl text-gray-600">
              Streamline your contract management with our comprehensive suite of features
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 