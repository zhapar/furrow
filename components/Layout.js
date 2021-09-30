import { useEffect, useState } from 'react'
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from 'context/globalContext'
import CustomCursor from 'features/CustomCursor'
import Header from 'features/Header'
import Navigation from 'features/Navigation'
import Footer from 'features/Footer'

function Layout({ children }) {
  const { currentTheme } = useGlobalStateContext()
  const { dispatch } = useGlobalDispatchContext()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [fixedCursorPosition, setFixedCursorPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    dispatch({
      type: 'TOGGLE_THEME',
      currentTheme:
        window.localStorage.getItem('theme') == null
          ? 'dark'
          : window.localStorage.getItem('theme'),
    })
  }, [])

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <>
      <CustomCursor
        toggleMenu={toggleMenu}
        fixedCursorPosition={fixedCursorPosition}
      />
      <Header
        setToggleMenu={setToggleMenu}
        setFixedCursorPosition={setFixedCursorPosition}
      />
      <Navigation setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <main>{children}</main>
      <Footer setFixedCursorPosition={setFixedCursorPosition} />
    </>
  )
}

export default Layout
