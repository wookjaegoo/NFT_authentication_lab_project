import React, { useState } from 'react'
import './NavBar.css'
import metadata from '../data/metadata.json'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src="theirlogo.jpg" width="100" height="50" alt="" />
        <div className="app-header">{metadata.appName}</div>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
          <Link to="/Footer" className="nav-links" onClick={closeMobileMenu}>
            Deploy
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Profile" className="nav-links" onClick={closeMobileMenu}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
