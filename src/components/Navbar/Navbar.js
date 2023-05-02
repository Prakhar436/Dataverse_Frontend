import React from 'react'
import DataVerseLogo from "../../assets/DataVerseLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar className='header'>
     <ul className='links'>
       <li>Home</li>
       <li>About Us</li>
       <li>Events Gallery</li>
       <li>Roadmaps</li>
       <li>Community</li>
      </ul>
    </navbar>
  )
}

export default Navbar