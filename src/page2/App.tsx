import React, { useState } from 'react';
import './App.css';
import C1 from './components/c1';

import { CounterProvider, useCounterContext } from './reduce'

function App() {

  const Div = function () {
    const { count, increment } = useCounterContext()
    return (
    <div onClick={increment}>count: {count}</div>
    )
  }

  return (
    <CounterProvider>
      <Div></Div>
      <C1></C1>
    </CounterProvider>
  );
}

export default App;
