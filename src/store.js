import { createStore, combineReducers } from 'redux';
// reduct-persist
import { persistReducer } from 'redux-persist';
import storage from  'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from './todos/reducers';

const reducers = {
  todos,
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
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  );