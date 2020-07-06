import React, { useState } from 'react';
import constate from "constate";

export function useCounter() {
  const [count, setCount] = useState(4);
  const increment = (number?: number) => {
    setCount(prevCount => prevCount + (number || 1));
  } 
  return { count, increment };
}
export const [CounterProvider, useCounterContext] = constate(useCounter);