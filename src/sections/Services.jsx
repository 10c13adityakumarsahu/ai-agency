import { motion } from 'framer-motion'
import { Cpu, Zap, Bot, Database, Globe, Layers } from 'lucide-react'

const serviceList = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI Product Development",
        desc: "End-to-end development of intelligent products from concept to scale."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "AI Automation",
        desc: "Streamlining operations through custom intelligent workflows."
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "AI Agents",
        desc: "Autonomous agents that perform complex tasks with human-like precision."
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "LLM Integration",
        desc: "Embedding state-of-the-art language models into your existing ecosystem."
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Data Intelligence",
        desc: "Turning raw data into actionable insights through predictive analytics."
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "AI SaaS Platforms",
        desc: "Scalable cloud-based AI solutions for multi-tenant environments."
    }
]

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="glass p-16 group hover:bg-cyber-blue hover:text-black transition-all duration-700 cursor-pointer relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-2 h-0 bg-black group-hover:h-full transition-all duration-700" />

            <div className="mb-16 text-cyber-blue group-hover:text-black transition-colors transform group-hover:scale-125 duration-700 origin-left">
                {service.icon}
            </div>
            <h3 className="text-4xl font-black uppercase italic mb-8 tracking-tighter leading-none">
                {service.title}
            </h3>
            <p className="text-white/40 group-hover:text-black/80 text-base uppercase leading-loose font-bold transition-colors">
                {service.desc}
            </p>

            <div className="mt-16 flex items-center gap-6 text-xs font-black uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-6 group-hover:translate-y-0">
                Establish Connection <Zap className="w-5 h-5 fill-current" />
            </div>
        </motion.div>
    )
}

const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl"
                    >
                        <span className="block text-electric-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">Core Expertise</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Hyper-Intelligent <br />
                            <span className="text-gradient">Solutions for Scale</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:block"
                    >
                        <p className="max-w-xs text-white/40 text-[10px] uppercase font-bold tracking-widest leading-loose text-right">
                            We leverage the latest advancements in machine learning and neural networks to build robust systems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {serviceList.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
