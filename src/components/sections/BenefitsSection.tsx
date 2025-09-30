import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'
import { DollarSign, Clock, Shield, TrendingUp, Home, Gift, Users, Globe } from 'lucide-react'

const salaryInfo = {
  range: '$1,800 – $3,000',
  type: 'NET/Gross',
  note: 'Higher package available for exceptional candidates',
  workingHours: 'Mon–Fri, 9:00–19:00 (2-hour lunch break)',
  flexibility: 'Flexible working time, no overtime required'
}

const benefits = [
  {
    icon: DollarSign,
    title: '100% Salary During Probation',
    description: 'Full salary from day one, no reduced probation period pay',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Premium Health Insurance',
    description: 'Bảo Việt Gold Card coverage for comprehensive healthcare',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Gift,
    title: '13th Month Salary Bonus',
    description: 'Annual bonus equivalent to one month salary',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Annual Salary Review',
    description: 'Yearly performance-based salary adjustments',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Home,
    title: 'Remote Working',
    description: '1 remote working day per month for work-life balance',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Team Building Activities',
    description: 'Company trips and team-building events throughout the year',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Full Insurance Contribution',
    description: 'Full salary applied for social insurance contribution',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Globe,
    title: 'International Collaboration',
    description: 'Work directly with teams in Singapore and globally',
    color: 'from-rose-500 to-pink-500'
  }
]

export function BenefitsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="benefits"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-blue-900/10" />

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
            animate={hasIntersected ? { width: 160 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 1, delay: reducedMotion ? 0 : 0.3 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-green-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Compensation &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent animate-gradient">
              Benefits
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Competitive compensation package with comprehensive benefits designed for your success and well-being.
          </p>
        </motion.div>

        {/* Salary Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: reducedMotion ? 0 : 0.2 }}
          className="mb-16"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-12 h-12 text-emerald-400 mr-3" />
                <div>
                  <h3 className="text-5xl font-black text-white">{salaryInfo.range}</h3>
                  <p className="text-lg text-emerald-300 font-semibold">{salaryInfo.type}</p>
                </div>
              </div>
              
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
                <span className="text-yellow-300 font-bold">💎 {salaryInfo.note}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">{salaryInfo.workingHours}</span>
                </div>
                <div className="flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Home className="w-6 h-6 text-teal-400 mr-3" />
                  <span className="text-gray-300">{salaryInfo.flexibility}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Benefits Package
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 0.6 + index * 0.1 
                }}
                className="group"
              >
                <motion.div
                  className="relative p-6 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 h-full text-center"
                  whileHover={reducedMotion ? {} : { 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.6)"
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-glow`}
                    whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white mb-3 leading-tight">
                    {benefit.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <span className="text-green-300 font-bold text-lg">
              🎯 Join us for competitive compensation and exceptional growth opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}