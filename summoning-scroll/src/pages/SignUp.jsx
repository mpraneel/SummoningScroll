import React from "react"

const SignUp = () => {
    return (
    <div className="signup-container">
      <div className="signup-box">
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
  )
}