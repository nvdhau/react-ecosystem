// a function that return another function that contains actual logic

import { loadToDosFailure, loadToDosInProgress, loadToDosSuccess } from './actions';

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