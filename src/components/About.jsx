import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate Web Developer who loves building interactive and
            responsive web applications. Skilled in React, JavaScript, and
            modern frontend technologies.
          </p>
          <ul className="about-info">
            <li><strong>Birthday:</strong> 1 Jan 2000</li>
            <li><strong>Phone:</strong> +91 1234567890</li>
            <li><strong>Email:</strong> you@example.com</li>
            <li><strong>City:</strong> Your City</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
