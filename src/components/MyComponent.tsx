import React from 'react'
import { useAppSelector } from '../reduxstore/hooks'

function MyComponent() {

    const count = useAppSelector((state) => state.counter)
  return (
<h1> Mycomp : {count} </h1>  )
}

export default MyComponent