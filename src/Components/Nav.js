import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="Customer_Service">Customer Service</Link>
      <Link to='/About'>About Us</Link>
    </div>
  )
}

export default Nav