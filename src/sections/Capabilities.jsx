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
        <section className="py-32 relative overflow-hidden bg-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-4">
                        Forging The <span className="text-gradient">Unknown</span>
                    </h2>
                    <p className="text-white/40 uppercase font-black text-xs tracking-[0.5em]">Capabilities Matrix</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {CAPABILITIES.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center group cursor-crosshair"
                        >
                            <div className="w-20 h-20 md:w-32 md:h-32 mb-6 border border-white/10 flex items-center justify-center relative group-hover:border-electric-green transition-colors">
                                <div className="text-white/50 group-hover:text-electric-green transition-colors transform group-hover:scale-110 transition-transform duration-500">
                                    {cap.icon}
                                </div>

                                {/* Corner markers */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-electric-green" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-electric-green" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-electric-green" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-electric-green" />
                            </div>
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white/60 group-hover:text-white">
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
