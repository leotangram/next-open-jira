import { createContext } from 'react'

interface UIContextProps {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  closeSideMenu: () => void
  openSideMenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  setDragging: (isDragging: boolean) => void
}

export const UIContext = createContext({} as UIContextProps)
