import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const inputHandleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    console.log("Click");
    e.preventDefault(e);
    setTodos([...todos, { text: input, id: Math.random() * 1000 }]);
    setInput("");
  };

  return (
    <form action="">
      <input
        value={input}
        className="inputField"
        type="text"
        placeholder="type here"
        onChange={inputHandleChange}
      />
      <button className="addTodo" onClick={addTodo}>
        +
      </button>
    </form>
  );
};

export default Form;
