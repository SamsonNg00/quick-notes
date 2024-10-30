import React from "react";
import NoteCard from './NoteCard';

const NoteList = ({notes, onEdit, onDelete}) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default NoteList;