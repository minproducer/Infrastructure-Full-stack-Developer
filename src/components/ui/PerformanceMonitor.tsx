import { useEffect } from 'react'
import { useAppStore } from '../../lib/store'

// Extend Navigator interface for device capabilities
interface ExtendedNavigator extends Navigator {
  deviceMemory?: number
  connection?: {
    effectiveType?: '2g' | '3g' | '4g' | 'slow-2g' | string
    addEventListener: (event: string, handler: () => void) => void
    removeEventListener: (event: string, handler: () => void) => void
  }
}

// Safe navigator access using proper type assertions
function getNavigatorFeatures() {
  // Using 'unknown' first to avoid direct 'any' usage - this is TypeScript best practice
  const nav = navigator as unknown as ExtendedNavigator
  return {
    deviceMemory: nav.deviceMemory,
    connection: nav.connection,
    hardwareConcurrency: nav.hardwareConcurrency
  }
}

export function PerformanceMonitor() {
  const { setPerformanceMode } = useAppStore()

  useEffect(() => {
    // Monitor device performance and adjust settings
    const checkPerformance = () => {
      // Safe navigator features access
      const { deviceMemory: memory, connection, hardwareConcurrency: cores } = getNavigatorFeatures()
      
      // Note: Using getNavigatorFeatures() to avoid 'any' type assertions
      
      let performanceMode: 'high' | 'balanced' | 'low' = 'high'
      
      // Determine performance mode based on device capabilities
      if (memory && memory < 4) {
        performanceMode = 'low'
      } else if (cores && cores < 4) {
        performanceMode = 'balanced'
      } else if (connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g')) {
        performanceMode = 'balanced'
      }
      
      setPerformanceMode(performanceMode)
      
      // Log performance mode for debugging
      if (import.meta.env.DEV) {
        console.log(`Performance mode set to: ${performanceMode}`, {
          memory,
          cores,
          connection: connection?.effectiveType
        })
      }
    }

    // Check performance on mount
    checkPerformance()
    
    // Listen for connection changes
    const { connection } = getNavigatorFeatures()
    if (connection) {
      connection.addEventListener('change', checkPerformance)
      return () => connection.removeEventListener('change', checkPerformance)
    }
  }, [setPerformanceMode])

  return null // This component doesn't render anything
}