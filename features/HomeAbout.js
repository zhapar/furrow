import { useGlobalDispatchContext } from 'context/globalContext'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: 'Pre-Production',
    results: [
      'Creative Development',
      'Writing',
      'Creative Development',
      'Writing',
      'Storyboards',
      'Art Direction',
      'Creative Direction',
      'Location Scouting',
      'Casting',
    ],
  },
  {
    id: 1,
    title: 'Video Production',
    results: [
      'Principle Photography',
      'Production Management',
      'Crew',
      'Dailies',
      'LTO-Archiving',
    ],
  },
  {
    id: 2,
    title: 'Post-Production',
    results: [
      'Colour correction',
      'Offline editing',
      'Online editing',
      'VFX',
      'Animation and motion graphics',
      'Closed captioning and subtitles',
      'Descriptive video',
      'Dailies',
      'Quality control',
      'LTO Archiving',
    ],
  },
  {
    id: 3,
    title: 'Audio Post-Production',
    results: [
      'We work with some amazing partners who provide:',
      'Sound Design',
      'SFX',
      'Music',
      'Sound Mix',
    ],
  },
]

function HomeAbout() {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: '-300px',
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <motion.div
      ref={aboutRef}
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
        <div className="flex items-start">
          <div className="w-full">
            <h2 className="w-[60%] text-[2.3rem] font-normal ml-[124px] text-theme">
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p className="max-w-[440px] text-[1rem] leading-[1.6rem] ml-[124px] text-theme">
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </div>
          <div>
            <h3>Services</h3>
            {accordionIds.map((details, id) => (
              <Accordion
                key={id}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Accordion({ details, expanded, setExpanded }) {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { onCursor } = useGlobalDispatchContext()

  return (
    <>
      <motion.div
        className="w-full text-primary h-[32px] flex items-center font-semibold text-[1.15rem] my-[8px] hover:text-theme"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={onCursor}>
        <div className="flex items-center h-full mr-[8px]">
          <motion.span
            className="w-[16px] h-[4px] bg-primary transition-all duration-100 ease-in-out"
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}></motion.span>
          <motion.span
            className="w-[16px] h-[4px] bg-primary transition-all duration-100 ease-in-out"
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}></motion.span>
        </div>
        {details.title}
      </motion.div>
      <motion.div
        className="overflow-hidden pl-[40px]"
        key="content"
        animate={{ height: isOpen ? '100%' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
        {details.results.map((result, index) => (
          <span
            className="w-full my-[8px] text-[0.875rem] text-primary block font-light"
            key={index}>
            {result}
          </span>
        ))}
      </motion.div>
    </>
  )
}

export default HomeAbout
