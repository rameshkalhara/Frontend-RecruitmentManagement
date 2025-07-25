//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';

import Signin from './pages/signin/signin.jsx';

import Sidebar from './components/sidebar/sidebar.jsx';


import Deartment from './pages/department/department.jsx';
import Users from './pages/users/users.jsx';  
import Application from './pages/application/application.jsx';
import JobProfile from './pages/jobProfile/jobProfile.jsx';
import Vacancies from './pages/vacancies/vacancies.jsx';      
import Candidates from './pages/candidates/candidates.jsx';




function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/department" element={<Deartment />} />
          <Route path="/users" element={<Users />} />
          <Route path="/application" element={<Application />} />
          <Route path="/job-profile" element={<JobProfile />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/candidates" element={<Candidates />} />
          

          
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App
