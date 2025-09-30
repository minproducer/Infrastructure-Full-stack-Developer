import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'
import { Users, MapPin, Trophy, Globe } from 'lucide-react'

const teamStats = [
  {
    icon: Users,
    number: '~100',
    label: 'Singapore IT Team',
    description: 'Core engineering team in Singapore',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    number: '~15',
    label: 'Vietnam IT Team',
    description: 'Growing development team in Vietnam',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Trophy,
    number: 'ICPC',
    label: 'Award Winners',
    description: 'Team members with ICPC, Informatics, Physics, Math Olympiad achievements',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Globe,
    number: 'Mixed',
    label: 'International Leadership',
    description: 'Vietnamese and international team leads',
    color: 'from-emerald-500 to-teal-500'
  }
]

const cultureHighlights = [
  {
    title: 'Non-hierarchical Culture',
    description: 'Flat organization structure promotes open communication and innovation',
    color: 'from-blue-400/20 to-cyan-400/20',
    border: 'border-blue-400/30'
  },
  {
    title: 'Highly Collaborative',
    description: 'Work directly with Singapore core team and cross-functional teams',
    color: 'from-purple-400/20 to-pink-400/20',
    border: 'border-purple-400/30'
  },
  {
    title: 'Exceptional Engineers',
    description: 'Surrounded by talented individuals with proven track records',
    color: 'from-emerald-400/20 to-teal-400/20',
    border: 'border-emerald-400/30'
  }
]

export function TeamSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="team"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-blue-900/10" />

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
            animate={hasIntersected ? { width: 100 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 1, delay: reducedMotion ? 0 : 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Team{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Structure
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a diverse, international team of exceptional engineers and collaborate across multiple domains and technologies.
          </p>
        </motion.div>

        {/* Team Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: reducedMotion ? 0.1 : 0.6, 
                delay: reducedMotion ? 0 : 0.1 + index * 0.1 
              }}
              className="group"
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 h-full text-center"
                whileHover={reducedMotion ? {} : { 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.6)"
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <h3 className="text-3xl font-black text-white mb-2">{stat.number}</h3>
                
                {/* Label */}
                <h4 className="text-lg font-bold text-gray-200 mb-3">{stat.label}</h4>
                
                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Culture Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why You'll Love Working{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              With Us
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 0.8 + index * 0.2 
                }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${highlight.color} border ${highlight.border} backdrop-blur-sm`}
              >
                <h4 className="text-xl font-bold text-white mb-3">{highlight.title}</h4>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}