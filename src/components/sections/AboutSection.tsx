import { motion } from 'framer-motion'
import { Code, Globe, Lightbulb, Rocket, Target, Users } from 'lucide-react'
import { useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'

const highlights = [
  {
    icon: Code,
    title: 'Infrastructure Development',
    description: 'Build and maintain backbone infrastructure for deployment, monitoring, and distributed systems.',
    badge: 'Core',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Singapore + Vietnam Teams',
    description: 'Work with ~100 Singapore engineers and ~15 Vietnam team members with international leadership.',
    badge: 'Global',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Developer Productivity Focus',
    description: 'Design elegant abstractions that significantly boost developer productivity and system stability.',
    badge: 'Impact',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Lightbulb,
    title: 'Python & Go Expertise',
    description: 'Work with core languages Python and Go, plus tools like Bazel, Ansible, and Nomad.',
    badge: 'Tech',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Rocket,
    title: 'Development-focused Role',
    description: 'This is NOT a support role - focus on building scalable distributed systems from scratch.',
    badge: 'Development',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'Collaborative Culture',
    description: 'Highly collaborative, non-hierarchical environment with exceptional ICPC and Olympiad winners.',
    badge: 'Culture',    
    color: 'from-teal-500 to-blue-500'
  }
]

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-purple-900/10" />

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
            animate={hasIntersected ? { width: 80 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 1, delay: reducedMotion ? 0 : 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            About The{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Role
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Join our team as an Infrastructure Full-stack Developer and help build the backbone of our modern distributed systems.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
            <span className="text-red-300 font-bold text-lg">🚨 Urgent Hiring - Apply ASAP!</span>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: reducedMotion ? 0.1 : 0.6, 
                delay: reducedMotion ? 0 : 0.1 + index * 0.1 
              }}
              className="group"
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 animate-float h-full"
                whileHover={reducedMotion ? {} : { 
                  scale: 1.05, 
                  y: -12,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(6, 182, 212, 0.3)"
                }}
              >
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${highlight.color} shadow-lg animate-pulse-glow`}
                    whileHover={reducedMotion ? {} : { scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="bg-white/10 text-white border border-white/20 text-xs px-3 py-1 rounded-full">
                    {highlight.badge}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: reducedMotion ? 0.1 : 0.8, 
            delay: reducedMotion ? 0 : 0.8 
          }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-300 mb-6">
              Join us in building revolutionary applications that will shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full text-sm">
                ✓ Remote Work
              </div>
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-sm">
                ✓ Competitive Salary
              </div>
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-full text-sm">
                ✓ Growth Opportunities
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}