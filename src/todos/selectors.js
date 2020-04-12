// export const getToDos = state => state.todos;
// export const getToDosLoading = state => state.isLoading;

//refactor selectors
export const getToDos = state => state.todos.data;
export const getToDosLoading = state => state.todos.isLoading;