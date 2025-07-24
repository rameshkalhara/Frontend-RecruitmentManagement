//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';

import Signin from './pages/signin/signin.jsx';
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App
