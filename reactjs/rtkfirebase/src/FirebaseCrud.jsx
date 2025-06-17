import React, { useEffect, useState } from 'react'
import {db} from './firebase'
import { addDoc,collection, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc } from 'firebase/firestore'
const FirebaseCrud = () => {
    const [info,setInfo] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const [alldata,setAllData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setInfo({
            ...info,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        if(id !=''){
            let result = await updateDoc(doc(db,"emp",id),info)
        } else {
            let result = await addDoc(collection(db,"emp"),info)
        }
        setInfo({
            name:"",
            age:"",
            salary:''
        })
        setId('')
    }
    const delData = async(id)=>{
        await deleteDoc(doc(db,"emp",id))
    }
    const editData = async(id)=>{
        let res = await getDoc(doc(db,"emp",id))
        console.log(res.data());
        setInfo(res.data())
        setId(id)      
    }   
    useEffect(()=>{
        const q = query(collection(db,"emp"))      
        let result = onSnapshot(q,(i)=>{
            let arr = []
            i.forEach((j)=>{
                arr.push({...j.data(),id:j.id})
            })
            setAllData(arr)
        })
        return ()=> result()
    },[])
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={info.name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Age:</label>
        <input type="text" name="age" id="age" value={info.age} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="salary" value={info.salary} onChange={handleChange} />
        <br /><br />
        <input type="submit" name="save" value="Save Data"/>
        <br /><br />
      </form>
      <table>
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
                alldata.map((i)=>{
                    return(
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

export default FirebaseCrud
