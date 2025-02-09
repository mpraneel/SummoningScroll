import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/Seal.png" alt="Wax Seal" className="wax-seal" />
          <span>Summoning Scroll</span>
        </Link>
        <ul className="navbar-links">
        <li className="navbar-item">
            <Link to ="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/inventory" className="navbar-link">
              Inventory
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/guilds" className="navbar-link">
              Guilds
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/ledger" className="navbar-link">
              Ledger
            </Link>
          </li>
          <li className="navbar-shop">
            <Link to="/shop" className="navbar-link">
              Shop
            </Link>
          </li>
          <li className="navbar-profile">
            <Link to="/profile" className="navbar-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;