import { useState } from "react";
import { useTodoListStore } from "../globalState/store";

export const AddToList = () => {
  const [newValue, setNewValue] = useState<string>("");
  const add = useTodoListStore((state) => state.addToTheList);

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newValue) return;
    add(newValue);
    setNewValue("");
  };

  return (
    <>
      <form onSubmit={handleOnClick}>
        <input
          name="newTask"
          id="newTask"
          value={newValue}
          onChange={(event) => setNewValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
