import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Title */}
        <h2 className="about-title">About Me</h2>

        {/* Intro text */}
        <p className="about-intro">
          Hi! I'm Nitin Kumar, an aspiring Full Stack Developer with a passion
          for building modern, efficient, and user-friendly web applications.
          Skilled in Python, HTML, CSS, JavaScript, React, Node.js, and SQL,
          I enjoy solving challenging problems and turning ideas into functional software.
        </p>
        <p className="about-intro">
          Over the years, I’ve solved 250+ Leetcode problems and maintained a strong
          competitive programming rating of 1500+. When I’m not coding, I enjoy
          exploring new technologies and working on creative side projects.
        </p>

        {/* Subtitle */}
        <h3 className="about-subtitle">Personal Info</h3>

        {/* Info Grid */}
        <ul className="about-info">
          <li><strong>Location:</strong> Sonipat, Haryana</li>
          <li><strong>Email:</strong> nitin.kumar2024@nst.rishihood.edu.in</li>
          <li><strong>Phone:</strong> +91 9351606480</li>
          <li><strong>Freelance:</strong> Available</li>
        </ul>

        {/* Bottom description */}
        <p className="about-description">
          My goal is to continuously grow as a developer and create impactful digital
          solutions. I love collaborating on innovative projects, and I’m always
          open to new opportunities to learn and contribute.
        </p>
      </div>
    </section>
  );
};

export default About;
