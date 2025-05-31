import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
  let [count,setCount] = useState(10)
  let [num,setNum] = useState(1)
  //value freeze
  //prevent
  //memoized value
  const addCal = (n)=>{
    console.log('addcalc func called..');   
    for(let i=0;i<10000;i++){
        n+=i
    }
    return n
  }
  const calc = useMemo(()=>{
    return addCal(count)
  },[count])
  const addCounter = ()=>{
    console.log("counter called..");
    setCount(count+1)
  }
  const addNum = ()=>{
    console.log("number called..");
    setNum(num+1)
  }
  return (
    <div>
      <h3>Count is --  {count}</h3>
      <button onClick={addCounter}>Add Count</button>
      <h3>Number is --  {num}</h3>
      <button onClick={addNum}>Add Number</button>
      <h3>Calc function is -- {calc}</h3>
    </div>
  )
}

export default UseMemoExample
