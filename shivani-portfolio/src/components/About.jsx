// src/components/About.js

import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section id="about" className="content-section">
      <h2>About Me</h2>
      <p>{portfolioData.bio}</p>
    </section>
  );
};

export default About;