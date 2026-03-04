import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const steps = [
    { num: "01", title: "Discover", desc: "Deep dive into your business logic and data infrastructure." },
    { num: "02", title: "Architect", desc: "Designing custom AI architectures tailored to your goals." },
    { num: "03", title: "Build", desc: "Rapid prototyping and rigorous system development." },
    { num: "04", title: "Train", desc: "Fine-tuning models on proprietary datasets for peak performance." },
    { num: "05", title: "Deploy", desc: "Seamless integration and continuous monitoring at scale." },
]

const Step = ({ step, index, scrollYProgress }) => {
    // Focal range for each step
    const start = index * 0.15
    const center = start + 0.1
    const end = center + 0.1

    const scale = useTransform(scrollYProgress, [start, center, end], [0.8, 1.35, 0.8])
    const opacity = useTransform(scrollYProgress, [start, center, end], [0.2, 1, 0.2])
    const y = useTransform(scrollYProgress, [start, center, end], [50, 0, -50])

    return (
        <motion.div
            style={{ scale, opacity, y }}
            className="flex-1 group"
        >
            <div className="flex flex-row md:flex-col items-center md:items-start gap-10 md:gap-0">
                <div className="md:mb-16 relative">
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-[#030303] group-hover:border-cyber-blue transition-colors relative z-10">
                        <span className="font-black text-2xl">{step.num}</span>
                    </div>
                    <div className="absolute inset-0 bg-cyber-blue blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>

                <div className="transform transition-all duration-700">
                    <h3 className="text-4xl font-black uppercase italic mb-8 group-hover:text-cyber-blue transition-colors tracking-tighter">
                        {step.title}
                    </h3>
                    <p className="text-white/30 text-[11px] md:text-base uppercase font-black leading-relaxed tracking-widest max-w-[250px] group-hover:text-white/60 transition-colors">
                        {step.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

const Process = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section id="process" ref={containerRef} className="py-80 relative overflow-hidden bg-obsidian">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="mb-64"
                >
                    <span className="text-cyber-blue font-black uppercase tracking-[1em] text-[11px] mb-12 block">Processing Architecture</span>
                    <h2 className="text-7xl md:text-[12rem] font-black uppercase italic tracking-tighter leading-[0.75] mt-4">
                        Neural <br />
                        <span className="text-gradient">Pipeline</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute top-12 left-0 w-full h-[1px] bg-white/5 hidden md:block" />
                    <motion.div
                        style={{ scaleX }}
                        className="absolute top-12 left-0 w-full h-[2px] bg-cyber-blue hidden md:block origin-left z-20 shadow-[0_0_30px_#00d2ff]"
                    />

                    <div className="flex flex-col md:flex-row gap-48 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <Step key={index} step={step} index={index} scrollYProgress={scrollYProgress} />
                        ))}
                    </div>
                </div>

                {/* Cybernetic Detail */}
                <div className="mt-80 grid grid-cols-2 md:grid-cols-4 gap-20 opacity-5">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-4 border-l border-white/20 pl-8">
                            <div className="h-1 bg-white/40 w-full" />
                            <span className="text-[10px] font-mono block">NODE_THETA_{i}</span>
                            <span className="text-[10px] font-mono block uppercase">Status_Nominal</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
