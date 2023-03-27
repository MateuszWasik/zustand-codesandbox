import { useTodoListStore } from "../globalState/store";

interface RowElementProps {
  index: number;
  value: string;
}

export const RowElement = ({ index, value }: RowElementProps) => {
  const deleteRow = useTodoListStore((state) => state.deleteFromTheList);

  const handleOnClick = () => {
    deleteRow(index);
  };
  return (
    <li style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <span style={{ marginRight: "5px" }}>{value}</span>
      <button onClick={handleOnClick}>X</button>
    </li>
  );
};
