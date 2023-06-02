import React, { useState } from 'react';
import C1 from './components/c1';

import { CounterProvider, useCounterContext } from './store'

import useDom from './components/CompForMed/index' 

function App() {
  
  const [a, setA] = useState(0)

  const Div = function () {
    // const { count, add, asyncAdd } = useCounterContext()
    const addFunc = () => {
      setA(a+1)
      console.log('111')
    }
    return (
      <button onClick={addFunc}>add~ count:{a}</button>
    )
  }

  return (
    <CounterProvider>
      <div className='App'>
        {
          Div()
        }
        {/* <Div></Div> */}
        <C1></C1>
      </div>
    </CounterProvider>
  );
}

export default App;
