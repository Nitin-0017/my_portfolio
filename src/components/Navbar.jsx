import React, { useEffect, useState } from "react";
import {
  FaHome, FaUser, FaFileAlt, FaImages, FaEnvelope, FaCogs,
  FaLinkedin, FaGithub, FaBars, FaTimes
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

 
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="navbar-mobile">
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Slide-out menu */}
          <motion.div
            className="mobile-menu"
            initial={{ x: -300 }}
            animate={{ x: isOpen ? 0 : -300 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <a href="#home" onClick={() => setIsOpen(false)} className={activeSection==="home"?"active":""}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className={activeSection==="about"?"active":""}>About</a>
            <a href="#resume" onClick={() => setIsOpen(false)} className={activeSection==="resume"?"active":""}>Resume</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className={activeSection==="portfolio"?"active":""}>Projects</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className={activeSection==="skills"?"active":""}>Skills</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className={activeSection==="contact"?"active":""}>Contact</a>
          </motion.div>
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="sidebar">
          <div className="profile">
            <img src="./NavBar.jpeg" alt="profile" className="profile-img"/>
            <div className="social-links">
              <a href="https://leetcode.com/u/NITIN_0017/"><SiLeetcode /></a>
              <a href="https://www.linkedin.com/in/nitin-kumar--/"><FaLinkedin /></a>
              <a href="https://github.com/Nitin-0017/"><FaGithub /></a>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#home" className={activeSection==="home"?"active":""}><FaHome className="icon"/> Home</a></li>
              <li><a href="#about" className={activeSection==="about"?"active":""}><FaUser className="icon"/> About</a></li>
              <li><a href="#resume" className={activeSection==="resume"?"active":""}><FaFileAlt className="icon"/> Resume</a></li>
              <li><a href="#portfolio" className={activeSection==="portfolio"?"active":""}><FaImages className="icon"/> Projects</a></li>
              <li><a href="#skills" className={activeSection==="skills"?"active":""}><FaCogs className="icon"/> Skills</a></li>
              <li><a href="#contact" className={activeSection==="contact"?"active":""}><FaEnvelope className="icon"/> Contact</a></li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Navbar;
