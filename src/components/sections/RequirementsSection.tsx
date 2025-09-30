import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'
import { CheckCircle, Star, Code, Database, Server, Users, Network, AlertCircle } from 'lucide-react'

const mustHaveRequirements = [
  {
    icon: Code,
    title: 'Python or Go Proficiency',
    description: 'Strong proficiency in Python or Go programming languages',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'Computer Science Foundation',
    description: 'Strong foundation in data structures, operating systems, networking, databases',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Server,
    title: 'Production Experience',
    description: 'Hands-on experience with deployment tools and production environments',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Distributed Systems',
    description: 'Proven experience in building distributed systems from scratch',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Communication Skills',
    description: 'Excellent communication and collaboration skills for cross-team work',
    color: 'from-teal-500 to-cyan-500'
  }
]

const niceToHaveRequirements = [
  {
    icon: Network,
    title: 'Additional Networking Experience',
    description: 'Extended experience in networking technologies and protocols',
    color: 'from-indigo-500 to-purple-500'
  }
]

const experienceLevel = {
  title: 'Middle Level Position',
  description: 'We are looking for developers with solid experience who are ready to take on infrastructure challenges',
  requirements: [
    '2-5 years of software development experience',
    'Experience with production systems',
    'Understanding of system design principles',
    'Ability to work independently and in teams'
  ]
}

export function RequirementsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="requirements"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-blue-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={hasIntersected ? { width: 120 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 1, delay: reducedMotion ? 0 : 0.3 }}
            className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient">
              Requirements
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What we're looking for in our ideal Infrastructure Full-stack Developer candidate.
          </p>
        </motion.div>

        {/* Experience Level Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: reducedMotion ? 0 : 0.2 }}
          className="mb-16"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-xl">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">{experienceLevel.title}</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">{experienceLevel.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceLevel.requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: reducedMotion ? 0.1 : 0.4, 
                    delay: reducedMotion ? 0 : 0.4 + index * 0.1 
                  }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  {req}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Must-have Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <AlertCircle className="w-8 h-8 text-red-400 mr-3" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Must-have Requirements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mustHaveRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 0.6 + index * 0.1 
                }}
                className="group"
              >
                <motion.div
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 h-full"
                  whileHover={reducedMotion ? {} : { 
                    scale: 1.02, 
                    y: -8
                  }}
                >
                  {/* Required Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    REQUIRED
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${requirement.color} flex items-center justify-center mb-6 shadow-lg animate-pulse-glow`}
                    whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <requirement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                    {requirement.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {requirement.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nice-to-have Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
        >
          <div className="flex items-center justify-center mb-12">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Nice-to-have
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {niceToHaveRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 1.0 + index * 0.1 
                }}
                className="group"
              >
                <motion.div
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 h-full"
                  whileHover={reducedMotion ? {} : { 
                    scale: 1.02, 
                    y: -8
                  }}
                >
                  {/* Plus Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    PLUS
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${requirement.color} flex items-center justify-center mb-6 shadow-lg animate-pulse-glow`}
                    whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <requirement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                    {requirement.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {requirement.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}