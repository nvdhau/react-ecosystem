import { CREATE_TODO, REMOVE_TODO } from './actions';

// when an action occurs, reducers is called
// NOT MUTATE THE STATE
// default state is []
export const todos = (state = [], action) => {

  const { type, payload } = action;

  switch(type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newToDo = {
        text,
        isCompleted: false
      };
      return state.concat(newToDo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }
    default:
      return state;
  }
}