import { useState, useEffect } from 'react'

function useElementPosition(el) {
  const [elementPosition, setElementPosition] = useState({
    x: undefined,
    y: undefined,
  })

  useEffect(() => {
    function handlePosition() {
      let element = el.current
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2

      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2

      setElementPosition({ x, y })
    }
    handlePosition()
  }, [el])

  return elementPosition
}

export default useElementPosition
