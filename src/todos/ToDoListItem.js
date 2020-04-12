import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = ({ todo, onRemovePressed, onMarkAsDonePressed }) => {
  return ( 
    <div className="todo-item-container">
      <h3>{ todo.text }</h3>
      <div className="button-container">
        { todo.isCompleted
          ? null
          : <button 
              className="completed-button"
              onClick={ () => onMarkAsDonePressed(todo.id) }
            >
              Mark as Done
            </button>
        }
        <button 
          className="remove-button"
          onClick={ () => onRemovePressed(todo.id) }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ToDoListItem;