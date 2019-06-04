import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ParentCounter from './views/ParentCounter/ParentCounter';
import ParentContainer from './containers/ParentContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <ParentContainer/>
    </div>
  )
}

export default App;
