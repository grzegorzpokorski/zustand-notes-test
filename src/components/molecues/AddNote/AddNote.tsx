import { useEffect, useState } from "react";
import { Container } from "../../atoms/Container/Container";
import { useNotesStore } from "../../../store/notesStore";
import { twMerge } from "tailwind-merge";

export const AddNote = () => {
  const [noteContent, setNoteConetent] = useState("");
  const [isError, setIsError] = useState(false);

  const { setNewNote, currentId, notes } = useNotesStore();

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <Container className="flex flex-row gap-3 items-start md:items-center justify-between items-center mt-5">
      <label htmlFor="add-note">Dodaj notatkę:</label>
      <input
        type="text"
        id="add-note"
        className={twMerge("grow", isError && "border-red-500 bg-red-100")}
        value={noteContent}
        onChange={(e) => {
          setNoteConetent(e.target.value);
          if (e.target.value) {
            setIsError(false);
          }
        }}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-3 py-2"
        onClick={() => {
          if (noteContent) {
            setNewNote(noteContent);
            setNoteConetent("");
          } else {
            setIsError(true);
          }
        }}
      >
        Dodaj
      </button>
    </Container>
  );
};
