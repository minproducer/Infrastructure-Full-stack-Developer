import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useAppStore } from '../../lib/store'

export function ReadingProgressBar() {
  const { readingProgress, setReadingProgress } = useAppStore()

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      
      setReadingProgress(Math.min(Math.max(progress, 0), 100))
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [setReadingProgress])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${readingProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 animate-pulse" />
    </div>
  )
}