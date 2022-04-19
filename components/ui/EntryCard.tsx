import { DragEvent, FC, useContext } from 'react'
import { Entry } from '../../interfaces/entry'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import { UIContext } from '../../context/ui'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { description } = entry

  const { setDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    console.log(event)
    setDragging(true)
  }

  const onDragEnd = () => setDragging(false)

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30 miutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
