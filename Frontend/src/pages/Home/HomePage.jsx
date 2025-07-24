import React from "react";
import { Home, Users, Search, FileText, User, FileCheck, UserCheck } from 'lucide-react';


import './HomePage.css'; // If using plain CSS

const HomePage = () => {
  const items = [
    { label: 'Departments', icon: '🏠' },
    { label: 'Users', icon: '👥' },
    { label: 'Vacancies', icon: '💬' },
    { label: 'Application', icon: '📄' },
    { label: 'Job Profile', icon: '🧑‍💼' },
    { label: 'Logs', icon: '📁' },
    { label: 'Profile', icon: '👤' },
    { label: 'Candidates', icon: '🙋‍♂' },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="branding">
          <span className="logo">OREL <span className="logo-it">IT</span></span>
          <div className="rms">RMS<br /><small>Recruitment Management System</small></div>
        </div>
        <button className="logout-btn">Log Out</button>
      </header>

      <div className="grid-container">
  {items.map(({ label, icon }) => (
    <div key={label} className={`grid-item ${label === 'Logs' ? 'highlight' : ''}`}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  ))}
</div>

    </div>
  );
};






export default HomePage;
