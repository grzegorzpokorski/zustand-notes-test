import { useState } from "react";
import { useNotesStore } from "../../../store/notesStore";

type NoteProps = {
  id: number;
  content: string;
};

export const Note = ({ id, content }: NoteProps) => {
  const { deleteNote, updateNote } = useNotesStore();
  const [isEdited, setIsEdited] = useState(false);
  const [newContent, setNewContent] = useState(content);

  return (
    <li className="py-3 flex flex-row gap-3 items-start md:items-center justify-between">
      {isEdited ? (
        <>
          <input
            type="text"
            className="grow"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </>
      ) : (
        <p className="my-2 mx-3 border-2 border-transparent grow">{content}</p>
      )}
      <div className="flex flex-col md:flex-row gap-3">
        {isEdited ? (
          <>
            <button
              type="button"
              className="bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 text-xs px-2 py-1"
              onClick={() => {
                updateNote({ id: id, content: newContent });
                setIsEdited(false);
                setNewContent(newContent);
              }}
            >
              zapisz
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 text-xs px-2 py-1"
              onClick={() => {
                setIsEdited(false);
                setNewContent(content);
              }}
            >
              anuluj
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 text-xs px-2 py-1"
              onClick={() => deleteNote(id)}
            >
              usuń
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 text-xs px-2 py-1"
              onClick={() => setIsEdited(true)}
            >
              edytuj
            </button>
          </>
        )}
      </div>
    </li>
  );
};
