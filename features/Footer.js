import { useGlobalDispatchContext } from 'context/globalContext'
import { motion, useAnimation } from 'framer-motion'
import useElementPosition from 'libs/useElementPosition'
import { Facebook, Instagram, Vimeo } from 'public/assets/svg/social-icons'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function Footer({ setFixedCursorPosition }) {
  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const vimeoRef = useRef(null)
  const vimeoPosition = useElementPosition(vimeoRef)

  const { onCursor } = useGlobalDispatchContext()

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  })
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  const menuHover = (x) => {
    onCursor('lockedX')
    setFixedCursorPosition({ x })
  }

  return (
    <motion.div
      className="h-[300px] mt-[100px] sm:mt-[296px]"
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row relative justify-between">
          <div className="text-primary text-[22px] font-semibold leading-[8px] flex-[1]">
            <p className="my-[22px]">902.315.1279</p>
            <p className="my-[22px]">info@furrow.studio</p>
          </div>
          <div className="text-primary text-[22px] font-semibold leading-[8px] flex-[2]">
            <p className="my-[22px]">15 Camburhill Ct Unit C</p>
            <p className="my-[22px]">Charlottetown, PE C1E 0E2</p>
          </div>
          <div className="flex relative mt-4 sm:mt-0">
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
              ref={instagramRef}
              onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
              target="_blank">
              <Instagram className="w-full h-full text-primary" />
            </a>
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
              ref={facebookRef}
              onMouseEnter={() => menuHover(facebookPosition.x)}
              onMouseLeave={onCursor}
              target="_blank">
              <Facebook className="w-full h-full text-primary" />
            </a>
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
              ref={vimeoRef}
              onMouseEnter={() => menuHover(vimeoPosition.x)}
              onMouseLeave={onCursor}
              target="_blank">
              <Vimeo className="w-full h-full text-primary" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
