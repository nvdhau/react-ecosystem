import { 
  CREATE_TODO,
  REMOVE_TODO,
  MARK_AS_DONE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from './actions';

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch(type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_SUCCESS:
      return false;
    default:
      return state;
  }
}

// No Redux actions or async operations in Redux reducers
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
    case MARK_AS_DONE_TODO: {
      const { text } = payload;
      return state.map(todo => {
        return (todo.text === text) 
        ? { ...todo, isCompleted:true}
        : todo ;
      })
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS: {
      
    }
    case LOAD_TODOS_FAILURE: {

    }
    default:
      return state;
  }
}