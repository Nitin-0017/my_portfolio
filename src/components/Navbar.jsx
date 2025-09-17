import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/images/profile.jpg" alt="profile" className="profile-img" />
        <h1 className="profile-name">Nitin Kumar</h1>
        <p className="profile-role">Web Developer</p>
      </div>

      <nav className="nav-menu">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </aside>
  );
}

export default Navbar;
