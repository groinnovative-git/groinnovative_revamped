import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReduced(mq.matches)
        const handler = (e) => setReduced(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])
    return reduced
}

function CoreOrb({ paused }) {
    const ref = useRef()
    useFrame(() => {
        if (paused || !ref.current) return
        ref.current.rotation.y += 0.003
        ref.current.rotation.x += 0.001
    })
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshStandardMaterial
                color="#10B981"
                emissive="#059669"
                emissiveIntensity={0.6}
                roughness={0.3}
                metalness={0.8}
            />
        </mesh>
    )
}

function WireShell({ paused }) {
    const ref = useRef()
    useFrame(() => {
        if (paused || !ref.current) return
        ref.current.rotation.y -= 0.004
        ref.current.rotation.z += 0.002
    })
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1.5, 14, 14]} />
            <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.13} />
        </mesh>
    )
}

function OrbitRing({ radius, tube, rotOffset, speed, paused }) {
    const ref = useRef()
    useFrame(() => {
        if (paused || !ref.current) return
        ref.current.rotation.z += speed
    })
    return (
        <mesh ref={ref} rotation={rotOffset}>
            <torusGeometry args={[radius, tube, 8, 80]} />
            <meshBasicMaterial color="#10B981" transparent opacity={0.35} />
        </mesh>
    )
}

function Particles({ paused }) {
    const ref = useRef()
    const COUNT = 80
    const positions = useMemo(() => {
        const arr = new Float32Array(COUNT * 3)
        for (let i = 0; i < COUNT; i++) {
            const θ = Math.random() * Math.PI * 2
            const φ = Math.acos(2 * Math.random() - 1)
            const r = 2.1 + Math.random() * 0.7
            arr[i * 3 + 0] = r * Math.sin(φ) * Math.cos(θ)
            arr[i * 3 + 1] = r * Math.sin(φ) * Math.sin(θ)
            arr[i * 3 + 2] = r * Math.cos(φ)
        }
        return arr
    }, [])
    useFrame(() => {
        if (paused || !ref.current) return
        ref.current.rotation.y += 0.002
        ref.current.rotation.x += 0.0005
    })
    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial color="#10B981" size={0.04} transparent opacity={0.8} sizeAttenuation />
        </points>
    )
}

function Scene({ paused }) {
    return (
        <>
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 3]} intensity={3} color="#10B981" />
            <pointLight position={[3, 3, 0]} intensity={1} color="#059669" />
            <CoreOrb paused={paused} />
            <WireShell paused={paused} />
            <OrbitRing radius={1.9} tube={0.008} rotOffset={[Math.PI / 2, 0, 0]} speed={0.006} paused={paused} />
            <OrbitRing radius={2.15} tube={0.006} rotOffset={[Math.PI / 4, 0, Math.PI / 6]} speed={-0.004} paused={paused} />
            <OrbitRing radius={1.7} tube={0.007} rotOffset={[0, Math.PI / 3, Math.PI / 4]} speed={0.003} paused={paused} />
            <Particles paused={paused} />
        </>
    )
}

export default function ServicesHero3D() {
    const reduced = usePrefersReducedMotion()
    return (
        <div className="services-hero-3d">
            <div className="services-hero-3d-glow" />
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <Scene paused={reduced} />
            </Canvas>
        </div>
    )
}
