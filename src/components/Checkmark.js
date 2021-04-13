import React from 'react';

const Checkmark = ({todo, handleToogle}) => {
  return (
    <>
      <input type="checkbox"
          className="ok"
          defaultChecked={todo.done}
          onClick={handleToogle}
      />
    </>
  )
}

export default Checkmark;
