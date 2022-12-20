import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav className="navbar ">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className="navbar-brand">
            <img src={logo} alt="" height="130"/>
              <span>YYC-PARKS</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar