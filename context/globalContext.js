import { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

function globalReducer(state, action) {
  switch (action.type) {
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
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom global state hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
