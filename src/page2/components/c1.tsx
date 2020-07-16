import React, { useState } from "react";
import { useCounterContext } from '../reduce'
export default function () {
  const { count, increment } = useCounterContext()

  const increment5 = () => {
    increment(2)
  }

  return (
    <div>c1's count: {count}
      <button onClick={increment5}>increment</button>
    </div>
  )
}