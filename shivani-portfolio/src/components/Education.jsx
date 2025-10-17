// src/components/Education.js

import React from 'react';
import { portfolioData } from '../data';

const Education = () => {
  return (
    <section id="education" className="content-section education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <div className="education-meta">
                <h3>{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-grade">{edu.grade}</p>
              </div>
              {edu.year && (
                <span className="education-year">{edu.year}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;