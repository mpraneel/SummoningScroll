import { useUser } from "../context/UserContext"
import { auth } from  "../firebase/firebase"
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "../styles/Login.css"; // Link to your CSS
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const emailPasswordSignIn = (auth, email, password) =>  {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = user.userCredential;
            setUser(user)  
            navigate("/dashboard"); // Redirect to the Dashboard page
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            navigate("/")
          })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, add login validation logic or authentication logic (e.g., Firebase)
    // For now, we assume the user is successfully logged in
    navigate("/dashboard")
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Seal.png" alt="Wax Seal" className="wax-seal" />
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input name="username" type="text" placeholder="Enter your username" />
          <label>Password</label>
          <input name="password" type="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">
            Enter the Realm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
