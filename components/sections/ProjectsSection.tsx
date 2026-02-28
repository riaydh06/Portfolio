import { ParallaxLayer } from '@react-spring/parallax'
import { projects } from '../../constants/constants'
import { BackgroundLayer } from '../BackgroundLayer'

export const ProjectsSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={7}
                backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(209, 250, 229, 0.8) 0%, rgba(167, 243, 208, 0.8) 50%, rgba(110, 231, 183, 0.8) 100%)"
                additionalStyle={{ height: "100vh" }}
            />

            <ParallaxLayer offset={7} speed={0.15} style={{ zIndex: 10 }}>
                <section
                    id="projects"
                    className="py-20 px-6 relative min-h-screen flex items-center z-10"
                >
                    <div className="max-w-7xl mx-auto w-full">
                        <h2 className="text-5xl font-bold text-center mb-12 text-emerald-900">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.title}
                                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/50 hover:border-emerald-300/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-md cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                        {project.image}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-emerald-900 group-hover:text-emerald-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-emerald-800 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-emerald-200 rounded-full text-xs border border-emerald-300 text-emerald-800"
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
