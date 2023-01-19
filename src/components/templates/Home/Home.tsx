import { Children } from "react";
import { Layout } from "../../molecues/Layout/Layout";
import { NotesList } from "../../molecues/NotesList/NotesList";
import { AddNote } from "../../molecues/AddNote/AddNote";

export const Home = () => (
  <Layout>
    <AddNote />
    <NotesList />
  </Layout>
);
