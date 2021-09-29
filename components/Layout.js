import { useEffect, useState } from 'react'
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from 'context/globalContext'
import CustomCursor from 'features/CustomCursor'
import Header from 'features/Header'
import Navigation from 'features/Navigation'

function Layout({ children }) {
  const { currentTheme } = useGlobalStateContext()
  const { dispatch } = useGlobalDispatchContext()
  const [toggleMenu, setToggleMenu] = useState(false)

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
      <CustomCursor toggleMenu={toggleMenu} />
      <Header setToggleMenu={setToggleMenu} />
      <Navigation setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <main>{children}</main>
    </>
  )
}

export default Layout
