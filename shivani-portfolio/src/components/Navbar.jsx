// src/components/Navbar.js

import React, { useState } from 'react';
import { portfolioData } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">{portfolioData.name}</div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;