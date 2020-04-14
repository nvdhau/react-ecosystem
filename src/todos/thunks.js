// a function that return another function that contains actual logic

import {
  loadToDosFailure,
  loadToDosInProgress,
  loadToDosSuccess,
  createToDo,
  removeToDo,
  markAsDoneToDo,
} from './actions';

export const displayAlert = (text) => () => {
  alert(`${text}`);
};

export const loadToDos = () => async (dispatch, getState) => {
  try {
    dispatch(loadToDosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();

    dispatch(loadToDosSuccess(todos));
  } catch (err) {
    // console.log("Error in loadToDos");
    dispatch(loadToDosFailure());
    dispatch(displayAlert(err));
  }
};

export const addToDoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(
      'http://localhost:8080/todos',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body,
      },
    );

    const todo = await response.json();
    dispatch(createToDo(todo));
  } catch (err) {
    // console.log("Error in addToDoRequest");
    dispatch(displayAlert(err));
  }
};

export const removeToDoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}`,
      {
        method: 'delete',
      },
    );

    const removedToDo = await response.json();
    dispatch(removeToDo(removedToDo));
  } catch (err) {
    // console.log("Error in removeToDoRequest");
    dispatch(displayAlert(err));
  }
};

export const markAsDoneToDoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: 'post',
      },
    );

    const updatedToDo = await response.json();
    dispatch(markAsDoneToDo(updatedToDo));
  } catch (err) {
    // console.log("Error in markAsDoneToDoRequest");
    dispatch(displayAlert(err));
  }
};
