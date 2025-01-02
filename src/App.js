import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenerateSite from './pages/GenerateSite';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<GenerateSite />} />
      </Routes>
    </Router>
  );
}

export default App;
