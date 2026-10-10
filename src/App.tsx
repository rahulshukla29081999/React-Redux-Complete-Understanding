import React from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './reduxstore/hooks'
import { decrement, increment } from './reduxstore/slices/counter'
import MyComponent from './components/mycomponent'
import MyComTwo from './components/MyComTwo'
function App() {

  const count = useAppSelector((state) => state.counter)
   const dispatch = useAppDispatch()

  return (
    <div>
      <h1> Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComponent />
     <MyComTwo />
    </div>

     
  )
}

export default App
