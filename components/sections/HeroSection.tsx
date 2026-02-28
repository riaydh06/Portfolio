import { ParallaxLayer } from '@react-spring/parallax'
import { BackgroundLayer } from '../BackgroundLayer'

interface HeroSectionProps {
    scrollTo: (offset: number) => void
}

export const HeroSection = ({ scrollTo }: HeroSectionProps) => {
    return (
        <>
            <BackgroundLayer
                offset={0}
                backgroundImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(135, 206, 235, 0.7) 0%, rgba(224, 246, 255, 0.7) 50%, rgba(135, 206, 235, 0.7) 100%)"
            />

            <ParallaxLayer offset={0} speed={0.3}>
                <section
                    id="home"
                    className="min-h-screen flex items-center justify-center px-6 opacity-100 relative z-10"
                >
                    <div className="text-center max-w-8xl mx-auto">
                        <div className="mb-6 animate-bounce-slow">
                            <div className="inline-block p-4 rounded-full bg-white/80 shadow-lg animate-spin-slow">
                                <span className="text-6xl">👋</span>
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-800 animate-gradient">
                            Hi, I&apos;m Sayed Golam Rasul Riaydh
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-700 mb-8 animate-fade-in-up">
                            Frontend Developer
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => scrollTo(3)}
                                className="px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollTo(7)}
                                className="px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => scrollTo(8)}
                                className="px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
        </>
    )
}
