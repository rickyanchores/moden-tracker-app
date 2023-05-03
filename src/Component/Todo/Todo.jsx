import React from "react";

const Todo = ({ text, message, setTodos, todos, todo }) => {
  const checkHandle = () => {
    console.log("CHECKED");
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="Todo">
      <li className="todo-item">
        <h3>{text}</h3>
        <p>{message}</p>
        <button className="check" onClick={checkHandle}>
          X
        </button>
      </li>
    </div>
  );
};

export default Todo;
