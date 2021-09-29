import { useEffect, useRef } from 'react'
import { useGlobalStateContext } from 'context/globalContext'
import cn from 'classnames'

function CustomCursor() {
  const cursor = useRef(null)

  const { cursorType } = useGlobalStateContext()

  function onMouseMove({ clientX, clientY }) {
    cursor.current.style.left = `${clientX}px`
    cursor.current.style.top = `${clientY}px`
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className={cn(
        'cursor',
        cursorType && 'hovered',
        cursorType === 'pointer' && 'pointer'
      )}
      ref={cursor}></div>
  )
}

export default CustomCursor
