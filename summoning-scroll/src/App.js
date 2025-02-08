import React from "react";
import Login from "./pages/Login";
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;