import React, { useState } from 'react';
import '../css/Form.css';

const Form = ({settodo,todo}) => {

  const handleAddTodo = (e)=>{
    e.preventDefault();
    const newTodo = {done: false, title: e.target.firstChild.value};
    console.log(newTodo);
    settodo([...todo, newTodo])
  }




 
  return (
    <form className="form" onSubmit={handleAddTodo} >
      <input 
        className="form-input" 
        type="text" 
        placeholder="Escribe una tarea..."
        name='said'
      />
      <button 
        className="form-button"
        >
        Añadir
      </button>
    </form>
  );
}

export default Form;