import React from "react";
import Form from './Form';
import '../css/Header.css';

export const Header = ({todo,settodo}) => {

 
  return(
  <div className="card-header">
    <h1 className="card-header-title header">Hay {todo.length} tareas</h1>
    
    <Form settodo={settodo} todo={todo}/>
  </div>
  )

}


export default Header;