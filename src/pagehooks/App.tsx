import React, { useState } from 'react';
import './App.css';
import Child from './components/child';

import useGetMousemove from './hooks/useMouseover'

function App() {

  const {x} = useGetMousemove()

  return (
    <div className='App'>
      <div>x: {x}</div> 

      <button>this is a line ----------------</button>

      <Child/>
    </div>
  );
}

export default App;
