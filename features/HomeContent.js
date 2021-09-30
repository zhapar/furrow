import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function HomeContent() {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
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
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
      className="mb-[200px]">
      <div className="container">
        <motion.h2 className="w-[53%] text-[2.3rem] font-normal ml-[124px] text-theme">
          Great stories don’t just happen— <br /> they need to be uncovered. And
          we dig deep to discover the great stories that lie just below the
          surface. Dirt under our fingernails and all.
        </motion.h2>
      </div>
    </motion.div>
  )
}

export default HomeContent
