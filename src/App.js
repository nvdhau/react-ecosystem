import React from 'react';
// import { hot } from 'react-hot-loader';
import ToDoList from './todos/ToDoList';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <AppContainer>
    <ToDoList />
  </AppContainer>
);

// export default hot(module)(App);
export default App;