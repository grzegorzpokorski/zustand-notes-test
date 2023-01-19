import { Container } from "../../atoms/Container/Container";

export const AddNote = () => {
  return (
    <Container className="flex flex-row gap-3 items-start md:items-center justify-between items-center mt-5">
      <label htmlFor="add-note" className="">
        Dodaj notatkę:
      </label>
      <input type="text" id="add-note" className="grow" />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white px-3 py-2"
      >
        Dodaj
      </button>
    </Container>
  );
};
