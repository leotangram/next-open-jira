import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface EntriesContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as EntriesContextProps)
