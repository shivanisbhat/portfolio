// src/components/Certifications.js

import React from 'react';
import { portfolioData } from '../data';

const Certifications = () => {
  return (
    <section id="certifications" className="content-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            {cert.imageUrl ? (
              <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer">
                <img src={cert.imageUrl} alt={cert.title} className="certification-image" />
              </a>
            ) : (
              <div className="certification-image" style={{
                height: '120px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px'
              }}></div>
            )}
            <p>{cert.title}</p>
            {portfolioData.contact && portfolioData.contact.credly && (
              <a href={portfolioData.contact.credly} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: '0.75rem'}}>Verify</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;