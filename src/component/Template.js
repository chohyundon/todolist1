import React from "react";
import './Template.css';

const Template = ({children}) =>{
  return(
    <div>
      <div className="title">소통해요🙌</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;