import { create } from "zustand";

type Note = {
  id: number;
  content: string;
};

type NotesStore = {
  notes: Note[];
  currentId: number;
  setNewNote: (content: string) => void;
  deleteNote: (id: number) => void;
  updateNote: (note: Note) => void;
};

export const useNotesStore = create<NotesStore>(
  (set): NotesStore => ({
    notes: [],
    currentId: 0,
    setNewNote: (content: string) =>
      set((state) => ({
        ...state,
        currentId: state.currentId + 1,
        notes: [...state.notes, { id: state.currentId, content: content }],
      })),
    deleteNote: (id: number) =>
      set((state) => ({
        ...state,
        notes: state.notes.filter((note) => note.id !== id),
      })),
    updateNote: ({ id, content }: Note) =>
      set((state) => ({
        ...state,
        notes: state.notes.map((note) =>
          note.id == id ? { id: note.id, content: content } : note,
        ),
      })),
  }),
);
