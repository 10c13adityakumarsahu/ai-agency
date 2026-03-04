import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5])
    const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(20px)"])

    return (
        <section ref={sectionRef} className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background with extreme zoom */}
            <motion.div
                style={{ scale, filter: blur }}
                className="fixed inset-0 z-0 pointer-events-none"
            >
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <StarField />
                </Canvas>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center h-screen flex flex-col items-center justify-center">
                <motion.div
                    style={{ y, opacity, scale: textScale }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: "1.5em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 2, delay: 0.2 }}
                        className="inline-block px-6 py-2 mb-10 glass rounded-full"
                    >
                        <span className="text-[10px] md:text-xs font-black uppercase text-cyber-blue shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                            Cognitive Supremacy
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-[14rem] font-black uppercase italic leading-[0.75] tracking-tight mb-16 select-none">
                        Forge <br />
                        <span className="text-gradient drop-shadow-[0_0_50px_rgba(0,210,255,0.2)]">The Future</span>
                    </h1>

                    <p className="max-w-2xl text-white/40 text-sm md:text-2xl mb-16 leading-relaxed uppercase tracking-[0.2em] font-medium">
                        Autonomous architectures for <br /> global scale digital dominance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <button className="group relative px-16 py-8 bg-white text-black font-black uppercase italic tracking-widest overflow-hidden transition-all duration-700 hover:scale-110 active:scale-95">
                            <span className="relative z-10">Initiate Launch</span>
                            <div className="absolute inset-0 bg-cyber-blue translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                        </button>
                        <button className="px-16 py-8 glass border border-white/10 text-white font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all duration-700 hover:scale-110">
                            Neural Labs
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator with Pulse */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
            >
                <div className="text-[11px] uppercase tracking-[1em] font-black text-cyber-blue/60 animate-pulse">Engage Scroll</div>
                <div className="w-[2px] h-32 bg-white/5 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [-128, 128] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-cyber-blue to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
