import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
  }

  const setDragging = (isDragging: boolean) => {
    dispatch({ type: 'UI - Set Dragging', payload: isDragging })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
        setDragging
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
