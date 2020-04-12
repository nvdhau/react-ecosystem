import React, { useState } from 'react';
import './NewToDoForm.css';
// connect is higher order function
import { connect } from 'react-redux';
import { createToDo } from './actions';

// export both connected and unconnected versions
// unconnected version for testing
export const NewToDoForm = ({ todos, onCreatePressed }) => {

  const [inputValue, setInputValue] = useState('');

  return ( 
    <div className="new-todo-form">
      <input 
        className="new-todo-input" 
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button 
        className="new-todo-button"
        onClick={() => {
          const isDuplicatedText = 
            todos.some(todo => todo.text === inputValue);

          if(!isDuplicatedText){
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create Todo
      </button>
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
  onCreatePressed: (text) => dispatch(createToDo(text)),
});

// connect()(COMPONENT) => return new version of the COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);