import "./styles.css";
import { CounterApp } from "./counter/counter";
import { Control } from "./counter/control";
import { ClearCounter } from "./counter/clear-counter";
import { TodoListContainer } from "././todo-list/container";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Zustand Test App</h1>
        <CounterApp />
        <Control />
        <ClearCounter />
      </div>

      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        ---------------
      </div>

      <div>
        <h1>ToDo List</h1>
        <TodoListContainer />
      </div>
    </div>
  );
}
