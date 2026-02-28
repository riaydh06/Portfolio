import { ParallaxLayer } from '@react-spring/parallax'
import { BackgroundLayer } from '../BackgroundLayer'

export const ContactSection = () => {
    return (
        <>
            <BackgroundLayer
                offset={8}
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
                gradient="linear-gradient(to bottom, rgba(254, 215, 170, 0.8) 0%, rgba(253, 186, 116, 0.8) 50%, rgba(251, 146, 60, 0.8) 100%)"
                additionalStyle={{ height: "100vh" }}
            />

            <ParallaxLayer offset={8} speed={0.1} style={{ zIndex: 10 }}>
                <section
                    id="contact"
                    className="py-20 px-6 relative min-h-screen flex items-center z-10"
                >
                    <div className="max-w-2xl mx-auto w-full">
                        <h2 className="text-5xl font-bold text-center mb-12 text-orange-900">
                            Get In Touch
                        </h2>

                        {/* Contact Information */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg mb-6">
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                                <a
                                    href="tel:+8801733784040"
                                    className="flex items-center gap-3 text-orange-900 hover:text-orange-700 transition-colors"
                                >
                                    <span className="text-2xl">📞</span>
                                    <span className="text-lg font-semibold">
                                        +880 1733 784040
                                    </span>
                                </a>
                                <a
                                    href="mailto:riaydh06@gmail.com"
                                    className="flex items-center gap-3 text-orange-900 hover:text-orange-700 transition-colors"
                                >
                                    <span className="text-2xl">✉️</span>
                                    <span className="text-lg font-semibold">
                                        riaydh06@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>

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
        </>
    )
}
