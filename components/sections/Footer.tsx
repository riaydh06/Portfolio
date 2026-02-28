import { ParallaxLayer } from '@react-spring/parallax'

export const Footer = () => {
    return (
        <ParallaxLayer offset={8.5} speed={0}>
            <footer className="py-8 px-6 border-t border-white/20">
                <div className="max-w-7xl mx-auto text-center text-slate-700">
                    <p>
                        © 2024 Sayed Golam Rasul Riyadh. Built with Next.js & Tailwind
                        CSS
                    </p>
                </div>
            </footer>
        </ParallaxLayer>
    )
}
