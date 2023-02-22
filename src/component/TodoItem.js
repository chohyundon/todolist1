import React from "react";
import './TodoItem.css';

const TodoItem = ({todo}) =>{
  const {id, text, checked} = todo;
  return(
    <div className="TodoItem">
      <div className="btn">
        <button className="btn1">수정</button>
        <button className="btn2">삭제</button>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default TodoItem;