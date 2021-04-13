import React, { useState } from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';


const App = () =>{
  const [todo, settodo] = useState([{done: false, title: 'tarea1'}]);
  return(
  <div className="wrapper">
    <div className="card-frame">
      <Header todo={todo} settodo={settodo}/>
      <TodoList todo={todo} settodo={settodo} />
    </div>
  </div>
  )
  };

export default App;