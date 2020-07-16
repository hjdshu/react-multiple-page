import React, { useState } from 'react';
import constate from "constate";

export function useCounter() {
  // init state
  const [count, setCount] = useState(4);
  // action ~~ 
  const add = (number?: number) => {
    setCount(prevCount => prevCount + (number || 1));
  }  
  const increment = (number?: number) => {
    setCount(prevCount => prevCount - (number || 1));
  }
  
  const asyncAdd = async function (n:number) {
    setTimeout(() => {
      add(n)
    }, 1000)
  }
  return { count, add, increment, asyncAdd };
}

export const [CounterProvider, useCounterContext] = constate(useCounter);