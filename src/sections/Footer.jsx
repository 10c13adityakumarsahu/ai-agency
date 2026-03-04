const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#030303]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2">
                        <a href="/" className="text-3xl font-black tracking-tighter uppercase italic block mb-8">
                            AI AGENCY
                        </a>
                        <p className="max-w-xs text-white/30 text-xs font-bold uppercase tracking-[0.2em] leading-loose">
                            Forging the future of human-machine interaction through cutting-edge AI orchestration.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-electric-green mb-8">Services</h5>
                        <div className="flex flex-col gap-4">
                            {["Development", "Automation", "Education", "Strategy"].map(item => (
                                <a key={item} href="#" className="text-xs uppercase font-black text-white/50 hover:text-white transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-electric-green mb-8">Company</h5>
                        <div className="flex flex-col gap-4">
                            {["Work", "Team", "Process", "Contact"].map(item => (
                                <a key={item} href="#" className="text-xs uppercase font-black text-white/50 hover:text-white transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-electric-green mb-8">Social</h5>
                        <div className="flex flex-col gap-4">
                            {["X / Twitter", "LinkedIn", "Instagram", "GitHub"].map(item => (
                                <a key={item} href="#" className="text-xs uppercase font-black text-white/50 hover:text-white transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        © 2026 AI AGENCY. ALL RIGHTS RESERVED.
                    </span>
                    <div className="flex gap-12">
                        <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white">Privacy</a>
                        <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
