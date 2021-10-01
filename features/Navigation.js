import { useGlobalDispatchContext } from 'context/globalContext'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Vimeo } from 'public/assets/svg/social-icons'
import { useState } from 'react'

const navRoutes = [
  {
    id: 0,
    title: 'not humble',
    path: '/not-humble',
    video: 'featured-video.mp4',
  },
  {
    id: 1,
    title: 'bleeping easy',
    path: '/bleeping-easy',
    video: 'easy.mp4',
  },
  {
    id: 2,
    title: 'make it zero',
    path: '/make-it-zero',
    video: 'make-it-zero.mp4',
  },
  {
    id: 3,
    title: 'it takes an island',
    path: '/it-takes-an-island',
    video: 'it-takes-an-island.mp4',
  },
  {
    id: 4,
    title: '50 beaches',
    path: '/50-beaches',
    video: '50-beaches.mp4',
  },
]

function Navigation({ toggleMenu, setToggleMenu }) {
  const { onCursor } = useGlobalDispatchContext()
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'featured-video.mp4',
    key: '0',
  })

  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          initial={{ x: '-100%' }}
          exit={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="fixed top-0 left-0 w-full h-full block bg-primary text-black z-[100] overflow-hidden">
          <div className="container">
            <div className="top-5 sm:top-[72px] relative">
              <div className="flex justify-between h-0">
                <h2 className="-text-theme text-2xl font-bold mt-5">
                  Projects
                </h2>
                <button
                  onMouseEnter={() => onCursor('pointer')}
                  onMouseLeave={onCursor}
                  onClick={() => setToggleMenu(false)}
                  className="origin-center border-none py-5 sm:p-[20px] bg-none outline-none">
                  <span className="w-[36px] h-[8px] block bg-theme m-[8px]"></span>
                  <span className="w-[36px] h-[8px] block bg-theme m-[8px]"></span>
                </button>
              </div>
            </div>
            <div className="w-full h-full flex items-center">
              <ul className="p-0">
                {navRoutes.map(({ id, title, path, video }) => (
                  <motion.li
                    onMouseEnter={() => onCursor('pointer')}
                    onMouseLeave={onCursor}
                    className="list-none text-5xl uppercase font-black h-[96px] leading-[96px] overflow-hidden"
                    onHoverStart={() =>
                      setRevealVideo({
                        show: true,
                        video,
                        key: id,
                      })
                    }
                    onHoverEnd={() =>
                      setRevealVideo({
                        show: false,
                        video,
                        key: id,
                      })
                    }
                    key={id}>
                    <Link href="#">
                      <motion.div
                        initial={{ x: -108 }}
                        whileHover={{
                          x: -40,
                          transition: {
                            duration: 0.4,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          },
                        }}
                        className="-text-theme relative flex items-center">
                        <span className="h-[76px] mr-[8px]">
                          <motion.svg
                            className="w-[100px] h-full -text-theme "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57">
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="currentColor"
                              fillRule="evenodd"></path>
                          </motion.svg>
                        </span>
                        {title}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 w-full py-5 sm:py-[56px]">
              <div className="flex flex-col sm:flex-row justify-between px-9">
                <div className="text-primary text-[22px] font-semibold flex-[1]">
                  <p className="-text-theme">info@furrow.studio</p>
                </div>
                <div className="text-primary text-[22px] font-semibold flex-[2]">
                  <p className="-text-theme">902.315.1279</p>
                </div>
                <div className="flex relative">
                  <a
                    className="relative block w-[24px] h-[24px] p-[8px] box-content"
                    href="#"
                    target="_blank">
                    <Instagram className="w-full h-full -text-theme" />
                  </a>
                  <a
                    className="relative block w-[24px] h-[24px] p-[8px] box-content"
                    href="#"
                    target="_blank">
                    <Facebook className="w-full h-full -text-theme" />
                  </a>
                  <a
                    className="relative block w-[24px] h-[24px] p-[8px] box-content"
                    href="#"
                    target="_blank">
                    <Vimeo className="w-full h-full -text-theme" />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-1/4 z-[-1] h-full w-full bg-black">
              <motion.div
                animate={{ width: revealVideo.show ? 0 : '100%' }}
                className="w-full bg-primary absolute top-0 bottom-0 left-0"></motion.div>
              <motion.div className="bg-black absolute h-full m-0 z-[-1]">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.video
                    key={revealVideo.key}
                    src={`assets/video/${revealVideo.video}`}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    loop
                    autoPlay
                    muted
                    className="h-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Navigation
