import React, { useState } from "react";
import './App.css';
import Template from "./component/Template";
import TodoList from "./component/TodoList";
import TodoInsert from "./component/TodoInsert";

const App =() =>{
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "할일1",
      checked: true
    },
    {
      id:2,
      text: "할일2",
      checked: false 
    },
    {
      id:3,
      text: "할일3",
      checked: true
    },
  ]);

  return(
    <div>
      <Template>
      <div className="container">
        <TodoInsert />
        <input type="text" className="input-box"/>
        <button>추가</button>
      </div>
        <TodoList todos={todos}/>
      </Template>
    </div>  
  );
};

export default App;