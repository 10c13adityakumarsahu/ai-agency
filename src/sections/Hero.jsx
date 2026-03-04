import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function StarField() {
    const ref = useRef()
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 })

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00ff41"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <StarField />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full">
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-electric-green">
                            Vanguard of Intelligence
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
                        Building The <br />
                        <span className="text-gradient">Future With AI</span>
                    </h1>

                    <p className="max-w-xl text-white/50 text-sm md:text-lg mb-10 leading-relaxed uppercase tracking-wide font-medium">
                        We design AI systems, automation tools, and intelligent digital products that scale businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-10 py-5 bg-white text-black font-black uppercase italic tracking-widest hover:bg-electric-green transition-colors flex items-center gap-2">
                            View Work
                        </button>
                        <button className="px-10 py-5 glass border border-white/20 text-white font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-colors">
                            Start a Project
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Hero Bottom Elements */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <div className="w-px h-24 bg-gradient-to-t from-electric-green to-transparent opacity-50" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Scroll to Explore</span>
            </div>
        </section>
    )
}

export default Hero
