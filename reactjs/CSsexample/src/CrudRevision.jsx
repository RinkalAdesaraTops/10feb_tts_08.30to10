import React, { useState } from 'react'

const CrudRevision = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const [allData,setAllData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id != ''){
            let res = allData.map((i,index)=>{
                if(index==id){
                    i = data
                }
                return i
            })
            setAllData(res)
        } else {
            setAllData([
                ...allData,
                data
            ])
        }
        setId('')
        setData({
            name:"",
            age:"",
            salary:''
        })
        
    }
    const delData = (id)=>{
        let res = allData.filter((i,index)=>{
            return index != id
        })
        setAllData(res)
    }
    const editData = (id)=>{
        let res = allData.find((i,index)=>{
            return index == id
        })
        setData(res)
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
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
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

export default CrudRevision
