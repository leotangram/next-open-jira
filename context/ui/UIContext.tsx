import { createContext } from 'react'

interface UIContextProps {
  sideMenuOpen: boolean
  closeSideMenu: () => void
  openSideMenu: () => void
}

export const UIContext = createContext({} as UIContextProps)
