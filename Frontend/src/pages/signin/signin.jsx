import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="left-panel">
        <div className="logo">OREL <span className="it">IT</span></div>
        <div className="rms">RMS</div>
        <div className="subtitle">Recruitment Management System</div>
      </div>
      <div className="right-panel">
        <h2 className="signin-title">Sign In</h2>
        <div className="signin-box">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-btn">Login</button>
          <p className="forgot-password">Forgot Password ?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

