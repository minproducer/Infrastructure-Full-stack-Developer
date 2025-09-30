import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useAppStore } from '../../lib/store'
import { smoothScrollTo } from '../../lib/utils'

export function LandingSection() {
  const { reducedMotion } = useAppStore()

  const handleApplyClick = () => {
    smoothScrollTo('contact')
  }
  
  const handleLearnMoreClick = () => {
    smoothScrollTo('about')
  }

  return (
    <section
      id="landing"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating orbs with enhanced effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${
              i % 3 === 0 ? 'w-72 h-72 bg-gradient-to-r from-blue-500/30 via-cyan-400/25 to-purple-500/20' :
              i % 3 === 1 ? 'w-48 h-48 bg-gradient-to-r from-purple-500/25 via-pink-400/20 to-red-500/15' :
              'w-32 h-32 bg-gradient-to-r from-green-500/20 via-emerald-400/15 to-teal-500/10'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              filter: 'blur(40px)',
            }}
            animate={reducedMotion ? {} : {
              y: [0, -40, 10, -20, 0],
              x: [0, 30, -15, 25, 0],
              scale: [1, 1.4, 0.8, 1.2, 1],
              rotate: [0, 120, 240, 360],
              opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full">
            <Sparkles className="w-4 h-4 mr-2" />
Now Hiring • Remote • Full-time
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight"
        >
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
Infrastructure Full-stack
          </span>
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Developer (Middle)
          </span>
        </motion.h1>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
          <span className="text-emerald-300 font-semibold">Development-focused Position</span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 max-w-xs animate-pulse-glow"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Build and maintain the backbone infrastructure that empowers our software developers and engineering teams. 
          Design elegant abstractions to boost system stability and developer productivity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            onClick={handleApplyClick}
            className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-full overflow-hidden group shadow-2xl animate-gradient animate-pulse-glow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-lg font-black tracking-wide animate-glow">🚀 Apply Now</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            onClick={handleLearnMoreClick}
            className="px-10 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all shadow-xl animate-float"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-bold tracking-wide animate-sparkle">📖 Learn More</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => smoothScrollTo('about')}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingSection