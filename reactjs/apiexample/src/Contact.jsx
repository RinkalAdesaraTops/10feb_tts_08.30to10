import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

const Contact = () => {
    let [count,setCount] = useState("")
    useEffect(()=>{
        for(let i=0;i<5;i++){
            count+=i
        }
        setCount(count)
    },[])
  return (
    <div>
      <h3>Count is --- {count}</h3>
      <Outlet />
    </div>
  )
}

export default Contact
