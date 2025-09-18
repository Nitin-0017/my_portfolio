import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaEnvelope,
  FaCogs,
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.scrollY < 200) setActiveSection("home");
            else setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    const handleScroll = () => {
      if (window.scrollY < 200) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="navbar-mobile">
          <div className="logo">Nitin Kumar</div>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      )}

      {/* Sidebar */}
      <motion.aside
        className="sidebar"
        animate={{ x: isMobile ? (isOpen ? 0 : -300) : 0 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
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
            <li><a href="#home" className={activeSection === "home" ? "active" : ""}><FaHome className="icon" /> Home</a></li>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""}><FaUser className="icon" /> About</a></li>
            <li><a href="#resume" className={activeSection === "resume" ? "active" : ""}><FaFileAlt className="icon" /> Resume</a></li>
            <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}><FaImages className="icon" /> Portfolio</a></li>
            <li><a href="#skills" className={activeSection === "skills" ? "active" : ""}><FaCogs className="icon" /> Skills</a></li>
            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}><FaEnvelope className="icon" /> Contact</a></li>
          </ul>
        </nav>
      </motion.aside>
    </>
  );
};

export default Navbar;
