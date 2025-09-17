import React from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaEnvelope,
  FaCogs,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="./NavBar.jpeg" alt="profile" className="profile-img" />
        <h2 className="profile-name">Nitin Kumar</h2>
        <div className="social-links">
          <a href="#"><SiLeetcode /></a>
          <a href="#"><SiCodeforces /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li><a href="#home"><FaHome className="icon" /> Home</a></li>
          <li><a href="#about"><FaUser className="icon" /> About</a></li>
          <li><a href="#resume"><FaFileAlt className="icon" /> Resume</a></li>
          <li><a href="#portfolio"><FaImages className="icon" /> Portfolio</a></li>
          <li><a href="#skills"><FaCogs className="icon" /> Skills</a></li> 
          <li><a href="#contact"><FaEnvelope className="icon" /> Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
