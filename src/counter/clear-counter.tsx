import { useCountStore } from "../globalState/store";

export const ClearCounter = () => {
  const clearCounter = useCountStore((set) => set.clearCounter);

  return (
    <>
      <button onClick={clearCounter}>Clear</button>
    </>
  );
};
