import React, { useCallback, useState } from 'react'
import CallbackDisplay from './CallbackDisplay'

const UsecallbackRevision = () => {
    const [info,setInfo] = useState({
        name:'',
        age:''
    })
    const [data,setData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setInfo({
            ...info,
            [name]:value
        })
    }
    const savedata = useCallback((e)=>{
        e.preventDefault()
        setData([
            ...data,
            info
        ])
    })
  return (
    <div>
      <form action="#" method='post' onSubmit={savedata}>
        <label htmlFor="">Name</label> 
        <input type="text" name='name' id='name' onChange={handleChange} value={info.name}/> 
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={info.age}/>
        <br /><br />
        <input type="submit" value="Submit Data" />
        </form ><br /><br />
        <CallbackDisplay data={data}/>
    </div>
  )
}

export default UsecallbackRevision
