import React, { useState } from 'react';
import './App.css';
import Child from './components/child';

import useGetMousemove from './hooks/useMouseover'
import useMounted from './hooks/useMounted'
import useCountDown from './hooks/useCountDown'

function App() {

  const {x} = useGetMousemove()

  useMounted(() => {
    console.log('23333')
  })

  const { isActive, countText, startCountDown, clearCount } = useCountDown('获取验证码', 60, 1000)

  return (
    <div className='App'>
      <div>x: {x}</div> 

      <button>this is a line ----------------</button>

      <Child/>

      <button onClick={startCountDown}>倒计时</button>
      <button onClick={clearCount}>clear倒计时</button>
      {countText}
    </div>
  );
}

export default App;
