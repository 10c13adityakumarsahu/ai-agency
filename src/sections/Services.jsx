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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 group hover:bg-electric-green hover:text-black transition-all duration-500 cursor-pointer"
        >
            <div className="mb-8 text-electric-green group-hover:text-black transition-colors">
                {service.icon}
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">
                {service.title}
            </h3>
            <p className="text-white/50 group-hover:text-black/70 text-sm uppercase leading-relaxed font-semibold transition-colors">
                {service.desc}
            </p>

            <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Zap className="w-3 h-3 fill-current" />
            </div>
        </motion.div>
    )
}

const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="block text-electric-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">Core Expertise</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            Hyper-Intelligent <br />
                            <span className="text-gradient">Solutions for Scale</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="max-w-xs text-white/40 text-[10px] uppercase font-bold tracking-widest leading-loose">
                            We leverage the latest advancements in machine learning and neural networks to build robust systems.
                        </p>
                    </div>
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
