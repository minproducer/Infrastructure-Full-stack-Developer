import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { smoothScrollTo } from '../../lib/utils'

const navigationItems = [
  { id: 'landing', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'team', label: 'Team' },
  { id: 'responsibilities', label: 'Responsibilities' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'interview', label: 'Interview' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('landing')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId)
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 
            ? 'bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/50' 
            : 'bg-gradient-to-b from-black/20 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo('landing')}
            >
              <div className="flex items-center space-x-3">
                {/* IT Logo */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex items-center justify-center shadow-lg">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 opacity-50 blur-sm animate-pulse-glow"></div>
                </div>
                {/* Company Name */}
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    IT Jobs
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Infrastructure Team</div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'text-cyan-300 bg-white/10 backdrop-blur-sm border border-cyan-400/30'
                        : 'text-white/80 hover:text-white hover:bg-white/5 hover:backdrop-blur-sm'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Apply Now Button - Desktop */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => handleNavClick('contact')}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-cyan-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Sidebar Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-72 max-w-[85vw] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent truncate">
                      IT Jobs
                    </div>
                    <div className="text-xs text-gray-400">Navigation</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <div className="p-4 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Apply Now Button - Mobile */}
              <div className="p-4 border-t border-white/10 flex-shrink-0">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => handleNavClick('contact')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                >
                  🚀 Apply Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </motion.nav>
    </>
  )
}