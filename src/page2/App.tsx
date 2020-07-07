import React, { useState } from 'react';
import './App.css';
import C1 from './components/c1';

import { CounterProvider, useCounterContext } from './reduce'
import useGetMousemove from './hooks/useMouseover'

function App() {

  const [y, setY] = useState(true)

  const MouseMove = function () {
    const {x, refX} = useGetMousemove()
    return <div>x: {x}, refX: {refX}</div> 
  }

  const MouseMoveB = function () {
    const {x, refX} = useGetMousemove()
  return <div>B: {x}, refX: {refX}</div> 
  }

  const Div = function () {
    const { count, increment } = useCounterContext()
    const incrementFunc = () => {
      increment(2)
      if (count == 6) {
        setY(true)
      } else {
        setY(false)
      }
    }
    return (
    <button onClick={incrementFunc}>count: {count}</button>
    )
  }

  return (
    <CounterProvider>
      <div className='App'>
        { 
          y ? <MouseMove/> : null
        }
        <Div></Div>
        <C1></C1>
        {
          y ? null : <MouseMoveB/>
        }
      </div>
    </CounterProvider>
  );
}

export default App;
