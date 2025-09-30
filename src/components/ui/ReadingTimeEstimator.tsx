import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ReadingTimeEstimator() {
  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    const calculateReadingTime = () => {
      const textContent = document.body.innerText || document.body.textContent || ''
      const wordsPerMinute = 250 // Standard English reading speed
      const wordCount = textContent.trim().split(/\s+/).length
      const time = Math.ceil(wordCount / wordsPerMinute)
      setReadingTime(time)
    }

    // Calculate after content loads
    const timer = setTimeout(calculateReadingTime, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (readingTime === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-50 px-4 py-3 bg-black/80 backdrop-blur-xl border border-white/20 text-white rounded-xl shadow-2xl"
    >
      <div className="flex items-center space-x-2 text-sm">
        <Clock className="w-4 h-4 text-cyan-400" />
        <span className="text-gray-300">
          Estimated reading time:
        </span>
        <span className="font-bold text-cyan-300">
          {readingTime} min
        </span>
      </div>
    </motion.div>
  )
}