// src/components/Skills.js

import React from 'react';
import { portfolioData } from '../data';

const Skills = () => {
  const { languages, frameworks, databases, security, soft } = portfolioData.skills;

  return (
    <section id="skills" className="content-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>{languages.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h3>Security Skills</h3>
          <ul>{security.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks & Technologies</h3>
          <ul>{frameworks.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>{databases.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>{soft.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;