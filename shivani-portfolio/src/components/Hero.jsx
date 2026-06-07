// src/components/Hero.jsx

import React, { useEffect, useMemo, useState } from 'react';
import { portfolioData } from '../data';

const Hero = () => {
  const roles = useMemo(
    () => ['Front-End Developer', 'Embedded Software Developer', 'Cybersecurity'],
    []
  );

  // typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const fullText = roles[roleIndex];

    if (!isDeleting && displayed === fullText) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((ri) => (ri + 1) % roles.length);
    } else {
      const delta = isDeleting ? 40 : 80;
      timeoutId = setTimeout(() => {
        setDisplayed((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeoutId);
  }, [displayed, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const section = document.querySelector('.hero-section');
    const glow = section?.querySelector('.cursor-glow');

    if (!section || !glow) return;

    const moveGlow = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;
      const left = Math.max(0, Math.min(rect.width, x));
      const top = Math.max(0, Math.min(rect.height, y));

      glow.style.left = `${left}px`;
      glow.style.top = `${top}px`;
    };

    const handleLeave = () => {
      glow.style.left = `50%`;
      glow.style.top = `50%`;
    };

    section.addEventListener('mousemove', moveGlow);
    section.addEventListener('mouseleave', handleLeave);

    return () => {
      section.removeEventListener('mousemove', moveGlow);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="cursor-glow"></div>
      </div>

      <div className="hero-content">
        <h1>Hi, I'm {portfolioData.name}</h1>
        <p className="tagline role-line" aria-live="polite" aria-atomic="true">
          <span className="role-text">{displayed}</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-secondary">View My Projects</a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
