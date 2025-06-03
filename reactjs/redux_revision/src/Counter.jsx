import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from './CounterAction'

const Counter = () => {
    const count = useSelector((i)=>i.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={()=>dispatch(add())}>Add</button>
      <button onClick={()=>dispatch(minus())}>Minus</button>
    </div>
  )
}
export default Counter
