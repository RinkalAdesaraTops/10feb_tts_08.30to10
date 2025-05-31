import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCrud = () => {
    const [data,setData] = useState({
            name:"",
            age:"",
            salary:""
    })
    const [allData,setAllData] = useState([])
    const [id,setId] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const disp = ()=>{
        axios.get("http://localhost:3000/users")
            .then((res)=>setAllData(res.data))
    }
    useEffect(()=>{
        disp()
    },[])
    const saveData = (e)=>{
        e.preventDefault()
        if(id != ''){
            //update
            axios.put("http://localhost:3000/users/"+id,data)
            .then(()=>console.log("updated..."))
        } else {
            //insert
            axios.post("http://localhost:3000/users",data)
                .then(()=>console.log("inserted..."))
        }
        
        setId('')
        setData({
            name:"",
            age:"",
            salary:''
        })
        disp()
    }
    const delData = (id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        .then(()=>console.log("deleted..."))
        disp()
    }
    const editData = (id)=>{
        axios.patch("http://localhost:3000/users/"+id)
        .then((res)=>setData(res.data)) 
        
        setId(id)
    }
    return (
    
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} /> <br /><br />
        Age:
        <input type="text" name="age" id="age" value={data.age} onChange={handleChange} /> <br /><br />
        Salary:
        <input type="text" name="salary" id="salary" value={data.salary} onChange={handleChange} /> <br /><br />
        <input type="submit" value="Save"/> <br /><br />
      </form>
      <table border={'2'} width={"400px"} cellSpacing={'20px'}>

        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                allData.map((i,index)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>
                                <button onClick={()=>editData(i.id)}>Edit</button>
                                <button onClick={()=>delData(i.id)}>Delete</button>
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

export default ApiCrud
