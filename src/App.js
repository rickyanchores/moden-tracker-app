import { useState } from "react";
import Form from "./Component/Form/Form";
import TodoList from "./Component/TodoList/TodoList";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>modern tracker</h1>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      <>
        <h3 className="footer">created by Ricky A &copy;2023</h3>
      </>
    </div>
  );
}
