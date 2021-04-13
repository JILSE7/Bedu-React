import React from "react";
import "../css/Todo.css";
import Checkmark from './Checkmark.js';


export const Todo = ({todo, settodo, task})=> {
  console.log(task);
  const handleClick = () =>{

    settodo(todo.map(to => to.title === task.title {
      {title:task.title, donde: !task.done}
    }
      ))
    

    settodo([{...todo, task}])
    
  }


    return(
    <div className="list-item">
      <Checkmark todo={todo} settodo={settodo} handleClick={handleClick} />
      <p className={`${task.done ? 'done' : ''}`}>{task.title}</p>
      <div className="buttons">
        <button className="delete">
          {'\u292b'}
        </button>
      </div>
    </div>
    );

}

