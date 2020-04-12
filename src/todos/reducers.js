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
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      // destruct and rename 'todo' to 'todoToRemove'
      const { todo: todoToRemove } = payload;
      return state.filter(todo => todo.id !== todoToRemove.id);
    }
    case MARK_AS_DONE_TODO: {
      const { todo: todoToUpdate } = payload;
      return state.map(todo => {
        return (todo.id === todoToUpdate.id) 
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