import { motion } from 'framer-motion'
import { Eye, Monitor, Settings, Zap } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '../../lib/store'

export function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    enable3DEffects,
    toggleEffects,
    enableParticles,
    toggleParticles,
    performanceMode,
    setPerformanceMode,
    reducedMotion,
    setReducedMotion,
  } = useAppStore()

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg rounded-full"
      >
        <Settings className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-20 right-6 z-50 p-6 bg-black/90 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-2xl max-w-sm"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Settings
          </h3>
          
          <div className="space-y-4">
            {/* Performance Mode */}
            <div>
              <label className="text-sm font-medium mb-2 block">Performance Mode</label>
              <div className="flex gap-2">
                {(['low', 'balanced', 'high'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPerformanceMode(mode)}
                    className={`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                      performanceMode === mode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {mode === 'low' && <Zap className="w-3 h-3 mr-1" />}
                    {mode === 'balanced' && <Monitor className="w-3 h-3 mr-1" />}
                    {mode === 'high' && <Eye className="w-3 h-3 mr-1" />}
                    {mode === 'low' ? 'Low' : mode === 'balanced' ? 'Balanced' : 'High'}
                  </button>
                ))}
              </div>
            </div>

            {/* Effects */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">3D Effects</span>
                <button
                  onClick={toggleEffects}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    enable3DEffects ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {enable3DEffects ? 'ON' : 'OFF'}
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Particles</span>
                <button
                  onClick={toggleParticles}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    enableParticles ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {enableParticles ? 'ON' : 'OFF'}
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Reduced Motion</span>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    reducedMotion ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {reducedMotion ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}