import { ChangeEvent, useContext, useMemo, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { dbEntries } from '../../database'
import { EntriesContext } from '../../context/entries'
import { Layout } from '../../components/layouts'
import { Entry, EntryStatus } from '../../interfaces'
import { dateFunctions } from '../../utils'

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

interface EntryPageProps {
  entry: Entry
}

const EntryPage: NextPage<EntryPageProps> = ({ entry }) => {
  const { description, status: entryStatus } = entry

  const { updateEntry } = useContext(EntriesContext)

  const [inputValue, setInputValue] = useState(description)
  const [status, setStatus] = useState<EntryStatus>(entryStatus)
  const [touched, setTouched] = useState(false)

  const isInvalidValid = useMemo(
    () => !inputValue.length && touched,
    [inputValue, touched]
  )

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value)

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) =>
    setStatus(event.target.value as EntryStatus)

  const onSave = () => {
    if (inputValue.trim().length === 0) return

    const updatedEntry: Entry = {
      ...entry,
      status,
      description
    }

    updateEntry(updatedEntry, true)
  }

  return (
    <Layout title={`${inputValue.substring(0, 20)}...`}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="Entrada:"
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onChange={onChangeInputValue}
                helperText={isInvalidValid && 'Ingrese un valor'}
                onBlur={() => setTouched(true)}
                error={isInvalidValid}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map(entryStatus => (
                    <FormControlLabel
                      key={entryStatus}
                      value={entryStatus}
                      control={<Radio />}
                      label={capitalize(entryStatus)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={!inputValue.length}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark'
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  const entry = await dbEntries.getEntryById(id)

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}

export default EntryPage
