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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-8 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-electric-green blur-[2px] opacity-80" />
                    <span className="uppercase italic">AI AGENCY</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-electric-green transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-electric-green hover:scale-105 transition-all">
                        Start Project
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 p-12"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-3xl font-black uppercase italic hover:text-electric-green transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            className="mt-8 px-10 py-4 bg-electric-green text-black font-black uppercase italic tracking-widest"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
