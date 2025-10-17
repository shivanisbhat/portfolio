// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skill';
import Experience from './components/Experience';
import Projects from './components/Project';
import Certifications from './components/Certification';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;