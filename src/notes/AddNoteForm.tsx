import { ChangeEvent, useState } from 'react'
import { Note } from './model.ts'
import { Button, FormGroup, TextField } from '@mui/material'

const sxForm = {
  display: 'grid',
  gridTemplateRows: '1fr auto',
  gap: 1,
}

const sxButton = {
  justifySelf: 'end',
}

interface Props {
  onAddNote: (note: Note) => void
}

export const AddNoteForm = ({ onAddNote }: Props) => {
  const [noteText, setNoteText] = useState<string>('')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setNoteText(text)
  }

  const handleButtonClick = () => {
    onAddNote({ timestamp: Date.now(), text: noteText })
    setNoteText('')
  }

  const isButtonDisabled = noteText.length === 0

  return (
    <FormGroup sx={sxForm}>
      <TextField
        label={'Enter Note'}
        multiline={true}
        variant={'outlined'}
        rows={5}
        value={noteText}
        onChange={handleTextChange}
      />
      <Button
        sx={sxButton}
        variant={'contained'}
        color={'primary'}
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
      >
        Add Note
      </Button>
    </FormGroup>
  )
}
