import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'
import { Video, Users, MessageSquare, CheckCircle, Clock, ArrowRight } from 'lucide-react'

const interviewSteps = [
  {
    step: 1,
    icon: Video,
    title: 'Live Coding Session #1',
    duration: '1 - 1.5 hours',
    participants: 'Lead + Team Member',
    description: 'Technical coding interview with live problem-solving session',
    details: ['Algorithm and data structure problems', 'System design discussion', 'Code quality assessment'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    icon: Video,
    title: 'Live Coding Session #2',
    duration: '1 - 1.5 hours',
    participants: 'Lead + Team Member',
    description: 'Advanced technical interview focusing on infrastructure concepts',
    details: ['Distributed systems design', 'Infrastructure problem solving', 'Python/Go coding challenges'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 3,
    icon: MessageSquare,
    title: 'HR Interview',
    duration: '30 - 45 minutes',
    participants: 'HR Team',
    description: 'Cultural fit assessment and offer discussion',
    details: ['Background and experience review', 'Cultural alignment discussion', 'Compensation negotiation'],
    color: 'from-green-500 to-emerald-500'
  }
]

const interviewTips = [
  {
    icon: CheckCircle,
    title: 'Technical Preparation',
    tips: [
      'Review Python/Go fundamentals and best practices',
      'Practice distributed systems design patterns',
      'Understand infrastructure and deployment concepts',
      'Prepare examples of production systems you\'ve built'
    ]
  },
  {
    icon: Users,
    title: 'Communication Skills',
    tips: [
      'Practice explaining complex technical concepts clearly',
      'Prepare questions about team structure and collaboration',
      'Show enthusiasm for working with international teams',
      'Demonstrate problem-solving thought process'
    ]
  }
]

export function InterviewSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()

  return (
    <section
      ref={containerRef}
      id="interview"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-cyan-900/10" />

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
            className="h-1 bg-gradient-to-r from-violet-400 to-purple-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Interview{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Process
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our interview process consists of <strong className="text-purple-400">3 online technical rounds</strong> designed to assess your technical skills and cultural fit.
          </p>
        </motion.div>

        {/* Interview Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {interviewSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 0.2 + index * 0.2 
                }}
                className="group relative"
              >
                <motion.div
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 h-full"
                  whileHover={reducedMotion ? {} : { 
                    scale: 1.02, 
                    y: -8
                  }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg animate-pulse-glow`}
                    whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    {step.participants}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: reducedMotion ? 0.1 : 0.4, 
                          delay: reducedMotion ? 0 : 0.4 + index * 0.2 + detailIndex * 0.1 
                        }}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 animate-pulse" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Arrow connector (except last item) */}
                {index < interviewSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interview Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Interview{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Preparation Tips
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interviewTips.map((tipCategory, index) => (
              <motion.div
                key={tipCategory.title}
                initial={{ opacity: 0, y: 30 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.6, 
                  delay: reducedMotion ? 0 : 1.0 + index * 0.2 
                }}
                className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-violet-500/10 border border-purple-500/20 backdrop-blur-xl"
              >
                <div className="flex items-center mb-6">
                  <tipCategory.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-2xl font-bold text-white">{tipCategory.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {tipCategory.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30">
            <span className="text-violet-300 font-bold text-lg">
              🚀 Ready to showcase your infrastructure expertise? Let's get started!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}