import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero-background">
        <img src="/profile.jpeg" alt="Profile" />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Nitin Kumar</h1>
        <p className="hero-subtitle">
          Aspiring Full Stack Developer skilled in Python, HTML, CSS, JavaScript, React, Node.js, and SQL, with over 250+ solved Leetcode questions and a Contest Rating of 1500+.
        </p>
        <a href="#portfolio" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
