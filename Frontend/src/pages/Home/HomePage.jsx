import React from "react";
import ORELITLOGO from "../../assets/orelit-logo.png";
import "./HomePage.css"; // If using plain CSS
import Departments from "../../assets/HomePage/Dept.jpg";
import Users from "../../assets/HomePage/Users.jpg";
import Application from "../../assets/HomePage/Application.jpg";
import Candidates from "../../assets/HomePage/Candidates.jpg";
import JobProfile from "../../assets/HomePage/JobProfile.jpg";
import Logs from "../../assets/HomePage/Logs.jpg";
import Profile from "../../assets/HomePage/Profile.jpg";
import Vacancies from "../../assets/HomePage/Vacancies.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div class="flex-container">
          <div className="image-container">
            <img
              src={ORELITLOGO}
              alt="Background"
              className="full-width-image"
            />
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
        <div className="grid-container">
          <div className="Departments grid-item">
            <img src={Departments} alt="Departments" />
            <span>Departments</span>
          </div>
          <div className="Users grid-item">
            <img src={Users} alt="Users" />
            <span>Users</span>
          </div>
          <div className="JobProfile grid-item">
            <img src={JobProfile} alt="Job Profile" />
            <span>Job Profile</span>
          </div>
          <div className="Vacancies grid-item">
            <img src={Vacancies} alt="Vacancies" />
            <span>Vacancies</span>
          </div>
          <div className="Application grid-item">
            <img src={Application} alt="Application" />
            <span>Application</span>
          </div>
          <div className="Candidates grid-item">
            <img src={Candidates} alt="Candidates" />
            <span>Candidates</span>
          </div>
          <div className="Logs grid-item">
            <img src={Logs} alt="Logs" />
            <span>Logs</span>
          </div>
          <div className="Profile grid-item">
            <img src={Profile} alt="Profile" />
            <span>Profile</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
