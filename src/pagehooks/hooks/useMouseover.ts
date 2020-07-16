import React, { useState, useEffect, useRef } from 'react';

export default function useGetMousemove () {
  const [x, setX] = useState(0)

  useEffect(() => {
    const func = function (e:any) {
      // console.log('move', e.clientX)
      setX((x) => (x+1))
    }
    window.addEventListener('mousemove', func, false)
    return () => {
      window.removeEventListener('mousemove', func, false)
    }
  }, [])
  return {x: x}
}