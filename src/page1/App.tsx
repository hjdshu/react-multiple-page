import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.less';

import C1 from './components/c1'
import C2 from './components/c2'
import reduce, { ThemeContext } from './reduce';

function App() {

  const [state, dispatch] = useReducer(reduce, { count: 2 })

  return (
    <div className="App">

      <ThemeContext.Provider value={{state, dispatch}}>
        <C1></C1>
        <C2></C2>
      </ThemeContext.Provider>

      <button className='btn' onClick={() => {
        dispatch('add')
      }} style={{ 'marginTop': '20px' }}>add</button>

    </div>
  );
}

export default App;
