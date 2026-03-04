import { motion } from 'framer-motion'
import { Activity, Brain, Code, Cpu, Command, Box } from 'lucide-react'

const CAPABILITIES = [
    { icon: <Brain />, title: "Neural Networks" },
    { icon: <Activity />, title: "Predictive Engines" },
    { icon: <Code />, title: "LLM Orchestration" },
    { icon: <Cpu />, title: "Hardware AI" },
    { icon: <Command />, title: "Auto-Decisioning" },
    { icon: <Box />, title: "Data Silo Extraction" }
]

const Capabilities = () => {
    return (
        <section className="py-48 relative overflow-hidden bg-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-40">
                    <h2 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
                        Forging The <br />
                        <span className="text-gradient">Unknown</span>
                    </h2>
                    <p className="text-cyber-blue/40 uppercase font-black text-[11px] md:text-xs tracking-[1em]">Intelligence Matrix // 4.0</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
                    {CAPABILITIES.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="flex flex-col items-center group cursor-crosshair"
                        >
                            <div className="w-24 h-24 md:w-48 md:h-48 mb-10 border border-white/5 flex items-center justify-center relative group-hover:border-cyber-blue transition-all duration-700 bg-obsidian">
                                <div className="text-white/20 group-hover:text-cyber-blue transition-all transform group-hover:scale-125 duration-700 shadow-[0_0_30px_rgba(0,210,255,0)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                                    <div className="w-10 h-10 md:w-16 md:h-16">
                                        {cap.icon}
                                    </div>
                                </div>

                                {/* Corner markers */}
                                <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-cyber-blue transition-colors duration-700" />
                                <div className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-cyber-blue transition-colors duration-700" />
                                <div className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-cyber-blue transition-colors duration-700" />
                                <div className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-cyber-blue transition-colors duration-700" />

                                {/* Background glow */}
                                <div className="absolute inset-0 bg-cyber-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                            <span className="text-[11px] md:text-lg font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-all duration-700 transform group-hover:translate-y-2">
                                {cap.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Capabilities
