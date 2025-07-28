import React from "react";
import { useNavigate } from "react-router-dom";

import ORELITLOGO from "../../assets/orelit-logo.png";
import "./HomePage.css"; 
import Departments from "../../assets/HomePage/Dept.jpg";
import Users from "../../assets/HomePage/Users.jpg";
import Application from "../../assets/HomePage/Application.jpg";
import Candidates from "../../assets/HomePage/Candidates.jpg";
import JobProfile from "../../assets/HomePage/JobProfile.jpg";
import Logs from "../../assets/HomePage/Logs.jpg";
import Profile from "../../assets/HomePage/Profile.jpg";
import Vacancies from "../../assets/HomePage/Vacancies.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

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
          <div className="logout-container" onClick={() => goToPage("/")}>
            <h3 className="logoutText">Logout</h3>
          </div>
        </div>
      </header>

      <main className="body">
        <div className="grid-container">
          <div className="Departments grid-item" onClick={() => goToPage("/department")}>
            <img src={Departments} alt="Departments" />
            <span>Departments</span>
          </div>
          <div className="Users grid-item" onClick={() => goToPage("/users")}>
            <img src={Users} alt="Users" />
            <span>Users</span>
          </div>
          <div className="JobProfile grid-item" onClick={() => goToPage("/job-profile")}>
            <img src={JobProfile} alt="Job Profile" />
            <span>Job Profile</span>
          </div>
          <div className="Vacancies grid-item" onClick={() => goToPage("/vacancies")}>
            <img src={Vacancies} alt="Vacancies" />
            <span>Vacancies</span>
          </div>
          <div className="Application grid-item" onClick={() => goToPage("/application")}>
            <img src={Application} alt="Application" />
            <span>Application</span>
          </div>
          <div className="Candidates grid-item" onClick={() => goToPage("/candidates")}>
            <img src={Candidates} alt="Candidates" />
            <span>Candidates</span>
          </div>
          <div className="Logs grid-item" onClick={() => goToPage("/logs")}>
            <img src={Logs} alt="Logs" />
            <span>Logs</span>
          </div>
          <div className="Profile grid-item" onClick={() => goToPage("/profile")}>
            <img src={Profile} alt="Profile" />
            <span>Profile</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;  