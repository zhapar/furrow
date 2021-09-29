import Link from 'next/link'
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from 'context/globalContext'

function Header({ setToggleMenu }) {
  const { currentTheme } = useGlobalStateContext()
  const { dispatch, onCursor } = useGlobalDispatchContext()

  function toggleTheme() {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', currentTheme: 'light' })
    } else if (currentTheme === 'light') {
      dispatch({ type: 'TOGGLE_THEME', currentTheme: 'dark' })
    }
  }

  return (
    <div className="h-0 w-full absolute top-[72px] right-0 left-0 z-[99]">
      <div className="container">
        <div className="flex justify-between h-0">
          <div
            className="mt-[15px]"
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}>
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-theme pr-[4px]">
                FURR
              </a>
            </Link>
            <span
              className="h-[16px] w-[16px] bg-primary rounded-full inline-block relative bottom-[2px]"
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={() => onCursor('hovered')}
              onClick={toggleTheme}
            />
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-theme pl-[4px]">
                W
              </a>
            </Link>
          </div>
          <button
            className="origin-center border-none p-[20px] bg-none outline-none"
            onClick={() => setToggleMenu(true)}
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}>
            <span className="w-[36px] h-[8px] block -bg-theme m-[8px]"></span>
            <span className="w-[36px] h-[8px] block -bg-theme m-[8px]"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
