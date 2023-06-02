import Dom from './Dom'
import { useState } from 'react'
import React from 'react'

const UseCompForMed = () => {

  const [data, setData] = useState('hello')

  return {
    CompForMed: (<Dom data="data"></Dom>),
    methods: {
      getDomData () {
        console.log(data)
      },
      setDomData (data: import("react").SetStateAction<string>) {
        setData(data)
      }
    }
  }
}

export default UseCompForMed