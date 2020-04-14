// export const getToDos = state => state.todos;
// export const getToDosLoading = state => state.isLoading;

import { createSelector } from 'reselect';

// refactor selectors
export const getToDos = state => state.todos.data;
export const getToDosLoading = state => state.todos.isLoading;

// export const getIncompleteToDos = createSelector(
//   getToDos,
//   getToDosLoading, // can be get more selectors
//   (todos, isLoading) => isLoading
//     ? []
//     : todos.filter(todo => !todo.isCompleted),
// );

// !!! reselect cache the result output if input is not change !!!
// recompute when 'todos' is changed

export const getIncompleteToDos = createSelector(
  getToDos,
  (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedToDos = createSelector(
  getToDos,
  (todos) => todos.filter(todo => todo.isCompleted),
);
