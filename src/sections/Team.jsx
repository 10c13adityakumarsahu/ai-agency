import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const team = [
    { name: "S. K. R.", role: "Lead Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "A. Jenkins", role: "AI Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { name: "M. Voss", role: "Product Des", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" }
]

const TeamMember = ({ member, index }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 1.3])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="relative aspect-[3/4] overflow-hidden group bg-white/5 rounded-2xl"
        >
            <motion.img
                style={{ scale }}
                src={member.img}
                className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
                alt={member.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-10 left-10 transform group-hover:-translate-y-4 transition-transform duration-700">
                <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{member.name}</h4>
                <p className="text-cyber-blue text-[11px] font-black uppercase tracking-[0.4em]">{member.role}</p>
            </div>

            {/* Scanning line animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity">
                <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1 bg-cyber-blue blur-[2px]"
                />
            </div>
        </motion.div>
    )
}

const Team = () => {
    return (
        <section id="team" className="py-48 bg-[#030303] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-end mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <h2 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
                            Master <br />
                            <span className="text-gradient">Architects.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-1/3"
                    >
                        <p className="text-white/30 uppercase font-black text-xs md:text-sm tracking-[0.4em] leading-relaxed">
                            A collective of elite engineers pushing the boundaries of neural computation and high-speed delivery.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <TeamMember key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
