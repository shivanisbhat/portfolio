// src/components/FeaturedProjects.jsx

import React from 'react';
import { portfolioData } from '../data';

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="featured-projects-section">
      <div className="featured-projects-header">
        <p className="featured-kicker">Featured Projects</p>
        <h2>A curated set of work I want to highlight</h2>
        <p className="featured-intro">
          A more detailed look at selected projects where I focused on interface quality,
          responsive behavior, and practical product thinking.
        </p>
      </div>

      <div className="featured-projects-grid">
        {portfolioData.featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className={`featured-project-card ${index % 2 === 1 ? 'featured-project-card--reverse' : ''}`}
          >
            <div className="featured-project-media">
              <img
                src={project.imageUrl}
                alt={`${project.title} preview`}
                className="featured-project-image"
              />
              <span className="featured-project-badge">{project.label}</span>
            </div>

            <div className="featured-project-content">
              <p className="featured-project-index">0{index + 1}</p>
              <h3>{project.title}</h3>
              <p className="featured-project-description">{project.description}</p>
              <p className="featured-project-summary">{project.summary}</p>

              <ul className="featured-project-metrics">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>

              <div className="featured-project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="featured-project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="featured-project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
