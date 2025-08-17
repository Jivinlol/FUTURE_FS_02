import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <div className='left'>
            <Link to='/allproducts'>
              <li>Plants</li>
            </Link>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/allproducts'>
              <li>Lifestyle</li>
            </Link>
        </div>
        <div className='right'>
            <Link to='/login'><li>Login</li></Link>
            <Link to='/cart'>< IoCartOutline  size={20}/></Link>
            <button>Contact us</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
