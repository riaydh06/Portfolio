import { ParallaxLayer } from '@react-spring/parallax'
import { experiences } from '../../constants/constants'
import { BackgroundLayer } from '../BackgroundLayer'

export const ExperienceSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={3}
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(191, 219, 254, 0.8) 0%, rgba(147, 197, 253, 0.8) 50%, rgba(96, 165, 250, 0.8) 100%)"
                additionalStyle={{ height: "300vh" }}
                className="absolute inset-0 w-full h-full"
            />

            <ParallaxLayer offset={3} speed={0.1} style={{ overflow: "visible" }}>
                <section
                    id="experience"
                    className="py-20 px-6 relative flex items-start z-10"
                    style={{ overflow: "visible" }}
                >
                    <div className="max-w-6xl mx-auto w-full py-12">
                        <h2 className="text-5xl font-bold text-center mb-12 text-blue-900">
                            Work Experience
                        </h2>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:border-blue-300/80 transition-all duration-300 hover:shadow-xl shadow-lg"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="mb-2 md:mb-0">
                                            <h3 className="text-2xl font-bold text-blue-900 mb-1">
                                                {exp.position}
                                            </h3>
                                            <p className="text-xl font-semibold text-blue-700">
                                                {exp.company}
                                            </p>
                                            <p className="text-sm text-blue-600">{exp.location}</p>
                                        </div>
                                        <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full inline-block md:mt-0 mt-2">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        {Array.isArray(exp.description) ? (
                                            <ul className="list-disc list-inside space-y-2 text-blue-900">
                                                {exp.description.map((desc, idx) => (
                                                    <li key={idx} className="text-sm leading-relaxed">
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-blue-900 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-200 rounded-full text-xs border border-blue-300 text-blue-800 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
