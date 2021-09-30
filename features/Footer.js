import { motion, useAnimation } from 'framer-motion'
import { Facebook, Instagram, Vimeo } from 'public/assets/svg/social-icons'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function Footer() {
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

  return (
    <motion.div
      className="h-[300px] mt-[296px]"
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
        <div className="flex relative justify-between">
          <div className="text-primary text-[22px] font-semibold leading-[8px] flex-[1]">
            <p className="my-[22px]">902.315.1279</p>
            <p className="my-[22px]">info@furrow.studio</p>
          </div>
          <div className="text-primary text-[22px] font-semibold leading-[8px] flex-[2]">
            <p className="my-[22px]">15 Camburhill Ct Unit C</p>
            <p className="my-[22px]">Charlottetown, PE C1E 0E2</p>
          </div>
          <div className="flex relative">
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
              target="_blank">
              <Instagram className="w-full h-full text-primary" />
            </a>
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
              target="_blank">
              <Facebook className="w-full h-full text-primary" />
            </a>
            <a
              className="relative block w-[24px] h-[24px] p-[8px] box-content"
              href="#"
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
