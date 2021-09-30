import { useGlobalDispatchContext } from 'context/globalContext'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function HomeFeatured() {
  const [hovered, setHovered] = useState(false)
  const { onCursor } = useGlobalDispatchContext()

  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <motion.div
      className="mb-[200px] relative"
      ref={featured}
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
        <Link href="#">
          <a className="mb-[200px] relative block">
            <motion.div
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              className="h-[480px] w-full py-[56px] px-[124px] box-border text-theme">
              <div className="flex justify-between">
                <h3 className="text-[1.4rem]">Featured Project</h3>
                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="flex space-x-[1rem]">
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </motion.div>
              </div>
              <h2 className="absolute bottom-[-128px] text-[7rem] font-black leading-[90px] m-0">
                NOT <br /> HUMBLE
                <span className="w-[120px] h-[80px] block relative overflow-hidden">
                  <motion.svg
                    animate={{ x: hovered ? 48 : 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                    className="absolute top-[16px] left-[-48px] w-[108px] text-theme">
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="currentColor"
                      fillRule="evenodd"></path>
                  </motion.svg>
                </span>
              </h2>
            </motion.div>
            <div className="absolute z-[-1] w-full h-[480px] top-0 block overflow-hidden">
              <video
                loop
                autoPlay
                muted
                src="/assets/video/featured-video.mp4"></video>
            </div>
          </a>
        </Link>
        <div className="mt-[200px]">
          <div className="flex justify-end">
            <button className="bg-primary text-white relative p-[20px] block text-left text-[1.4rem] leading-none font-semibold border-none before:absolute before:top-1/2 before:right-[20px] before:w-[35px] before:h-[7px] before:block before:bg-white before:transform before:-translate-y-1/2 before:mt-[-8px] after:absolute after:top-1/2 after:right-[20px] after:w-[35px] after:h-[7px] after:block after:bg-white after:transform after:-translate-y-1/2 after:mt-[8px]">
              <span className="mr-[108px] block">All Projects</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeFeatured
