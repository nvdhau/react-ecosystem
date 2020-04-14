import React, { useState } from 'react';
import styled from 'styled-components';
// connect is higher order function
import { connect } from 'react-redux';
// import { createToDo } from './actions';
import { addToDoRequest } from './thunks';
import { getToDos } from './selectors';

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewToDoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewToDoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

// export both connected and unconnected versions
// unconnected version for testing
export const NewToDoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <FormContainer>
      <NewToDoInput
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <NewToDoButton
        onClick={() => {
          const isDuplicatedText = todos.some(todo => todo.text === inputValue);

          if (!isDuplicatedText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create Todo
      </NewToDoButton>
    </FormContainer>
  );
};

// may need 2 functions to pass to connect
const mapStateToProps = state => ({ // the state is the entire Redux state
  // but only need "todos"
  // todos: state.todos, // => the new Component has "todos" as props
  todos: getToDos(state),
});

// trigger Redux action
const mapDispatchToProps = dispatch => ({
  onCreatePressed: (text) => dispatch(addToDoRequest(text)),
});

// connect()(COMPONENT) => return new version of the COMPONENT
const ReduxNewToDoForm = connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
export default ReduxNewToDoForm;
