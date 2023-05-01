import React from 'react'
import DataVerseLogo from "../../assets/DataVerseLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='header'>
      <div className="container">
      <div className="nav">
     <img width={150} src={DataVerseLogo} alt="" />
     </div>
     <div >
      <ul className='links'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li> 
      </ul>
     </div>
     </div>
    </div>
  )
}

export default Navbar
