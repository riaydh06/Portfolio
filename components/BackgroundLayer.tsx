import { ParallaxLayer } from '@react-spring/parallax'
import { CSSProperties } from 'react'

interface BackgroundLayerProps {
    offset: number
    speed?: number
    backgroundImage: string
    gradient: string
    additionalStyle?: CSSProperties
    className?: string
}

export const BackgroundLayer = ({
    offset,
    speed = 0,
    backgroundImage,
    gradient,
    additionalStyle,
    className = "absolute inset-0",
}: BackgroundLayerProps) => {
    return (
        <ParallaxLayer
            offset={offset}
            speed={speed}
            style={{ zIndex: 0, ...additionalStyle }}
        >
            <div
                className={className}
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div
                className={className}
                style={{
                    background: gradient,
                }}
            />
        </ParallaxLayer>
    )
}
