import { useCountStore } from "../globalState/store";

export const CounterApp = () => {
  const counter = useCountStore((state) => state.counter);

  return (
    <div style={{ marginBottom: "10px" }}>
      Actual counter number is {counter}
    </div>
  );
};
