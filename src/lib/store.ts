import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AppState {
  // Reading Progress
  readingProgress: number
  setReadingProgress: (progress: number) => void
  
  // 3D Effects
  enable3DEffects: boolean
  toggleEffects: () => void
  
  // Performance
  reducedMotion: boolean
  setReducedMotion: (value: boolean) => void
  
  // Animation preferences
  enableParticles: boolean
  toggleParticles: () => void
  
  // Performance monitoring
  performanceMode: 'high' | 'balanced' | 'low'
  setPerformanceMode: (mode: 'high' | 'balanced' | 'low') => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Reading Progress
      readingProgress: 0,
      setReadingProgress: (progress: number) => set({ readingProgress: progress }),
      
      // 3D Effects
      enable3DEffects: true,
      toggleEffects: () => set((state) => ({ enable3DEffects: !state.enable3DEffects })),
      
      // Performance
      reducedMotion: false,
      setReducedMotion: (value: boolean) => set({ reducedMotion: value }),
      
      // Animation preferences
      enableParticles: true,
      toggleParticles: () => set((state) => ({ enableParticles: !state.enableParticles })),
      
      // Performance monitoring
      performanceMode: 'high',
      setPerformanceMode: (mode: 'high' | 'balanced' | 'low') => set({ performanceMode: mode }),
    }),
    {
      name: 'jd-app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        enable3DEffects: state.enable3DEffects,
        reducedMotion: state.reducedMotion,
        enableParticles: state.enableParticles,
        performanceMode: state.performanceMode,
      }),
    }
  )
)