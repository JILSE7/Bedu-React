import React from "react";
import Form from './Form';
import '../css/Header.css';

export const Header = ({todos,settodos}) => {
    const completed = todos.filter(todo => todo.done === true)
    const incompleted = todos.filter(todo => todo.done !== true)
    
  return(
  <div className="card-header">
    <div className="header">
      <h1>Tienes <span className="span-header">{todos.length}</span> {(todos.length)> 2 ? 'Tareas': 'Tarea'}</h1>
      <p className="task">Completadas:  <span className="span-header">{completed.length}</span></p>
      <p className="task">Faltan: <span className="span-header">{incompleted.length}</span></p>
    </div>
   
    
    <Form settodos={settodos} todos={todos}/>
  </div>
  )

}


export default Header;