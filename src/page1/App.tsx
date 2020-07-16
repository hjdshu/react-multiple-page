import React, { useReducer } from 'react';
import C1 from './components/c1'
import C2 from './components/c2'
import ThemeContext, { reduce, stateInit } from './reduce';

function App() {

  const [state, dispatch] = useReducer(reduce, stateInit)

  return (
    <div className="App">

      <button className='btn' onClick={() => {
        dispatch('add')
      }} style={{ 'marginTop': '20px' }}>App Add</button>

      <ThemeContext.Provider value={{state, dispatch}}>
        <C1></C1>
        <C2></C2>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
