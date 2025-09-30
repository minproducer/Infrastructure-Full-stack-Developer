import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fullstackdevInfrastructure/',
  
  build: {
    // Increase chunk size warning limit to 1MB
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core - keep small and separate
          if (id.includes('react') && !id.includes('react-three')) {
            return 'react-vendor'
          }
          
          // Animation libraries - separate chunk for performance
          if (id.includes('framer-motion')) {
            return 'animation-vendor'
          }
          
          // 3D libraries - largest chunk, load separately
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor'
          }
          
          // UI libraries - moderate size
          if (id.includes('lucide-react') || id.includes('@radix-ui')) {
            return 'ui-vendor'
          }
          
          // Utils - small utilities
          if (id.includes('zustand') || id.includes('clsx') || 
              id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils-vendor'
          }
          
          // Other node modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    
    // Basic optimizations
    target: 'esnext',
    sourcemap: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      'zustand'
    ]
  }
})
