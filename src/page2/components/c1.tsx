import React, { useState } from "react";
import { useCounterContext } from '../reduce'
export default function () {
  
  const { count } = useCounterContext()
  return (
    <div>c1's count: {count}</div>
  )
}