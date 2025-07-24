import React from "react";
import "./signin.css";
import logo from "../../assets/orelit-logo.png";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="left-panel">
        <div className="logo">
          <img src={logo} alt="orelit" />
        </div>
        <div className="rms">RMS</div>
        <div className="subtitle">Recruitment Management System</div>
      </div>
      <div className="right-panel">
        <h2 className="signin-title">Sign In</h2>
        <br />
        <br />
        <div className="signin-box">
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="login-btn">Login</button>
          <p className="forgot-password">Forgot Password ?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
