import { FC, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam suscipit beatae aperiam omnis harum aliquid quam dolorem sequi pariatur in sapiente, ut rerum amet minima quas atque? Eligendi, ex?',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description:
        'En progreso: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt, obcaecati maiores, numquam fuga aliquam molestias perspiciatis blanditiis quia, consequuntur odio! Temporibus quae atque eius porro natus voluptatem nobis at!',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description:
        'Terminadas: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eaque soluta, incidunt qui veritatis nostrum porro facere beatae fugiat non optio rem tempore obcaecati mollitia consequatur nemo, veniam, earum blanditiis.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Entry-Updated', payload: entry })
  }

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
