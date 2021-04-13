import React from "react";
import {Todo} from './Todo';
import "../css/TodoList.css";

export const  TodoList = ({todo, settodo})=>{
    return (
      <div className="list-wrapper">
       
        {todo.map(to =>(
            <Todo todo={todo} task= {to} settodo={settodo} key={to.title}/>
        ))}
      </div>
    )
  }


export default TodoList;