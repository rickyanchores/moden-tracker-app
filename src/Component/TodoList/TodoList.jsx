import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="TodoList">
      <h3>List:</h3>
      <ul className="list">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
