import type { formDataType } from "./NoteForm";

type NoteListProps = {
  note: formDataType;
  delNote: (id: number) => void;
};

const Note = ({ note, delNote }: NoteListProps) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-md border-l-4 mb-4 flex items-center justify-between
        ${
          note.priority === "High"
            ? "border-l-red-500"
            : note.priority === "Medium"
            ? "border-l-yellow-500"
            : "border-l-green-500"
        }`}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-md text-gray">
          <strong>Category: </strong>
          {note.category}
        </p>
        <p className="text-md text-gray">
          <strong>Priority: </strong>
          {note.priority}
        </p>
        <p className="mt-2">{note.description}</p>
      </div>

      <button
        onClick={() => {
          if (note.id !== undefined) delNote(note.id);
        }}
        className="p-2 mx-3 cursor-pointer text-2xl"
      >
        🗑️
      </button>
    </div>
  );
};

export default Note;
