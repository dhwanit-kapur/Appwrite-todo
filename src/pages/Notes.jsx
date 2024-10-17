import React, { useState, useEffect } from "react";
import { db } from "../appwrite/database";
import { Query } from "appwrite";
import NoteForm from "../components/NoteForm";
import Note from "../components/Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.todos.list([Query.orderDesc("$createdAt")]);

    setNotes(response.documents);
  };
  return (
    <>
      <div>
        <h1>✍️ My Todo List</h1>
      </div>
      <NoteForm setNotes={setNotes} />
      <div>
        {notes.map((note) => (
          <Note key={note.$id} noteData={note} setNotes={setNotes} />
        ))}
      </div>
    </>
  );
};

export default Notes;
