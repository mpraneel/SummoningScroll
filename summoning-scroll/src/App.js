import React from "react";
import Login from "./pages/Login";
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Dashboard from "./pages/Dashboard";
import Intro from "./pages/Intro";
import Guilds from "./pages/Guilds";
import Ledger from "./pages/Ledger";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/Guilds" element = {<Guilds />} />
        <Route path = "/Ledger" element = {<Ledger />} />
        <Route path = "/Inventory" element = {<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;