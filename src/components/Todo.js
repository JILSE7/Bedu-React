import React from "react";
import "../css/Todo.css";
import Checkmark from './Checkmark.js';


export const Todo = ({todos, settodos, todo})=> {

  const handleToogle = () =>{
   const toggle = todos.map(t => (t.title === todo.title) ? {...t, done:!(t.done)} : t)
   settodos(toggle)    

  }

  const handleDelete = (e) =>{
    e.preventDefault();
    const animation = e.target.parentElement.parentElement.classList;
    animation.remove('animate__bounceInDown');
    animation.add('animate__fadeOutRight')
    console.log(animation);
    setTimeout(() => {
      settodos(todos.filter(t => t.title !== todo.title))     
    }, 700);
 

  }


    return(
    <div className="list-item animate__animated animate__bounceInDown">
      <Checkmark todo={todo} settodo={settodos} handleToogle={handleToogle} />
      <p className={`${todo.done ? 'done' : ''}`}>{todo.title}</p>
      <div className="buttons">
        <button className="delete" onClick={handleDelete}> {'\u292b'} </button>
      </div>
    </div>
    );

}

