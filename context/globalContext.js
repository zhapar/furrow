import { createContext, useReducer, useContext, useEffect } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

function globalReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.currentTheme,
      }
    }
    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Provider
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: 'dark',
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
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
    if (state.currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', state.currentTheme)
  }, [state.currentTheme])

  // onCursor function
  function onCursor(cursorType) {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <GlobalDispatchContext.Provider value={{ dispatch, onCursor }}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom global state hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
