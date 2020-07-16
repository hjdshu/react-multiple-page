import React, { useState } from "react";

import useGetMousemove from '../hooks/useMouseover'

export default function () {
  const {x} = useGetMousemove()

  return (
    <div>child's x: {x}</div>
  )
}