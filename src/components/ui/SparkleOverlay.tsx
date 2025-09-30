import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  color: string
}

export function SparkleOverlay() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    // Generate initial sparkles
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 3,
          color: ['#60A5FA', '#A78BFA', '#34D399', '#FBBF24', '#F87171'][Math.floor(Math.random() * 5)]
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()

    // Regenerate sparkles periodically
    const interval = setInterval(generateSparkles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 3,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          >
            {/* Star shape using CSS */}
            <div
              className="relative"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: sparkle.color,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}