import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = ({ todo }) => {
  return ( 
    <div className="todo-item-container">
      <h3>{ todo.text }</h3>
      <div className="button-container">
        <button>Mark as Done</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default ToDoListItem;
