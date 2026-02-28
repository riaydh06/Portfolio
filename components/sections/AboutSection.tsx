import { ParallaxLayer } from '@react-spring/parallax'
import { BackgroundLayer } from '../BackgroundLayer'

export const AboutSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={1}
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(224, 231, 255, 0.8) 0%, rgba(199, 210, 254, 0.8) 50%, rgba(165, 180, 252, 0.8) 100%)"
            />

            <ParallaxLayer offset={1} speed={0.2}>
                <section
                    id="about"
                    className="py-20 px-6 relative min-h-screen flex items-center z-10"
                >
                    <div className="max-w-4xl mx-auto w-full">
                        <h2 className="text-5xl font-bold text-center mb-12 text-indigo-900">
                            About Me
                        </h2>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50 hover:border-indigo-300/80 transition-all duration-300 hover:shadow-2xl shadow-lg">
                            <p className="text-lg text-indigo-900 leading-relaxed mb-4">
                                I&apos;m a passionate frontend developer with a love for
                                creating beautiful, functional, and user-friendly
                                applications. With expertise in modern web technologies, I
                                bring ideas to life through clean code and innovative
                                solutions.
                            </p>
                            <p className="text-lg text-indigo-900 leading-relaxed">
                                When I&apos;m not coding, you can find me exploring new
                                technologies, contributing to open-source projects, or sharing
                                knowledge with the developer community.
                            </p>
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
        </>
    )
}
