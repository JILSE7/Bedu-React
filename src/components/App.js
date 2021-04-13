import React, { useEffect, useState } from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';


const App = () =>{

  const init =  () => JSON.parse(localStorage.getItem('todos-bedu')) || [];

  const [todos, settodos] = useState(init);

  //useEffect
  useEffect(() => {
    //cada que cambia el estado se guarda en el localStorage
    localStorage.setItem('todos-bedu',JSON.stringify(todos))
  }, [todos])


  return(
  <div className="wrapper">
    <div className="card-frame">
      <Header todos={todos} settodos={settodos}/>
      <TodoList todos={todos} settodos={settodos} />
    </div>
  </div>
  )
  };

export default App;