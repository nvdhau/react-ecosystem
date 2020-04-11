import React from 'react';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css'

//default values of todos is []
const ToDoList = ({todos = []}) => {
  return ( 
    <div className="list-wrapper">
      <NewToDoForm />
      { todos.map(todo => <ToDoListItem todo={todo} />) }
    </div>
  );
}
 
export default ToDoList;