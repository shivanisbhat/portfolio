// src/components/Contact.js

import React from 'react';
import { portfolioData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="content-section">
      <h2>Get In <span>Touch</span></h2>
      <div className="contact-info">
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          padding: '0 1.5rem'
        }}>
          <div className="contact-card" style={{display: 'flex', alignItems: 'center', background: 'var(--card-background)', borderRadius: '16px', padding: '1.5rem'}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-color)', borderRadius: '8px', width: '40px', height: '40px', marginRight: '1rem', flexShrink: 0}}>
              {/* Envelope Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <div style={{minWidth: 0}}>
              <strong style={{display: 'block', color: 'var(--primary-color)', fontSize: '0.85rem', marginBottom: '0.25rem'}}>Email</strong>
              <a href={`mailto:${portfolioData.contact.email}`} style={{display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#fff', textDecoration: 'none'}}>{portfolioData.contact.email}</a>
            </div>
          </div>
          <div className="contact-card" style={{display: 'flex', alignItems: 'center', background: 'var(--card-background)', borderRadius: '16px', padding: '1.5rem'}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-color)', borderRadius: '8px', width: '40px', height: '40px', marginRight: '1rem', flexShrink: 0}}>
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <div style={{minWidth: 0}}>
              <strong style={{display: 'block', color: 'var(--primary-color)', fontSize: '0.85rem', marginBottom: '0.25rem'}}>Phone</strong>
              <span style={{display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#fff'}}>{portfolioData.contact.phone}</span>
            </div>
          </div>
          <div className="contact-card" style={{display: 'flex', alignItems: 'center', background: 'var(--card-background)', borderRadius: '16px', padding: '1.5rem'}}>
            <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-color)', borderRadius: '8px', width: '40px', height: '40px', marginRight: '1rem', flexShrink: 0}}>
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <div style={{minWidth: 0}}>
              <strong style={{display: 'block', color: 'var(--primary-color)', fontSize: '0.85rem', marginBottom: '0.25rem'}}>Location</strong>
              <span style={{display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#fff'}}>{portfolioData.contact.location}</span>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a href={portfolioData.contact.credly} target="_blank" rel="noopener noreferrer">
            {/* Credly / Certifications - Filled Medal Icon for consistency */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="5" />
              <path d="M8 14 L7 21 L12 19 Z" />
              <path d="M16 14 L12 19 L17 21 Z" />
            </svg>
            <span>Credly</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;