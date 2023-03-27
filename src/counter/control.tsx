import { useCountStore } from "../globalState/store";

export const Control = () => {
  const incrementCounter = useCountStore((set) => set.incrementCounter);

  return (
    <>
      <button onClick={incrementCounter}>Increment </button>
    </>
  );
};
