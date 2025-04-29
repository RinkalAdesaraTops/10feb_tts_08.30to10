import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apicomponent = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then((res)=> setData(res.data))
            
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>setData(json))
    })
  return (
    <div>
      <h3>Api Example</h3>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                            <td>{i.title}</td>
                            <td>{i.price}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Apicomponent
