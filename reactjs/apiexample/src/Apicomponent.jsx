import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const Apicomponent = () => {
    const [data,setData] = useState([])
    const [pr,setPr] = useState({})
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then((res)=> setData(res.data))
        
        axios.get("https://fakestoreapi.com/products/15")
            .then((res)=> setPr(res.data))
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
                <th>Action</th>
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
                            <td><button className='btn btn-primary'>View</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <br /><br />
      <ul>
        <li>
            Name-- {pr.title}
            Price-- {pr.price}
        </li>
      </ul>
    </div>
  )
}

export default Apicomponent
