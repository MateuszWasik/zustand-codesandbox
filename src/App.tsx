import "./styles.css";
import { CounterApp } from "./counter/counter";
import { Control } from "./counter/control";
import { ClearCounter } from "./counter/clear-counter";
import { TodoListContainer } from "././todo-list/container";

export default function App() {
  return (
    <div className="App">
      <h1>Zustand Test App</h1>
      <div>
        <h2>Counter</h2>
        <CounterApp />
        <Control />
        <ClearCounter />
      </div>

      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        ---------------
      </div>

      <div>
        <h2>ToDo List</h2>
        <TodoListContainer />
      </div>
    </div>
  );
}
