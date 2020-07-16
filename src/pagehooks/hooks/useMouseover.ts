import React, { useState, useEffect, useRef } from 'react';

export default function useGetMousemove () {
  const [x, setX] = useState(0)
  const [clientX, setClientX] = useState(0)

  useEffect(() => {
    const func = function (e: MouseEvent) {
      setX((x) => (x+1))
      setClientX(e.clientX)
    }
    window.addEventListener('mousemove', func, false)
    return () => {
      window.removeEventListener('mousemove', func, false)
    }
  }, [])
  return {x: x, clientX}
}