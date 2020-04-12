import React, { useEffect } from 'react';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css';
// connect is higher order function
import { connect } from 'react-redux';
import { 
  loadToDos,
  removeToDoRequest,
} from './thunks';

import { markAsDoneToDo } from './actions';

// think carefully before connecting,
// because the connected component is less reusable
// should not connect to Redux, if uses multiple places

// export both connected and unconnected versions
// unconnected version for testing

//default values of todos is []
export const ToDoList = ({ 
  todos = [],
  isLoading,
  startLoadingToDos,
  onRemovePressed,
  onMarkAsDonePressed
}) => {

  useEffect(() => {
    startLoadingToDos();
  }, [])

  const loadingMessage = <div>Loading To Dos ...</div>;
  const content = 
    <div className="list-wrapper">
      <NewToDoForm />
      { todos.map(todo =>
        <ToDoListItem 
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsDonePressed={onMarkAsDonePressed}
        />
      )}
    </div>;

  return isLoading ? loadingMessage : content;
}

// may need 2 functions to pass to connect
const mapStateToProps = state => ({ // the state is the entire Redux state
  // but only need "todos"
  todos: state.todos, // => the new Component has "todos" as props
  isLoading: state.isLoading,
});

// trigger Redux action
const mapDispatchToProps = dispatch => ({
  onRemovePressed: (id) => dispatch(removeToDoRequest(id)),
  onMarkAsDonePressed: (text) => dispatch(markAsDoneToDo(text)),
  startLoadingToDos: () => dispatch(loadToDos()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

// example pass only one
// export default connect(null, mapDispatchToProps)(ToDoList);