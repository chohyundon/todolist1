import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos})=>{
  return(
    <div className="Item">
      <p>List</p>
      {todos.map(todo => (<TodoItem todo={todo} key={todo.id}/>))}
    </div>
  );
};  

export default TodoList;