import { createStore, combineReducers, applyMiddleware } from 'redux';
// reduct-persist
import { persistReducer } from 'redux-persist';
import storage from  'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, isLoading } from './todos/reducers';

const reducers = {
  todos,
  isLoading,
};

const rootReducer = combineReducers(reducers);

// reduct-persist
const persistConfig = {
  key: 'root',
  storage, // local storage of the web
  stateReconciler: autoMergeLevel2, // how depth 
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => 
  // createStore(rootReducer);
  createStore(
    persistedReducer,
    // connect to redux dev tools extension
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
  );