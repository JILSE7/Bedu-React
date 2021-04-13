import React from 'react';

const Checkmark = ({todo,settodo, handleClick}) => {
 
  return (
    <>
      <input type="checkbox"
          className="ok"
          defaultChecked={todo.done}
          onClick={handleClick}
      />
    </>
  )
}

export default Checkmark;
