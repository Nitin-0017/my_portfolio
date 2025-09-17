import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Python", level: "70%" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
