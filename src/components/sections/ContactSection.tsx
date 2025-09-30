import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, Star, Users } from 'lucide-react'
import { useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useScroll'
import { useAppStore } from '../../lib/store'

const contactMethods = [
  {
    icon: Mail,
    title: 'Facebook Messenger',
    description: 'Send us a message via Facebook Messenger for quick response',
    action: 'Message Now',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Zalo',
    description: 'Contact us via Zalo for instant messaging',
    action: 'zalo.me/0974597614',
    subtext: '(HM Travel)',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    description: 'Reach out through WhatsApp for global communication',
    action: '+84 974 597 614',
    color: 'from-purple-500 to-pink-500'
  }
]

const quickFacts = [
  {
    icon: MapPin,
    title: 'Location',
    value: 'Vietnam (Remote)',
    description: 'Work with Singapore team remotely'
  },
  {
    icon: Clock,
    title: 'Timeline',
    value: 'Quick Process',
    description: '3 interview rounds, fast decision'
  },
  {
    icon: Users,
    title: 'Team Size',
    value: '115+ Engineers',
    description: 'Singapore + Vietnam teams'
  },
  {
    icon: Star,
    title: 'Experience',
    value: 'Middle Level',
    description: '2-5 years development experience'
  }
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(containerRef as React.RefObject<Element>, { threshold: 0.2 })
  const { reducedMotion } = useAppStore()
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  const handleContactClick = (method: string, action: string) => {
    switch (method) {
      case 'Zalo':
        window.open('https://zalo.me/0974597614', '_blank')
        break
      case 'WhatsApp':
        window.open(`https://wa.me/${action.replace(/[\s+]/g, '')}`, '_blank')
        break
      case 'Facebook Messenger':
        window.open('https://m.me/minproducer.fb', '_blank')
        break
      default:
        break
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-purple-900/10" />

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
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Contact &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Apply
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to join our infrastructure team? Get in touch with us through any of these channels.
          </p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: reducedMotion ? 0 : 0.4 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-12"
          >
            <Send className="w-6 h-6 text-emerald-400 mr-3" />
            <span className="text-emerald-300 font-bold text-lg">
              We'd love to hear from you! Apply now for the Infrastructure Full-stack Developer position.
            </span>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: reducedMotion ? 0.1 : 0.6, 
                delay: reducedMotion ? 0 : 0.2 + index * 0.1 
              }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
              onClick={() => handleContactClick(method.title, method.action)}
            >
              <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 h-full text-center"
                whileHover={reducedMotion ? {} : { 
                  scale: 1.05, 
                  y: -12,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.6)"
                }}
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-glow`}
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                >
                  <method.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>
                
                {/* Action */}
                <div className="space-y-2">
                  <div className={`text-xl font-bold transition-colors duration-300 ${
                    hoveredContact === index ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {method.action}
                  </div>
                  {method.subtext && (
                    <div className="text-sm text-gray-400">{method.subtext}</div>
                  )}
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredContact === index ? 1 : 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Quick{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Facts
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.5, 
                  delay: reducedMotion ? 0 : 0.8 + index * 0.1 
                }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
              >
                <fact.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">{fact.value}</div>
                <div className="text-sm font-semibold text-gray-300 mb-2">{fact.title}</div>
                <div className="text-xs text-gray-400">{fact.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vietnamese CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.9 }}
          className="mb-12 text-center"
        >
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              📄 Vietnamese CV Available
            </h4>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              For Vietnamese speakers, you can view our detailed CV and work experience in Vietnamese.
            </p>
            <motion.a
              href="https://docs.google.com/document/d/e/2PACX-1vT8RmQYORRe6Cuyux_J2KrIR3Ig8Gpp0XqAF93QOTkbQrxn79pOifjaEUjF0o9Tp_xJkAzgcsay3Y-Y/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🇻🇳</span>
              View Vietnamese CV
              <Send className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 1.0 }}
          className="text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Shape the Future of Infrastructure? 🚀
            </h4>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join our team of exceptional engineers and build systems that power the next generation of applications. 
              Your expertise in Python, Go, and distributed systems will make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-cyan-400 font-semibold">Don't wait -</span>
              <span className="text-white font-bold">Apply today and let's build amazing things together!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}