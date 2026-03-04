import { motion } from 'framer-motion'

const team = [
    { name: "S. K. R.", role: "Lead Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "A. Jenkins", role: "AI Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { name: "M. Voss", role: "Product Des", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" }
]

const Team = () => {
    return (
        <section id="team" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-end mb-32">
                    <div className="flex-1">
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">
                            AI Engineers. <br />
                            Product Thinkers. <br />
                            <span className="text-gradient">Builders.</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/3">
                        <p className="text-white/40 uppercase font-black text-xs tracking-[0.3em] leading-loose">
                            Our team consists of specialists who bridge the gap between complex research and scalable products.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden group"
                        >
                            <img
                                src={member.img}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                alt={member.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />

                            <div className="absolute bottom-8 left-8">
                                <h4 className="text-2xl font-black uppercase italic tracking-tighter">{member.name}</h4>
                                <p className="text-electric-green text-[10px] font-black uppercase tracking-[0.3em]">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
