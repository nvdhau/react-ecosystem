import React from 'react';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css';
// connect is higher order function
import { connect } from 'react-redux';
import { removeToDo } from './actions';

//default values of todos is []
const ToDoList = ({ todos = [], onRemovePressed }) => {
  return ( 
    <div className="list-wrapper">
      <NewToDoForm />
      { todos.map(todo => 
        <ToDoListItem 
          todo={todo}
          onRemovePressed={onRemovePressed}
        />) }
    </div>
  );
}

// may need 2 functions to pass to connect
const mapStateToProps = state => ({ // the state is the entire Redux state
  // but only need "todos"
  todos: state.todos, // => the new Component has "todos" as props
});

// trigger Redux action
const mapDispatchToProps = dispatch => ({
  onRemovePressed: (text) => dispatch(removeToDo(text)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

// example pass only one
// export default connect(null, mapDispatchToProps)(ToDoList);