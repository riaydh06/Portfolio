import { ParallaxLayer } from '@react-spring/parallax'
import { education } from '../../constants/constants'
import { BackgroundLayer } from '../BackgroundLayer'

export const EducationSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={6}
                backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(153, 246, 228, 0.75) 0%, rgba(94, 234, 212, 0.75) 50%, rgba(45, 212, 191, 0.75) 100%)"
                className="absolute inset-0 w-full h-full"
            />

            <ParallaxLayer offset={6} speed={0.1}>
                <section
                    id="education"
                    className="py-20 px-6 relative min-h-screen flex items-center z-10"
                >
                    <div className="max-w-4xl mx-auto w-full">
                        <h2 className="text-5xl font-bold text-center mb-12 text-teal-900">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-200/50 hover:border-teal-300/80 transition-all duration-300 hover:shadow-xl shadow-lg"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="mb-2 md:mb-0">
                                            <h3 className="text-2xl font-bold text-teal-900 mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-xl font-semibold text-teal-700 mb-1">
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm text-teal-600">{edu.location}</p>
                                        </div>
                                        <span className="text-sm font-medium text-teal-800 bg-teal-100 px-3 py-1 rounded-full inline-block md:mt-0 mt-2">
                                            {edu.period}
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
