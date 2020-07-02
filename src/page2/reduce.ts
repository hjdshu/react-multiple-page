import React, { useState } from 'react';
import constate from "constate";

export function useCounter() {
  const [count, setCount] = useState(4);
  const increment = () => setCount(prevCount => prevCount + 1);
  return { count, increment };
}
export const [CounterProvider, useCounterContext] = constate(useCounter);