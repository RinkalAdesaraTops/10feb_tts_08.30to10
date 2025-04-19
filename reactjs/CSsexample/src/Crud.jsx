import React from 'react'
import { useState } from 'react'

const crud = () => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [id,setId] = useState('')
    const [data,setData] = useState([])
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            //update
            let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age = age
                }
                return i
            })
            setData(res)
        } else {
            //insert
            setData([
                ...data,
                {
                    name:name,
                    age:age
                }
            ])
        }
       
        setName('')
        setAge('')
        setId('')
    }
    const delData = (id)=>{
        //1 2 4 5 -- id=3
        let res = data.filter((i,index)=>{
                    return index!=id
        })
        setData(res)
    }
    const editData = (id)=>{
        let res = data.find((i,index)=>{
            return index==id
        })
        setName(res.name)
        setAge(res.age)
        setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} value={name}/><br/> <br/>
        <label htmlFor="">Age:</label>
        <input type="text" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)} /><br/> <br/> 
        <input type="submit" value="Save Data" /><br/> <br/>
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                            <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default crud
