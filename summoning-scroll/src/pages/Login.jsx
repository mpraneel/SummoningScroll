import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "../styles/Login.css"; // Link to your CSS
import { auth, provider, googleSignin } from  "../firebase/firebase"

const Login = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, add login validation logic or authentication logic (e.g., Firebase)
    // For now, we assume the user is successfully logged in
    navigate("/dashboard"); // Redirect to the Dashboard page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Seal.png" alt="Wax Seal" className="wax-seal" />
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">
            Enter the Realm
          </button>
          <button type="button" onClick={() => googleSignin(auth, provider)} className="login-button">Login with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
