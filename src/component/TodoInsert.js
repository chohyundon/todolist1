import React, { useState } from "react";

const TodoInsert = ({onInsertTodo})=>{
  const [value, setValue] = useState('');
  const onChange = (e) =>{
    setValue(e.target.value);
  };

  return( 
    <div>
      <div>
        <form>
          <input placeholder="값을 입력해주세요" value={value} onChange={onChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
    </div>
  );
};

export default TodoInsert;  s                                                   