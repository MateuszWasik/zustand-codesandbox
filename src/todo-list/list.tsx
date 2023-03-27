import { useTodoListStore } from "../globalState/store";
import { RowElement } from "./row-element";

export const List = () => {
  const list = useTodoListStore((state) => state.list);

  console.log("czemu tutaj nie leci render????", list);

  return (
    <div>
      {list.map((element, index) => {
        return <RowElement index={index} value={element} />;
      })}
    </div>
  );
};
