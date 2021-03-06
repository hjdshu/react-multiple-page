import React, { useState } from 'react';
import C1 from './components/c1';

import { CounterProvider, useCounterContext } from './store'

function App() {

  const Div = function () {
    const { count, add, asyncAdd } = useCounterContext()
    const addFunc = () => {
      add()
    }
    return (
      <button onClick={addFunc}>add~ count:{count}</button>
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
