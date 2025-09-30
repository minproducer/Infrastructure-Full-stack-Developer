import { Box, Float, OrbitControls, Sphere, Torus } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useAppStore } from '../../lib/store'

function FloatingGeometry({ position, color, type = 'sphere' }: { 
  position: [number, number, number]
  color: string
  type?: 'sphere' | 'box' | 'torus'
}) {
  const geometry = () => {
    switch (type) {
      case 'box':
        return <Box args={[1, 1, 1]} />
      case 'torus':
        return <Torus args={[0.6, 0.2, 16, 32]} />
      default:
        return <Sphere args={[0.8, 32, 32]} />
    }
  }

  return (
    <Float
      position={position}
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh castShadow receiveShadow>
        {geometry()}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f5ff" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff0080" />

      {/* Floating Objects */}
      <FloatingGeometry position={[-4, 2, -3]} color="#00f5ff" type="sphere" />
      <FloatingGeometry position={[4, -2, -5]} color="#ff0080" type="box" />
      <FloatingGeometry position={[0, 3, -8]} color="#00ff88" type="torus" />
      <FloatingGeometry position={[-6, -3, -6]} color="#ffaa00" type="sphere" />
      <FloatingGeometry position={[6, 4, -4]} color="#aa00ff" type="box" />
      <FloatingGeometry position={[2, -4, -7]} color="#ff4400" type="torus" />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function ThreeDBackground() {
  const { enable3DEffects, performanceMode } = useAppStore()

  if (!enable3DEffects || performanceMode === 'low') {
    return null
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: performanceMode === 'high', alpha: true }}
        dpr={performanceMode === 'high' ? [1, 2] : 1}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}