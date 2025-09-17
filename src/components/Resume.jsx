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
            <h5>2024 - 2028</h5>
            <p><em>Newton School of Technology</em></p>
            <p>Focused on full-stack web development and modern technologies.</p>
          </div>
          <div className="resume-item">
            <h4>High School</h4>
            <h5>2019 - 2023</h5>
            <p><em>RPS Public School</em></p>
            <p>Passed my Schooling with Non-Medical Stream.</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <div className="resume-item">
            <h4>Frontend Developer Intern</h4>
            <h5>2025</h5>
            <p><em>Countrees AI Private Limited</em></p>
            <p>Worked on building responsive React web apps with modern UI.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Resume;
