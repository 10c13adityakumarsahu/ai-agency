import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Team', href: '#team' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/5' : 'py-10 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="/" className="text-3xl font-black tracking-tighter flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-cyber-blue blur-[10px] opacity-20 group-hover:opacity-100 transition-opacity" />
                    <div className="w-6 h-6 rounded-full bg-cyber-blue absolute left-6 border-4 border-black group-hover:scale-125 transition-transform" />
                    <span className="uppercase italic tracking-[-0.05em]">AI AGENCY</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-black text-white/40 hover:text-cyber-blue transition-all uppercase tracking-[0.4em] relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyber-blue group-hover:w-full transition-all duration-500" />
                        </a>
                    ))}
                    <button className="px-10 py-4 bg-cyber-blue text-black text-xs font-black uppercase italic tracking-[0.2em] shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-500">
                        Join Network
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cyber-blue"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 w-full h-screen bg-obsidian/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-16 p-12 z-[60]"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-5xl font-black uppercase italic tracking-tighter hover:text-cyber-blue transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            className="mt-12 px-16 py-8 bg-cyber-blue text-black font-black uppercase italic tracking-[0.3em] text-xl shadow-[0_0_50px_rgba(0,210,255,0.4)]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Initiate
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
