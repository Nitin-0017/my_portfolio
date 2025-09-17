import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2>Resume</h2>

        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>B.Tech in Computer Science</h4>
            <h5>2021 - 2025</h5>
            <p><em>Newton School of Technology</em></p>
            <p>Focused on full-stack web development and modern technologies.</p>
          </div>
          <div className="resume-item">
            <h4>High School</h4>
            <h5>2019 - 2021</h5>
            <p><em>XYZ School</em></p>
            <p>Studied science with specialization in Mathematics and Computer Science.</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <div className="resume-item">
            <h4>Frontend Developer Intern</h4>
            <h5>2024</h5>
            <p><em>Some Company</em></p>
            <p>Worked on building responsive React web apps with modern UI.</p>
          </div>
          <div className="resume-item">
            <h4>Freelance Projects</h4>
            <h5>2023 - Present</h5>
            <p><em>Self Employed</em></p>
            <p>Developed websites for small businesses and personal portfolios.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
