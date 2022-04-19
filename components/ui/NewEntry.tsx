import React, { ChangeEvent, useContext, useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '../../context/entries/EntriesContext'
import { UIContext } from '../../context/ui/UIContext'

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value)

  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
    setIsAddingEntry(false)
    setTouched(false)
    setInputValue('')
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            autoFocus
            error={inputValue.length <= 0 && touched}
            fullWidth
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            label="Nueva entrada"
            multiline
            onBlur={() => setTouched(true)}
            onChange={onChangeInputValue}
            sx={{ marginTop: 2, marginBottom: 1, placeholder: 'Nueva entrada' }}
            value={inputValue}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
              variant="outlined"
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  )
}
