import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1.1, 1.5])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
    const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="group relative h-[80vh] md:h-[100vh] w-full overflow-hidden bg-obsidian rounded-[3rem] border border-white/5"
        >
            <motion.img
                style={{ y, scale }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-[150%] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/90" />

            <motion.div
                style={{ y: textY }}
                className="absolute bottom-20 left-20 right-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
            >
                <div className="transform group-hover:-translate-y-6 transition-transform duration-1000 ease-out">
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-cyber-blue font-black uppercase tracking-[0.6em] text-[11px] block mb-6 shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                    >
                        {project.category}
                    </motion.span>
                    <h3 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] drop-shadow-3xl">
                        {project.title}
                    </h3>
                </div>
                <button className="relative w-32 h-32 rounded-full bg-white text-black flex items-center justify-center overflow-hidden transition-all duration-700 hover:scale-125 active:scale-90 group-hover:bg-cyber-blue shadow-2xl">
                    <ArrowUpRight className="w-12 h-12 relative z-10" />
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                    <ArrowUpRight className="w-12 h-12 absolute z-20 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                </button>
            </motion.div>

            {/* Top Info Bar */}
            <div className="absolute top-16 left-20 right-20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="flex items-center gap-6">
                    <div className="w-3 h-3 rounded-full bg-cyber-blue animate-ping" />
                    <span className="text-[11px] font-black tracking-widest uppercase text-cyber-blue/60">Node Active</span>
                </div>
                <span className="text-[11px] font-black tracking-widest uppercase text-white/40">Sequence // 0{index + 1}</span>
            </div>
        </motion.div>
    )
}

const CaseStudies = () => {
    return (
        <section id="work" className="py-48 bg-obsidian">
            <div className="container mx-auto px-6">
                <div className="mb-40">
                    <span className="block text-white/20 text-[11px] font-black uppercase tracking-[1em] mb-8">Selected Intelligence</span>
                    <h2 className="text-6xl md:text-[12rem] font-black uppercase italic tracking-tighter leading-[0.75]">
                        Global <br />
                        <span className="text-gradient">Deployments</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-48">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
