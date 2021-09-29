import { useRef, useEffect, useState } from 'react'
import useWindowSize from 'libs/useWindowSize'

function HomeBanner() {
  const [mounted, setMounted] = useState(false)

  const size = useWindowSize()
  let canvas = useRef(null)

  useEffect(() => {
    if (mounted) {
      let renderingElement = canvas.current

      // offscreen canvas for only drawing
      let drawingElement = renderingElement.cloneNode()
      let drawingCtx = drawingElement.getContext('2d')
      let renderingCtx = renderingElement.getContext('2d')
      let lastX
      let lastY
      let moving = false

      renderingCtx.globalCompositeOperation = 'source-over'
      // to do
      renderingCtx.fillStyle = '#fff'
      renderingCtx.fillRect(0, 0, size.width, size.height)

      renderingElement.addEventListener('mouseover', (event) => {
        moving = true
        lastX = event.pageX - renderingElement.offsetLeft
        lastY = event.pageY - renderingElement.offsetTop
      })

      renderingElement.addEventListener('click', (event) => {
        moving = true
        lastX = event.pageX - renderingElement.offsetLeft
        lastY = event.pageY - renderingElement.offsetTop
      })

      renderingElement.addEventListener('mouseup', (event) => {
        moving = false
        lastX = event.pageX - renderingElement.offsetLeft
        lastY = event.pageY - renderingElement.offsetTop
      })

      renderingElement.addEventListener('mousemove', (event) => {
        if (moving) {
          drawingCtx.globalCompositeOperation = 'source-over'
          renderingCtx.globalCompositeOperation = 'destination-out'
          let currentX = event.pageX - renderingElement.offsetLeft
          let currentY = event.pageY - renderingElement.offsetTop
          drawingCtx.lineJoin = 'round'
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
  }, [mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-theme h-screen w-full relative mb-[296px]">
      <div className="h-full w-full">
        <video
          src="/assets/video/video.mp4"
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
        className="absolute top-0 left-0 h-full block"
      />
      <h1 className="absolute bottom-[-120px] left-[-18px] text-theme pointer-events-none">
        <span className="block text-[23rem] font-black leading-[0.76]">
          DIG
        </span>
        <span className="block text-[23rem] font-black leading-[0.76]">
          DEEP
        </span>
      </h1>
    </div>
  )
}

export default HomeBanner
