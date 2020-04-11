import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import ToDoList from './todos/ToDoList';

const App = () => (
  <div className="App">
    <ToDoList />
  </div>
);

export default hot(module)(App);