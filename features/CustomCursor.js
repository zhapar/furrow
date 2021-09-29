import { useEffect, useState, useRef } from 'react'

function CustomCursor() {
  const cursor = useRef(null)

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
      className="fixed top-[300px] left-[300px] w-[32px] h-[32px] bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 transition duration-100 ease-out pointer-events-none z-[999]"
      ref={cursor}></div>
  )
}

export default CustomCursor
