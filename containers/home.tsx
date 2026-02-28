import { useRef } from 'react'
import dynamic from "next/dynamic";
import { ParallaxLayer, IParallax } from '@react-spring/parallax'
import { navigationItems } from '../constants/constants'
import { Cloud } from '../icons/cloud'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/sections/Footer'

const Parallax = dynamic(
    () => import("@react-spring/parallax").then((mod) => mod.Parallax),
    { ssr: false }
);

const Home = () => {
    const parallaxRef = useRef<IParallax>(null);

    const scrollTo = (offset: number) => {
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(offset);
        }
    };
    return (
        <>
            {/* Navigation - Fixed Outside Parallax */}
            <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-md bg-white/30 border-b border-white/20 z-[1000]">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-slate-800 animate-pulse">
                            Portfolio
                        </div>
                        <div className="hidden md:flex gap-8">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollTo(item.offset)}
                                    className="text-sm text-slate-700 hover:text-slate-900 transition-colors duration-300 relative group font-medium cursor-pointer bg-transparent border-none"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-300" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <Parallax
                ref={parallaxRef}
                pages={9}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                {/* Background parallax layers - clouds */}
                <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 0.4 }}>
                    <div className="absolute top-20 left-10">
                        <Cloud width="15%" opacity={0.4} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 0.6 }}>
                    <div className="absolute top-40 right-20">
                        <Cloud width="20%" opacity={0.6} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={-0.1} style={{ opacity: 0.5 }}>
                    <div className="absolute top-60 left-1/4">
                        <Cloud width="25%" opacity={0.5} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={0.4} style={{ opacity: 0.3 }}>
                    <div className="absolute top-80 right-1/3">
                        <Cloud width="18%" opacity={0.3} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={-0.2} style={{ opacity: 0.6 }}>
                    <div className="absolute top-40 left-1/2">
                        <Cloud width="22%" opacity={0.6} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={0.3} style={{ opacity: 0.5 }}>
                    <div className="absolute top-100 right-10">
                        <Cloud width="16%" opacity={0.5} />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={-0.3} style={{ opacity: 0.4 }}>
                    <div className="absolute top-60 left-20">
                        <Cloud width="20%" opacity={0.4} />
                    </div>
                </ParallaxLayer>

                <HeroSection scrollTo={scrollTo} />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </Parallax>
        </>
    );
}

export default Home