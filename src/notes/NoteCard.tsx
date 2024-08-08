import {Card, CardContent, IconButton, Typography} from '@mui/material'
import {Note} from './model.ts'
import {Delete} from "@mui/icons-material";

interface Props {
    note: Note;
    onDelete: (timestamp: number) => void;
}

export const NoteCard = ({note, onDelete}: Props) => (
    <Card>
        <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography>{new Date(note.timestamp).toDateString()}</Typography>
                <IconButton onClick={() => onDelete(note.timestamp)}>
                    <Delete/>
                </IconButton>
            </div>
            <Typography component={'div'}>
                {note.text.split('\n').map((text: string, key: number) => {
                    return <div key={key}>{text}</div>
                })}
            </Typography>
        </CardContent>
    </Card>
)