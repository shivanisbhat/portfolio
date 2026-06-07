import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
    document.documentElement.style.colorScheme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsLightMode((current) => !current);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {portfolioData.name}
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
        <span className={isOpen ? 'active' : ''}></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Theme Switch */}
        <li>
          <label className="theme-switch" aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}>
            <input
              type="checkbox"
              role="switch"
              aria-checked={isLightMode}
              checked={isLightMode}
              onChange={() => setIsLightMode((v) => !v)}
            />
            <span className="switch-track">
              <span className="switch-thumb" />
              <span className="sun" aria-hidden="true">☀</span>
              <span className="moon" aria-hidden="true">🌙</span>
            </span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;