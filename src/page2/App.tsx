import React, { useState } from 'react';
import './App.css';
import C1 from './components/c1';

import { CounterProvider, useCounterContext } from './reduce'

function App() {

  const Div = function () {
    const { count, increment } = useCounterContext()
    const incrementFunc = () => {
      increment(2)
    }
    return (
    <button onClick={incrementFunc}>count: {count}</button>
    )
  }

  return (
    <CounterProvider>
      <div className='App'>
        <Div></Div>
        <C1></C1>
      </div>
    </CounterProvider>
  );
}

export default App;
