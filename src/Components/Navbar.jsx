import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to={"/"} className="navbar-brand"><img className="logoimg" src='logo.png' alt="" /></NavLink>
      <div className="menu" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={open ? "navbar-nav Open" : "navbar-nav"}>
        <li className="nav-item">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">
            <img src="./asse" alt="" />
            </button>
          </div>
        </li>
        <li className="nav-item">
          <button className="nav-button">Subscribed</button>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} className="nav-link">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/login"} className="nav-link">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
