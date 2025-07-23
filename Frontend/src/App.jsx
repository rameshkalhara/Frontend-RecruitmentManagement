//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App
