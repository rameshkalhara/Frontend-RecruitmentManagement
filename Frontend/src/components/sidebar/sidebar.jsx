import React, { useState } from "react";
import { User, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

import logo from "../../assets/orelit-logo.png";
import user from "../../assets/user.jpeg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current active item from URL
  const getCurrentActiveItem = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "Home";
      case "/department":
        return "Departments";
      case "/users":
        return "Users";
      case "/application":
        return "Application";
      case "/job-profile":
        return "Job Profile";
      case "/vacancies":
        return "Vacancies";
      case "/candidates":
        return "Candidates";
      case "/logs":
        return "Logs";
      default:
        return "Home";
    }
  };

  const [activeItem, setActiveItem] = useState(getCurrentActiveItem());

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Departments", path: "/department" },
    { name: "Users", path: "/users" },
    { name: "Application", path: "/application" },
    { name: "Job Profile", path: "/job-profile" },
    { name: "Vacancies", path: "/vacancies" },
    { name: "Candidates", path: "/candidates" },
    { name: "Logs", path: "/logs" },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();

    // Navigate to signin page
    navigate("/");

    console.log("User logged out successfully");
  };

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <img src={logo} alt="ORELIT" className="logo-image" />
        </div>
        <h1 className="sidebar-title">RMS</h1>
      </div>

      {/* User Section */}
      <div className="sidebar-user">
        <div className="user-info">
          <div className="user-avatar">
            <img src={user} alt="ORELIT" className="user-icon" />
          </div>
          <span className="user-name">User</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item)}
            className={`nav-item ${
              activeItem === item.name ? "nav-item-active" : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <span>Log Out</span>
          <LogOut className="logout-icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
