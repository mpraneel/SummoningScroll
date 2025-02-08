import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Login />
      </div>
    </Router>
    
  );
};

export default App;
