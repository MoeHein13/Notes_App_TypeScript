import Note from "./Note";
import type { formDataType } from "./NoteForm";

type NoteListProps = {
  notes: formDataType[];
  delNote: (id: number) => void;
};

const NoteLilst = ({ notes, delNote }: NoteListProps) => {
  const renderNote = notes.map((note) => {
    return <Note note={note} delNote={delNote} key={note.id} />;
  });

  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return <div>{renderNote}</div>;
};

export default NoteLilst;
