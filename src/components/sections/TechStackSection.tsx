import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'

const techCategories = {
  core: {
    title: 'Core Languages',
    color: 'from-blue-400 to-cyan-400',
    technologies: ['Python', 'Go', 'TypeScript', 'JavaScript', 'SQL']
  },
  infrastructure: {
    title: 'Infrastructure & DevOps',
    color: 'from-green-400 to-emerald-400',
    technologies: ['Bazel', 'Ansible', 'Nomad', 'Docker', 'Kubernetes']
  },
  systems: {
    title: 'Distributed Systems',
    color: 'from-purple-400 to-pink-400',
    technologies: ['Microservices', 'Message Queues', 'Load Balancers', 'Caching']
  },
  monitoring: {
    title: 'Monitoring & Tools',
    color: 'from-orange-400 to-red-400',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'CI/CD', 'Git']
  }
}

function TechIcon({ tech, color, delay }: { tech: string; color: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const { reducedMotion } = useAppStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={reducedMotion ? {} : { 
        scale: 1.1, 
        rotateY: 360,
        transition: { duration: 0.6 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl shadow-black/40 border border-white/10`}
        whileHover={reducedMotion ? {} : { 
          boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(59, 130, 246, 0.3)' 
        }}
      >
        <span className="text-white font-black text-sm md:text-base text-center px-2 drop-shadow-lg">
          {tech}
        </span>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-300`}
        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
      />
    </motion.div>
  )
}

export function TechStackSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-purple-900/10" />

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
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8 animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wide">
            Tech Stack &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Tools
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            <strong className="text-cyan-400">Core languages:</strong> Python, Go<br/>
            Work with deployment, monitoring, package management, distributed task scheduling, and file systems.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
            <span className="text-emerald-300 font-semibold">Prior experience is a plus, but not required!</span>
          </div>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {Object.entries(techCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.6 + categoryIndex * 0.2 }}
              className="text-center"
            >
              {/* Category Title */}
              <motion.h3
                className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
              >
                {category.title}
              </motion.h3>

              {/* Tech Icons Grid */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <TechIcon
                    key={tech}
                    tech={tech}
                    color={category.color}
                    delay={reducedMotion ? 0 : 0.8 + categoryIndex * 0.2 + techIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 1.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to work with these technologies?
            </h3>
            <p className="text-gray-400 text-sm">
              Join our team and master the latest tools in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}