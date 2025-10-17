// src/components/Hero.js

import React from 'react';
import { portfolioData } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm {portfolioData.name}</h1>
        <p className="tagline">{portfolioData.tagline}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;