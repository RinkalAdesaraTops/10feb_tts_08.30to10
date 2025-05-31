import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
            <Link href="/home">Home</Link>||
            <Link href="/contact">Contact </Link>
            <ul>
                <li>
                <Link to='/contact/c1'>Contact1</Link> || 
                <Link to="/contact/c2">Contact2</Link>
                </li>
            </ul>
                
            ||
            <Link href="/crud">CRUD</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
