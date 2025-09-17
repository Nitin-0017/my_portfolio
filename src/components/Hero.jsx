import React from "react";
import "../styles/Hero.css";  

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1>Hi, I'm <span>Your Name</span></h1>
        <h2>I am a Web Developer</h2>
        <a href="#portfolio" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
