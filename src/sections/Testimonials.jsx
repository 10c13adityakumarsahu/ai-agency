import { motion } from 'framer-motion'

const testimonials = [
    {
        quote: "The AI systems developed by this agency transformed our data workflow. Velocity and precision are unmatched.",
        author: "Jameson Hunt",
        company: "Apex Tech",
    },
    {
        quote: "A rare team that understands both the deep science of LLMs and the nuances of product design.",
        author: "Elena Soros",
        company: "Neuralis",
    },
    {
        quote: "Futuristic vision combined with rapid execution. They are our go-to partner for all AI initiatives.",
        author: "Marcus Chen",
        company: "Synthetix",
    },
    {
        quote: "Their autonomous agents saved us thousands of man-hours. Truly a world-class engineering team.",
        author: "Sarah West",
        company: "Orbit AI",
    }
]

const Testimonials = () => {
    return (
        <section className="py-32 overflow-hidden bg-black/50">
            <div className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Validation</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mt-4">
                        Trusted By <span className="text-gradient">Industry Leaders</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex relative items-center">
                {/* Infinite scroll track - CSS only for high performance */}
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="glass p-12 min-w-[350px] md:min-w-[500px] flex flex-col justify-between"
                        >
                            <p className="text-xl md:text-2xl font-black italic uppercase leading-tight mb-12 text-white/80">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-black uppercase tracking-widest text-sm text-electric-green">{t.author}</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{t.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
        </section>
    )
}

export default Testimonials
