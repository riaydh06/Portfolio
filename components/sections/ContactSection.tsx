'use client'

import { useState, FormEvent } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { BackgroundLayer } from '../BackgroundLayer'

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' })
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.',
                })
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.',
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

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
                            {submitStatus.type && (
                                <div
                                    className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-100 text-green-800 border border-green-300'
                                        : 'bg-red-100 text-red-800 border border-red-300'
                                        }`}
                                >
                                    <p className="text-sm font-medium">
                                        {submitStatus.message}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2 text-orange-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-orange-900"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2 text-orange-900"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-orange-900"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 text-orange-900"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/90 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none text-orange-900"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${isSubmitting
                                        ? 'bg-orange-400 cursor-not-allowed'
                                        : 'bg-orange-600 hover:scale-105 hover:bg-orange-700'
                                        } text-white`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
        </>
    )
}
