import { DragEvent, FC, useContext } from 'react'
import { useRouter } from 'next/router'
import { Entry } from '../../interfaces/entry'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import { UIContext } from '../../context/ui'
import { dateFunctions } from '../../utils'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { description } = entry

  const { setDragging } = useContext(UIContext)
  const router = useRouter()

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    setDragging(true)
  }

  const onDragEnd = () => setDragging(false)

  const onClick = () => router.push(`/entries/${entry._id}`)

  return (
    <Card
      onClick={onClick}
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
          <Typography variant="body2">
            Hace {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
