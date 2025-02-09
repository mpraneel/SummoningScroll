//Navbar component
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Import the CSS file for the navigation bar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="logo">
        <img src="/Seal.png" alt="Wax Seal" className="wax-seal" />
          <span>Summoning Scroll</span>
        </Link>
        <ul className="navbar-links">
          {/* <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
