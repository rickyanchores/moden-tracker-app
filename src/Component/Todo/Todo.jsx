import React from "react";

const Todo = ({ text, setTodos, todos, todo }) => {
  const checkHandle = () => {
    console.log("CHECKED");
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="Todo">
      <li className="todo-item">
        <h3>{text}</h3>
        <button className="check" onClick={checkHandle}>
          X
        </button>
      </li>
    </div>
  );
};

export default Todo;
