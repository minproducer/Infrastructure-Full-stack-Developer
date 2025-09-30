import { Suspense, lazy } from 'react'
import { LandingSection } from './components/sections'
import {
  CursorGlow,
  Navigation,
  PerformanceMonitor,
  ReadingProgressBar,
  ReadingTimeEstimator,
  SettingsPanel,
  SparkleOverlay
} from './components/ui'

// Lazy load heavy sections
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })))
const TechStackSection = lazy(() => import('./components/sections/TechStackSection').then(m => ({ default: m.TechStackSection })))
const TeamSection = lazy(() => import('./components/sections/TeamSection').then(m => ({ default: m.TeamSection })))
const ResponsibilitiesSection = lazy(() => import('./components/sections/ResponsibilitiesSection').then(m => ({ default: m.ResponsibilitiesSection })))
const RequirementsSection = lazy(() => import('./components/sections/RequirementsSection').then(m => ({ default: m.RequirementsSection })))
const BenefitsSection = lazy(() => import('./components/sections/BenefitsSection').then(m => ({ default: m.BenefitsSection })))
const InterviewSection = lazy(() => import('./components/sections/InterviewSection').then(m => ({ default: m.InterviewSection })))
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(m => ({ default: m.ContactSection })))

// Lazy load heavy 3D components
const ThreeDBackground = lazy(() => import('./components/ui/ThreeDBackground').then(m => ({ default: m.ThreeDBackground })))
const ParticleNetwork = lazy(() => import('./components/ui/ParticleNetwork').then(m => ({ default: m.ParticleNetwork })))

function App() {
  return (
    <div 
      className="min-h-screen bg-black text-white overflow-x-hidden"
      data-theme="dark"
    >
      <PerformanceMonitor />
      <ReadingProgressBar />
      
      {/* Lazy load 3D components */}
      <Suspense fallback={null}>
        <ThreeDBackground />
      </Suspense>
      
      <Suspense fallback={null}>
        <ParticleNetwork />
      </Suspense>
      
      <CursorGlow />
      <SparkleOverlay />
      <Navigation />
      <SettingsPanel />
      <ReadingTimeEstimator />
      
      <main>
        <Suspense fallback={<div className="h-screen bg-slate-900 animate-pulse" />}>
          <LandingSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <TechStackSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <TeamSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <ResponsibilitiesSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <RequirementsSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <BenefitsSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <InterviewSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-slate-900/50 animate-pulse rounded-3xl mx-4 mb-8" />}>
          <ContactSection />
        </Suspense>
      </main>
    </div>
  )
}

export default App
