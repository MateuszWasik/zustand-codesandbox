import { useTodoListStore } from "../globalState/store";

interface RowElementProps {
  index: number;
  value: string;
}

export const RowElement = ({ index, value }: RowElementProps) => {
  const deleteRow = useTodoListStore((state) => state.deleteFromTheList);

  const handleOnClick = () => {
    console.log("this is value", value, " and index: ", index);
    deleteRow(index);
  };
  return (
    <li>
      <div>
        <span>{value}</span>
        <button onClick={handleOnClick}>X</button>
      </div>
    </li>
  );
};
