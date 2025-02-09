import React from "react";
import Login from "./pages/Login";
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Dashboard from "./pages/Dashboard";
import Intro from "./pages/Intro";
import Guilds from "./pages/Guilds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/Guilds" element = {<Guilds />} />
      </Routes>
    </Router>
  );
}

export default App;