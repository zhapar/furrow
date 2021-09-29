import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}

export default useWindowSize
