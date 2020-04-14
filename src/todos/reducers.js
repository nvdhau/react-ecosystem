import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_AS_DONE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from './actions';

// export const isLoading = (state = false, action) => {
//   const { type } = action;

//   switch(type) {
//     case LOAD_TODOS_IN_PROGRESS:
//       return true;
//     case LOAD_TODOS_FAILURE:
//     case LOAD_TODOS_SUCCESS:
//       return false;
//     default:
//       return state;
//   }
// }

const initialState = { isLoading: false, data: [] };

// No Redux actions or async operations in Redux reducers
// when an action occurs, reducers is called
// NOT MUTATE THE STATE
// default state is []
export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      // return state.concat(todo);
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      // destruct and rename 'todo' to 'todoToRemove'
      const { todo: todoToRemove } = payload;
      // return state.filter(todo => todo.id !== todoToRemove.id);
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== todoToRemove.id),
      };
    }
    case MARK_AS_DONE_TODO: {
      const { todo: updatedToDo } = payload;
      // return state.map(todo => {
      //   return (todo.id === updatedToDo.id)
      //   // ? { ...todo, isCompleted:true}
      //   ? updatedToDo
      //   : todo ;
      return {
        ...state,
        data: state.data.map(
          todo => (todo.id === updatedToDo.id
            ? updatedToDo
            : todo
          ),
        ),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      // eslint-disable-next-line no-shadow
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
