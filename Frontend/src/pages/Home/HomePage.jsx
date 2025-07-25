import React from "react";
import ORELITLOGO from "../../assets/orelit-logo.png";
import './HomePage.css'; // If using plain CSS

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
      <div class="flex-container">
        <div className="image-container">
          <img src={ORELITLOGO} alt="Background" className="full-width-image" />
        </div>
        <div className="rms-TextContainer">
          <h1 className="rms-heading">RMS</h1>
          <p className="rms-para">Recruitment Management System</p>
        </div>
        <div className="logout-container">
          <h3 className="logoutText">Logout</h3>
        </div>
      </div>


      </header>
      <main className="body">
        <p>This is the body section with white background.</p>
      </main>
    </div>
  );
};






export default HomePage;
