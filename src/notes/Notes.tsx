import {ChangeEvent, useState} from 'react'
import {Note} from './model.ts'
import {AddNoteForm} from './AddNoteForm'
import {NoteCard} from './NoteCard.tsx'
import {Box} from '@mui/system'
import {Sorting} from "./Sorting.tsx";

const sxRoot = {
    display: 'grid',
    width: '60%',
    height: '100%',
    gridTemplateRows: 'auto auto 1fr',
    gap: 2,
}

const sxNotes = {
    display: 'grid',
    alignSelf: 'start',
    gap: 1,
}

export const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const [sortMode, setSortMode] = useState('dateN')

    const handleAddNote = (note: Note) => setNotes(notes.concat(note))

    const deleteNote = (timestamp: number) => {
        const updateNote = notes.filter((note) => note.timestamp !== timestamp)
        setNotes(updateNote)
    }

    const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSortMode(event.target.value)
    }

    const sortNote = [...notes].sort((a, b) => {
        if (sortMode === 'dateO') {
            return a.timestamp - b.timestamp
        } else if (sortMode === 'text') {
            return a.text.localeCompare(b.text)
        } else {
            return b.timestamp - a.timestamp
        }
    })

    return (
        <Box sx={sxRoot}>
            <Sorting value={sortMode} onChange={handleSortChange}/>
            <AddNoteForm onAddNote={handleAddNote}/>
            <Box sx={sxNotes}>
                {sortNote.map((note: Note) => (
                    <NoteCard key={note.timestamp} note={note} onDelete={() => deleteNote(note.timestamp)}/>
                ))}
            </Box>
        </Box>
    )
}
