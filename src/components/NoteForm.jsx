import React from "react";
import { db } from "../appwrite/database";

const NoteForm = ({ setNotes }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteBody = e.target.body.value;

    if (noteBody === "") return;

    try {
      const payload = { body: noteBody };
      const response = await db.todos.create(payload);
      setNotes((prevState) => [response, ...prevState]);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="todo-form">
        <input type="text" name="body" placeholder="🤔 What's on the agenda?" />
      </form>
    </div>
  );
};

export default NoteForm;
