import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFun, delFun, updFun } from './redux/UserAction'

const UserCrudRedux = () => {
const [info,setInfo]= useState({ 
  name:'',
  age:'',
  salary:''
})
const data= useSelector((state)=>state.data)
const [id,setId]=useState('')
const dispatch =useDispatch()
const saveData=(e)=>{
  e.preventDefault()
  if(id!=''){
      dispatch(updFun(id,info))
  } else {
      dispatch(addFun(info))
  }
  
  setInfo({
     name:'',
    age:'',
    salary:''
  })
  setId('')
}
const handle =(e)=>{
      const {name,value}=e.target
      setInfo({...info,[name]:value})
}
const editData = (id)=>{
    let res = data.find((i,index)=>index == id)
    setInfo(res)
    setId(id)
}
  return (
    <div>
    <form action="#" method='post' onSubmit={saveData} >
    <label htmlFor="">Name: </label>
    <input type="text" name='name' id='name'  value={info.name} onChange={handle} /><br /><br />

    <label htmlFor="">Age: </label>
    <input type="number" name='age'  value={info.age} id='age' onChange={handle} /><br /><br />

    <label htmlFor="">Salary: </label>
    <input type="number" name='salary' value={info.salary} id='salary' onChange={handle}/><br /><br />

    <input type="submit" value='save' />
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
                {
                  data.map((i,index)=>
                  
                    (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>
                              <button onClick={()=>editData(index)}>Edit</button>
                              <button onClick={()=>dispatch(delFun(index))}>Delete</button>
                            </td>
                        </tr>
                    )
                  
                  )
                }
        </tbody>
      </table>
    </div>
  )
}

export default UserCrudRedux
