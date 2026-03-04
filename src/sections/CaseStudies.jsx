import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: "NeuroCore",
        category: "Autonomous Agents",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
        color: "#00ff41"
    },
    {
        title: "Zenith AI",
        category: "Predictive Analytics",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4638ef7ab?auto=format&fit=crop&q=80&w=1600",
        color: "#bc13fe"
    },
    {
        title: "Velocity",
        category: "F1 Telemetry Engine",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600",
        color: "#ff8c00"
    }
]

const CaseStudies = () => {
    return (
        <section id="work" className="py-32 bg-[#080808]">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <span className="block text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Selected Work</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                        Impact <span className="text-gradient">By Design</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative h-[60vh] md:h-[80vh] w-full overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />

                            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                                <div>
                                    <span className="text-electric-green font-black uppercase tracking-[0.3em] text-[10px] block mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                                        {project.title}
                                    </h3>
                                </div>
                                <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-electric-green transition-colors">
                                    <ArrowUpRight className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute top-12 left-12 right-12 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
