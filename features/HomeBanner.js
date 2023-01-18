import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import useWindowSize from "libs/useWindowSize"
import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "context/globalContext"

function HomeBanner() {
    const [mounted, setMounted] = useState(false)

    const size = useWindowSize()
    const { currentTheme } = useGlobalStateContext()
    const { onCursor } = useGlobalDispatchContext()
    let canvas = useRef(null)

    useEffect(() => {
        if (mounted) {
            let renderingElement = canvas.current

            // offscreen canvas for only drawing
            let drawingElement = renderingElement.cloneNode()
            let drawingCtx = drawingElement.getContext("2d")
            let renderingCtx = renderingElement.getContext("2d")
            let lastX
            let lastY
            let moving = false

            renderingCtx.globalCompositeOperation = "source-over"
            // to do
            renderingCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
            renderingCtx.fillRect(0, 0, size.width, size.height)

            renderingElement.addEventListener("mouseover", (event) => {
                moving = true
                lastX = event.pageX - renderingElement.offsetLeft
                lastY = event.pageY - renderingElement.offsetTop
            })

            renderingElement.addEventListener("click", (event) => {
                moving = true
                lastX = event.pageX - renderingElement.offsetLeft
                lastY = event.pageY - renderingElement.offsetTop
            })

            renderingElement.addEventListener("mouseup", (event) => {
                moving = false
                lastX = event.pageX - renderingElement.offsetLeft
                lastY = event.pageY - renderingElement.offsetTop
            })

            renderingElement.addEventListener("mousemove", (event) => {
                if (moving) {
                    drawingCtx.globalCompositeOperation = "source-over"
                    renderingCtx.globalCompositeOperation = "destination-out"
                    let currentX = event.pageX - renderingElement.offsetLeft
                    let currentY = event.pageY - renderingElement.offsetTop
                    drawingCtx.lineJoin = "round"
                    drawingCtx.moveTo(lastX, lastY)
                    drawingCtx.lineTo(currentX, currentY)
                    drawingCtx.closePath()
                    drawingCtx.lineWidth = 120
                    drawingCtx.stroke()
                    lastX = currentX
                    lastY = currentY
                    renderingCtx.drawImage(drawingElement, 0, 0)
                }
            })
        }
    }, [mounted, currentTheme])

    useEffect(() => {
        setMounted(true)
    }, [])

    const container = {
        initial: { y: 800 },
        animate: {
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        initial: { y: 800 },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        },
    }

    return (
        <div className="bg-theme h-screen w-full relative mb-[100px] sm:mb-[296px]">
            <div className="h-full w-full">
                <video
                    src="/assets/video/akumosolutions.mov"
                    className="w-full h-full object-cover"
                    loop
                    autoPlay
                    muted
                />
            </div>
            <canvas
                ref={canvas}
                height={mounted ? size.height : 300}
                width={mounted ? size.width : 300}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
                className="absolute top-0 left-0 h-full hidden sm:block"
            />
            <motion.h1
                variants={container}
                initial="initial"
                animate="animate"
                className="absolute bottom-0 md:bottom-[-120px] left-0 md:left-[-18px] text-theme pointer-events-none">
                <motion.span
                    variants={item}
                    className="block text-[8rem] md:text-[19rem] font-black leading-[0.76] text-blue-400">
                    DIG
                </motion.span>
                <motion.span
                    variants={item}
                    className="block text-[8rem] md:text-[19rem] font-black leading-[0.76] text-blue-400">
                    DEEP
                </motion.span>
            </motion.h1>
        </div>
    )
}

export default HomeBanner
