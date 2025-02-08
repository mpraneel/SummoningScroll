import React from "react";
import "../styles/Login.css"; // Link to your CSS
import { auth, provider, googleSignin } from  "../firebase/firebase"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Seal.png" alt="Wax Seal" className="wax-seal" />
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">Enter the Realm</button>
          <button type="button" onClick={() => googleSignin(auth, provider)} className="login-button">Login with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
