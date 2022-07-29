import React, { useState } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoLists from "./TodoLists";

function TodoList() {
  const [state, setState] = useState([ ])
  const [value, setValue] = useState(' ')
  console.log(setValue)
 
  console.log(value)
  console.log(state)
  console.log(state.todos)
  const handleAddTodo = (event) => {
    event.preventDefault();
    // const todo = event.target.todo.value.trim();
    // setValue( event.target.value.trim())
    setState((prevState) => {
      return [
        ...prevState, value
      ]
    });
    setValue(' ')

  };


  return (
    <div className="container">
      <Header />
      <AddTodo handleAddTodo={handleAddTodo} vale={value} val={setValue} />
      <TodoLists todos={state} />
    </div>
  );

}
export default TodoList