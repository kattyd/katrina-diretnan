import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import SplitLanding from './components/SplitLanding';
import TechView from "./pages/TechView";
import MediaView from "./pages/MediaView";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplitLanding />} />
        <Route path='/tech' element={<TechView />} />
        <Route path='/media' element={<MediaView />} />
      </Routes>
    </Router>
  );
}

export default App;
