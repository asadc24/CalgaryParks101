import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo-no-background.png'




const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav className="navbar ">
          <div className="navbar-brand">
            <img src={logo} alt="" height="130"/>
              <span>YYC-PARKS</span>
          </div>


      </nav>
      
    </div>
  );
}

export default Navbar