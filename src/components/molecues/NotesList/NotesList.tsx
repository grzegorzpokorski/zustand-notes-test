import { useNotesStore } from "../../../store/notesStore";
import { Container } from "../../atoms/Container/Container";
import { Note } from "../../atoms/Note/Note";

export const NotesList = () => {
  const { notes } = useNotesStore();

  return (
    <Container as="ul" className="flex flex-col py-5 divide-y-2">
      {notes.length > 0 &&
        notes.map((note) => <Note key={note.id} {...note} />)}
    </Container>
  );
};
