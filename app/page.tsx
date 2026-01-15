"use client";

import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

// Cloud SVG component for parallax layers - moved outside component
const Cloud = ({
  opacity = 0.6,
  width = "20%",
}: {
  opacity?: number;
  width?: string;
}) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    style={{ display: "block", width, opacity }}
    fill="rgba(255, 255, 255, 0.8)"
  >
    <path d="M50 60 Q30 60 30 50 Q30 40 50 40 Q55 25 70 25 Q85 25 90 40 Q110 40 110 50 Q110 60 90 60 Z" />
  </svg>
);

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);

  const scrollTo = (offset: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  const navigationItems = [
    { name: "Home", offset: 0 },
    { name: "About", offset: 1 },
    { name: "Skills", offset: 2 },
    { name: "Projects", offset: 3 },
    { name: "Contact", offset: 4 },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 82 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "TypeScript", "Stripe"],
      image: "🛒",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Node.js", "WebSocket"],
      image: "📋",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      tech: ["Python", "OpenAI", "FastAPI"],
      image: "🤖",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with smooth animations",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: "💼",
    },
  ];

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
        pages={5}
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

        {/* Hero Section - Sky Blue Background with Image */}
        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(135, 206, 235, 0.7) 0%, rgba(224, 246, 255, 0.7) 50%, rgba(135, 206, 235, 0.7) 100%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 opacity-100 relative z-10"
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6 animate-bounce-slow">
                <div className="inline-block p-4 rounded-full bg-white/80 shadow-lg animate-spin-slow">
                  <span className="text-6xl">👋</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-800 animate-gradient">
                Hi, I&apos;m Sayed Golam Rasul Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-8 animate-fade-in-up">
                Full Stack Developer & Creative Problem Solver
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => scrollTo(3)}
                  className="px-8 py-3 bg-slate-800 text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg hover:bg-slate-900 cursor-pointer"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollTo(4)}
                  className="px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer bg-transparent"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* About Section - Light Purple Background with Image */}
        <ParallaxLayer offset={1} speed={0} style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(224, 231, 255, 0.8) 0%, rgba(199, 210, 254, 0.8) 50%, rgba(165, 180, 252, 0.8) 100%)",
            }}
          />
        </ParallaxLayer>

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
                  I&apos;m a passionate full-stack developer with a love for
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

        {/* Skills Section - Light Pink Background with Image */}
        <ParallaxLayer offset={2} speed={0} style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(252, 231, 243, 0.75) 0%, rgba(251, 207, 232, 0.75) 50%, rgba(249, 168, 212, 0.75) 100%)",
            }}
          />
        </ParallaxLayer>

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
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-pink-900">
                        {skill.name}
                      </span>
                      <span className="text-pink-700 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-pink-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-pink-700 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* Projects Section - Light Green Background with Image */}
        <ParallaxLayer offset={3} speed={0} style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(209, 250, 229, 0.8) 0%, rgba(167, 243, 208, 0.8) 50%, rgba(110, 231, 183, 0.8) 100%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.15}>
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

        {/* Contact Section - Light Orange Background with Image */}
        <ParallaxLayer offset={4} speed={0} style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(254, 215, 170, 0.8) 0%, rgba(253, 186, 116, 0.8) 50%, rgba(251, 146, 60, 0.8) 100%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1}>
          <section
            id="contact"
            className="py-20 px-6 relative min-h-screen flex items-center z-10"
          >
            <div className="max-w-2xl mx-auto w-full">
              <h2 className="text-5xl font-bold text-center mb-12 text-orange-900">
                Get In Touch
              </h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-orange-900"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-900">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-orange-900"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-900">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none text-orange-900"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-orange-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* Footer */}
        <ParallaxLayer offset={4.8} speed={0}>
          <footer className="py-8 px-6 border-t border-white/20">
            <div className="max-w-7xl mx-auto text-center text-slate-700">
              <p>
                © 2024 Sayed Golam Rasul Riyadh. Built with Next.js & Tailwind
                CSS
              </p>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
