import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'
import { Server, Monitor, Cog, Users, MessageSquare, Zap } from 'lucide-react'

const responsibilities = [
  {
    icon: Server,
    title: 'Core Infrastructure Development',
    description: 'Design, implement, and maintain core infrastructure systems that power our engineering teams.',
    details: ['Distributed systems architecture', 'Scalable deployment solutions', 'System reliability engineering'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Monitor,
    title: 'Monitoring & Deployment',
    description: 'Develop scalable deployment and monitoring solutions for production environments.',
    details: ['Real-time monitoring systems', 'Automated deployment pipelines', 'Performance optimization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cog,
    title: 'Distributed Systems',
    description: 'Build distributed systems from scratch and ensure their reliability in production.',
    details: ['Microservices architecture', 'Load balancing', 'Fault tolerance design'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Cross-functional Collaboration',
    description: 'Collaborate with cross-functional teams to improve productivity and system efficiency.',
    details: ['Product team integration', 'Developer experience optimization', 'Technical consultation'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: MessageSquare,
    title: 'Communication & Leadership',
    description: 'Communicate effectively with local and overseas teams across different time zones.',
    details: ['Technical documentation', 'Knowledge sharing sessions', 'Mentoring junior developers'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Developer Productivity',
    description: 'Design elegant abstractions that significantly boost developer productivity.',
    details: ['Developer tooling', 'Automation frameworks', 'Workflow optimization'],
    color: 'from-teal-500 to-cyan-500'
  }
]

export function ResponsibilitiesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="responsibilities"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-purple-900/10" />

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
            animate={hasIntersected ? { width: 140 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 1, delay: reducedMotion ? 0 : 0.3 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Key{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Responsibilities
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You will work across a wide range of areas including deployment, monitoring, package management, 
            distributed task scheduling, and file systems.
          </p>
        </motion.div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {responsibilities.map((responsibility, index) => (
            <motion.div
              key={responsibility.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: reducedMotion ? 0.1 : 0.6, 
                delay: reducedMotion ? 0 : 0.1 + index * 0.1 
              }}
              className="group h-full"
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 h-full flex flex-col"
                whileHover={reducedMotion ? {} : { 
                  scale: 1.02, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(6, 182, 212, 0.2)"
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${responsibility.color} flex items-center justify-center mb-6 shadow-lg animate-pulse-glow`}
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                >
                  <responsibility.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {responsibility.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {responsibility.description}
                </p>
                
                {/* Details List */}
                <div className="space-y-2">
                  {responsibility.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: reducedMotion ? 0.1 : 0.4, 
                        delay: reducedMotion ? 0 : 0.3 + index * 0.1 + detailIndex * 0.1 
                      }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3 animate-pulse" />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <span className="text-cyan-300 font-bold text-lg">
              🎯 Your mission: Design elegant abstractions to improve system stability and boost developer productivity
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}