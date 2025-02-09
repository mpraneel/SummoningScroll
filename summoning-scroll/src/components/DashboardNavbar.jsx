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
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;