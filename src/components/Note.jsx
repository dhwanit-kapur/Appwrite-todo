import React, { useState } from "react";
import { db } from "../appwrite/database";
import DeleteIcon from "../assets/DeleteIcon";

const Note = ({ noteData, setNotes }) => {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    db.todos.update({ completed }, note.$id);
    setNote({ ...note, completed: completed });
  };

  const handleDelete = async () => {
    db.todos.delete(note.$id);
    setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
  };

  return (
    <div className="note-wrapper">
      <span className="note-body" onClick={handleUpdate}>
        {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
      </span>
      <div onClick={handleDelete}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
