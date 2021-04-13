import React, { useState } from 'react';
import '../css/Form.css';

const Form = ({settodos,todos}) => {

  console.log(settodos);
  const handleAddTodo = (e)=>{
    e.preventDefault();
    const newTodo = {done: false, title: e.target.firstChild.value};
    settodos([...todos, newTodo])
    e.target.reset();
  }

  return (
    <form className="form" onSubmit={handleAddTodo} >
      <input 
        className="form-input" 
        type="text" 
        placeholder="Escribe una tarea..."
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