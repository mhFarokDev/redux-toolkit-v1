import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increement, reset } from './CounterSlice'

const Counter = () => {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <hr />
        <button onClick={()=>dispatch(decrement())}>--</button>
        <button onClick={()=>dispatch(increement())}>++</button>
        
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter