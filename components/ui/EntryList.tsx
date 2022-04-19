import { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from '../../interfaces/entry'
import { EntriesContext } from '../../context/entries/EntriesContext'
import { UIContext } from '../../context/ui'

import styles from './EntryList.module.css'

interface EntryListProps {
  status: EntryStatus
}

export const EntryList: FC<EntryListProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, setDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries]
  )

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')

    const entry = entries.find(entry => entry._id === id)!
    entry.status = status
    updateEntry(entry)
    setDragging(false)
  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          backgroundColor: 'transparent',
          height: 'calc(100vh - 180px)',
          padding: 2
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
