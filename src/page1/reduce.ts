import React, { Dispatch } from 'react';

interface state{
  count: number
}
type action = 'add' | 'reduce'

let dispatch:Dispatch<action> = () => {}
let stateInit:state = {
  count: 0
}

export const ThemeContext = React.createContext({
  state: stateInit,
  dispatch
})


const reduce = (state:state, action:action) => {
  if (action === 'add') {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  if (action === 'reduce') {
    return {
      ...state,
      count: state.count - 1
    }
  }
  return state
}

export default reduce

