import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Rocket } from 'lucide-react'

const CTA = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const y = useTransform(scrollYProgress, [0, 1], [100, 0])

    const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

    return (
        <section ref={containerRef} className="container mx-auto px-6 py-48">
            <motion.div
                style={{ scale: springScale, opacity }}
                className="relative overflow-hidden bg-cyber-blue p-20 md:p-48 flex flex-col items-center text-center group rounded-[3rem] md:rounded-[6rem] shadow-[0_0_100px_rgba(0,210,255,0.3)]"
            >
                {/* Background Patterns */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 invert pointer-events-none" />

                <motion.div
                    style={{ y }}
                    className="relative z-10"
                >
                    <div className="mb-20 relative flex justify-center">
                        <Rocket className="w-24 h-24 text-black animate-bounce relative z-10" />
                        <div className="absolute inset-0 bg-black/20 blur-[120px] scale-150 rounded-full" />
                    </div>

                    <h2 className="text-6xl md:text-[14rem] font-black uppercase italic tracking-[-0.05em] text-black leading-[0.8] mb-24 select-none">
                        Scale <br />
                        <span className="opacity-40">Beyond Limits</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                        <button className="px-20 py-10 bg-black text-white font-black uppercase italic tracking-[0.4em] transform hover:scale-110 active:scale-95 transition-all duration-700 text-2xl">
                            Deploy Now
                        </button>
                        <button className="px-20 py-10 border-[6px] border-black text-black font-black uppercase italic tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-700 text-2xl">
                            Tech Deck
                        </button>
                    </div>
                </motion.div>

                {/* Cyber Accents */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square border-[3px] border-black/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-15%] right-[-15%] w-[50%] aspect-square border-[3px] border-black/10 rounded-full"
                />
            </motion.div>
        </section>
    )
}

export default CTA
