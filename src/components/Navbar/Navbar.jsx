import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowlogin}) => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='Navbar'>
      <div className='Navbar-title'>FOOD JOURNAL</div>
      <ul className="Navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#Explore-Menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact-us</a>
      </ul>
      <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="Navbar-Search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar