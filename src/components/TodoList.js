import React from "react";
import {Todo} from './Todo';
import "../css/TodoList.css";

export const  TodoList = ({todos, settodos})=>{
    return (
      <div className="list-wrapper">
       
        {todos.map((todo, i) =>(
            <Todo todos={todos} todo= {todo} settodos={settodos} key={i}/>
        ))}
      </div>
    )
  }


export default TodoList;