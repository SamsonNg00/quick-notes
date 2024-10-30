import React, { useState, useEffect } from 'react';

const NoteEditor = ({ onSave, currentNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Populate the editor fields with the selected note’s data when editing
  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSave = () => {
    if (title && content) {
      onSave({
        title,
        content,
        id: currentNote ? currentNote.id : Date.now(),
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSave}>{currentNote ? 'Update' : 'Save'} Note</button>
    </div>
  );
};

export default NoteEditor;
