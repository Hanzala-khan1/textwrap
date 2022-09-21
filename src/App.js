
import React from 'react';
import './App.css';
import Maintext from './component/Maintext';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact'







import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route  path="/" element={<Maintext />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

</>
  
  );
}

export default App;
