import React, { useContext } from 'react';
import ThemeContext from '../reduce';
import C2child from './c2child';

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
      <C2child count={state.count}></C2child>
    </div>
  )
}