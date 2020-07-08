import React, { useContext } from 'react';
import ThemeContext from '../reduce';
import C3 from './c3';

export default function () {

  const {state, dispatch} = useContext(ThemeContext)

  return (
    <div>
      <h2>this is c2</h2>
      count: {state.count}
      <br/>
      <button onClick={()=>{
        dispatch('reduce')
      }}>reduce</button>
      <C3 count={state.count}></C3>
    </div>
  )
}