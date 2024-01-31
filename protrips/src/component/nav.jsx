import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1><Link to={"/"} className='logo'>KALVIUM ❤️</Link></h1>
        <ul>
            <li><Link to={"/about"} className='link'>About</Link></li>
            <li><Link to={"/form"} className='link'>Registration Form</Link></li>
        </ul>
    </div>
  )
}