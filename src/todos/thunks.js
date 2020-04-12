// a function that return another function that contains actual logic

import { 
  loadToDosFailure, 
  loadToDosInProgress, 
  loadToDosSuccess,
  createToDo,
} from './actions';

export const displayAlert = (text) => () => {
  alert(`${text}`);
}

export const loadToDos = () => async (dispatch, getState) => {
  try{
    dispatch(loadToDosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();

    dispatch(loadToDosSuccess(todos));
  }catch(err) {
    dispatch(loadToDosFailure());
    dispatch(displayAlert(err));
  }
}

export const addToDoRequest = (text) => async dispatch => {
  try{
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body,
      }
    );

    const todo = await response.json();
    dispatch(createToDo(todo));
  }catch(err){
    dispatch(displayAlert(err));
  }
}