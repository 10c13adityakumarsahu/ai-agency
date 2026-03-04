import { motion } from 'framer-motion'

const steps = [
    { num: "01", title: "Discover", desc: "Deep dive into your business logic and data infrastructure." },
    { num: "02", title: "Architect", desc: "Designing custom AI architectures tailored to your goals." },
    { num: "03", title: "Build", desc: "Rapid prototyping and rigorous system development." },
    { num: "04", title: "Train", desc: "Fine-tuning models on proprietary datasets for peak performance." },
    { num: "05", title: "Deploy", desc: "Seamless integration and continuous monitoring at scale." },
]

const Process = () => {
    return (
        <section id="process" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-32">
                    <span className="text-electric-green font-black uppercase tracking-[0.5em] text-[10px]">The Workflow</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mt-4">
                        Engineered <br />
                        <span className="text-gradient">For Velocity</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Main Track Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 hidden md:block" />

                    <div className="flex flex-col md:flex-row gap-12 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex-1 group"
                            >
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-0">
                                    <div className="md:mb-12 relative">
                                        {/* Circle Indicator */}
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-[#050505] group-hover:border-electric-green transition-colors relative z-10">
                                            <span className="font-black text-xs">{step.num}</span>
                                        </div>
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-electric-green blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-electric-green transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/40 text-[10px] md:text-xs uppercase font-bold leading-relaxed tracking-wider">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Racing Telemetry Aesthetic */}
                <div className="mt-32 border-t border-white/5 pt-8 flex gap-12 overflow-hidden justify-center opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-1 items-center">
                            <div className="w-px h-8 bg-white" />
                            <span className="text-[8px] font-mono">0{i}.{i}S</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
