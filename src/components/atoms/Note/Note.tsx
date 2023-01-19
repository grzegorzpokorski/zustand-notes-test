type NoteProps = {
  id: number;
  content: string;
};

export const Note = ({ id, content }: NoteProps) => {
  return (
    <li className="py-3 flex flex-row gap-3 items-start justify-between">
      <p>{content}</p>
      <div className="flex flex-row gap-3">
        <button
          type="button"
          className="bg-blue-500 text-white hover:bg-blue-600 focus:br-blue-600 text-xs px-2 py-1"
        >
          usuń
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white hover:bg-blue-600 focus:br-blue-600 text-xs px-2 py-1"
        >
          edytuj
        </button>
      </div>
    </li>
  );
};
