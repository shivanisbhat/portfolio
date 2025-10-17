// src/components/Projects.js

import React from 'react';
import { portfolioData } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="content-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* render image only when available */}
            {project.imageUrl && (
              <img src={project.imageUrl} alt={`${project.title} screenshot`} className="project-image" />
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live App</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;