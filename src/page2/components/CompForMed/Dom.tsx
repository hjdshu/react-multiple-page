import React from "react";

export default function (props: { data: string; }) {
  const { data }  = props
  return (
    <div>
      {data}
    </div>
  )
}