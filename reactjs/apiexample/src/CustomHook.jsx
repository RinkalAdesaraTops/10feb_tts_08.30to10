import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useApi from './useApi'

const CustomHook = () => {
    let [data] = useApi("https://fakestoreapi.com/products/")
    let [cart] = useApi("https://fakestoreapi.com/carts/")
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products/")
    //     .then((res)=>setData(res.data))
    //     axios.get("https://fakestoreapi.com/carts")
    //     .then((res)=>setCart(res.data))

    // },[])
    // data - {
    // name:"",
    // age:23
    // }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {
           data.map((i)=>{
                return (
                    <>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.price}</td>

                    </tr>
                    
                    </>
                )
           }) 
        }
        </tbody>
      </table>
      <ul>
        {
            cart.map((i)=>{


                
                return (
                    <>
                    <li>User id -- {i.userId}</li>
                    <ul>    
                        {
                            i.products.map((i)=>{
                                return (
                                    <li>Pr Id-- {i.productId} Qty -- {i.quantity}</li>
                                )
                            })
                        }
                    </ul>
                    </>
                )
            })
        }
      </ul>
    </div>
  )
}

export default CustomHook
