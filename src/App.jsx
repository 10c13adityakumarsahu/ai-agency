import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './sections/Hero'
import Services from './sections/Services'
import CaseStudies from './sections/CaseStudies'
import Capabilities from './sections/Capabilities'
import Process from './sections/Process'
import Team from './sections/Team'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-[#050505]">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            {/* Navigation */}
            <Navbar />

            <main>
                <Hero />
                <Services />
                <CaseStudies />
                <Capabilities />
                <Process />
                <Team />
                <Testimonials />
                <div className="py-20 md:py-32">
                    <CTA />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default App
