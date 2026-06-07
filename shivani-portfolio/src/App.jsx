// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skill';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Project';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import LeetCode from "./components/LeetCode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Certifications />
        <Skills />
        <LeetCode />
        <Contact />
      </main>
    </div>
  );
}

export default App;