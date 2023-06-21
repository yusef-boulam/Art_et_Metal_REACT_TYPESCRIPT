import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import APropos from './Pages/APropos';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Apropos" element={<APropos />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
