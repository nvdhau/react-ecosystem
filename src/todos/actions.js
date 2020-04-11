export const CREATE_TODO = 'CREATE_TODO';
export const createToDo = (text) => {
  return {
    type: CREATE_TODO,
    payload: { text },
  }
};

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeToDo = (text) => {
  return {
    type: CREATE_TODO,
    payload: { text },
  }
}