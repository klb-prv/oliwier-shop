// src/components/AnimatedCube.jsx
'use client'
import { Canvas } from '@react-three/fiber'
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function AnimatedCube() {
  const mesh = useRef()
  return (
    <Canvas className="w-full h-64">
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <mesh ref={mesh} rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshWobbleMaterial
          color="#5E8FFF"
          speed={2}
          factor={0.6}
        />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
