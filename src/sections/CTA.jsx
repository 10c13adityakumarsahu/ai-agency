import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

const CTA = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="relative overflow-hidden bg-electric-green p-12 md:p-24 flex flex-col items-center text-center group">
                {/* Background Patterns */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 invert" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <Rocket className="w-16 h-16 text-black mb-8 animate-bounce" />
                    <h2 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter text-black leading-none mb-12">
                        Let's Build <br />
                        Your AI System
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-black text-white font-black uppercase italic tracking-[0.2em] hover:scale-105 transition-transform">
                            Book a Call
                        </button>
                        <button className="px-12 py-6 border-2 border-black text-black font-black uppercase italic tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                            Start Project
                        </button>
                    </div>
                </motion.div>

                {/* Floating Accents */}
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-black/10 rounded-full animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-black/10 rounded-full animate-pulse decoration-delay-500" />
            </div>
        </section>
    )
}

export default CTA
