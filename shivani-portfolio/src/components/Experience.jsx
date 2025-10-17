// src/components/Experience.js

import React from 'react';
import { portfolioData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="experience-item">
            <h3>{job.role} - <span>{job.company}</span></h3>
            <p className="date">{job.date}</p>
            <ul>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;