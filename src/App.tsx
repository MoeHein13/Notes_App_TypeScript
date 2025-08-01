import { useEffect, useState } from "react";
import NoteForm from "./Components/NoteForm";
import type { formDataType } from "./Components/NoteForm";
import NoteLilst from "./Components/NoteLilst";

const App = () => {
  const [notes, setNote] = useState<formDataType[]>(() => {
    const stored = localStorage.getItem("notes");

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const delNote = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      setNote(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="mx-auto max-w-lg bg-amber-50 mt-10 p-6 rounded-lg shadow-lg md:max-w-2xl">
        <h2 className="text-center text-2xl font-bold mb-4 ">📝 Notes App</h2>
        <NoteForm notes={notes} setNote={setNote} />
        <NoteLilst notes={notes} delNote={delNote} />
      </div>
    </>
  );
};

export default App;
