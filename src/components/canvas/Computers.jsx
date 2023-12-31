import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf')

  // wait model loading completed, jump anchor point
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView()
          clearInterval(timer)
        }
        if (Date.now() - startTime > 3000) clearInterval(timer)
      }, 100)
    }
  }, [])

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position={[-0.5, 4, 10]}
        angle={0.05}
        penumbra={2}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.7} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, -0.2, -0.05]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  useGLTF.preload('/desktop_pc/scene.gltf')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
