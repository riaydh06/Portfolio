import { ParallaxLayer } from '@react-spring/parallax'
import { skills } from '../../constants/constants'
import { BackgroundLayer } from '../BackgroundLayer'

export const SkillsSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={2}
                backgroundImage="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(252, 231, 243, 0.75) 0%, rgba(251, 207, 232, 0.75) 50%, rgba(249, 168, 212, 0.75) 100%)"
                className="absolute inset-0 w-full h-full"
            />

            <ParallaxLayer offset={2} speed={0.1}>
                <section
                    id="skills"
                    className="py-20 px-6 relative min-h-screen flex items-center z-10"
                >
                    <div className="max-w-6xl mx-auto w-full">
                        <h2 className="text-5xl font-bold text-center mb-12 text-pink-900">
                            Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200/50 hover:border-pink-300/80 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div>
                                        <span className="text-lg font-semibold text-pink-900">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
        </>
    )
}
