import React, { Dispatch } from 'react';

// 定义state和action的类型
interface state{
  count: number
}
type action = 'add' | 'reduce'

let dispatch:Dispatch<action> = () => {}

// state的初始化值
export const stateInit:state = {
  count: 0
}

// 这个reduce函数需要在app.tsx的最外层初始化一次
export const reduce = (state:state, action:action) => {
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

// 每个子组件需要依赖的context实例
const ThemeContext = React.createContext({
  state: stateInit,
  dispatch
})

export default ThemeContext


