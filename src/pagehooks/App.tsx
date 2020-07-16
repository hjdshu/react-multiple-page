import React, { useState, useCallback } from 'react';
import './App.css';
import Child from './components/child';

import useGetMousemove from './hooks/useMouseover'
import useMounted from './hooks/useMounted'
import useLoginData from './hooks/useLoginData'

function App() {

  const {x, clientX} = useGetMousemove()
  const {isLogin, userName} = useLoginData()

  useMounted(() => {
    console.log('23333')
  })


  return (
    <div className='App'>
      <div>x: {x}</div> 
      <div>clientX: {clientX}</div> 

      <button>this is a line ----------------</button>

      <Child/>

      <div>登录？{userName || '还没有登录'}</div>

    </div>
  );
}

export default App;
