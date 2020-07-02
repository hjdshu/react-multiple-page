import React, { useContext } from 'react';
import { ThemeContext } from '../reduce';

export default function () {

  const {state, dispatch} = useContext(ThemeContext)

  return (
    <div>
      <h2>this is c3</h2>
      count: {state.count}
      <br/>
    </div>
  )
}