import React from 'react'
import { useAppSelector } from '../reduxstore/hooks'

function myComTwo() {

    const count = useAppSelector((state) => state.counter)
  return (
<h1> MycompTwo : {count} </h1>  )
}

export default myComTwo