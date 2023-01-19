import { useEffect, useState } from "react";
import { Container } from "../../atoms/Container/Container";
import { useNotesStore } from "../../../store/notesStore";

export const AddNote = () => {
  const [noteContent, setNoteConetent] = useState("");

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
        className="grow"
        value={noteContent}
        onChange={(e) => setNoteConetent(e.target.value)}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-3 py-2"
        onClick={() => {
          setNewNote(noteContent);
          setNoteConetent("");
        }}
      >
        Dodaj
      </button>
    </Container>
  );
};
