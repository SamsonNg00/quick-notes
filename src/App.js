import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  // Load notes from local storage on the first render only
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    console.log("Saved notes from localStorage:", savedNotes); // Log saved data

    if (savedNotes) {
      try {
      const parsedNotes = JSON.parse(savedNotes);
      console.log("Parsed notes:", parsedNotes); // Log parsed notes
      setNotes(parsedNotes); // Set notes if parsing is successful
    } catch (error) {
      console.error("Error parsing saved notes:", error); // Catch parsing errors
    }
    }
  }, []);  // Empty dependency array ensures this runs only once on initial render

  // Save notes to local storage whenever the notes array changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));  // Converts notes array to JSON string
  }, [notes]);

  // Add or update notes
  const addOrUpdateNote = (note) => {
    if (note.id && notes.some((n) => n.id === note.id)) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n))); // Edit existing note
    } else {
      setNotes([...notes, note]); // Add new note
    }
    setCurrentNote(null); // Clear editor after saving
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditingNote = (note) => {
    setCurrentNote(note);
  };

  return (
    <div className="App">
      <h1>Quick Notes</h1>
      <NoteEditor onSave={addOrUpdateNote} currentNote={currentNote} />
      <NotesList notes={notes} onEdit={startEditingNote} onDelete={deleteNote} />
    </div>
  );
};

export default App;
