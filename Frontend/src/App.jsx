//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Signin from './pages/signin/signin.jsx';
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Signin/>} />
      
      
    </Routes>
  );
}

export default App
