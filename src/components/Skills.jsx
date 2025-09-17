import React from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiLeetcode } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" size={60} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={60} /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={60} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={60} /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={60} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={60} /> },
    { name: "SQL", icon: <FaDatabase color="#4DB33D" size={60} /> },
    { name: "Problem Solving", icon: <SiLeetcode color="orange" size={60} /> },
  ];

  return (
    <section id="skills" className="skills">
      

      {/* Content */}
      <div className="skills-container">
        <h2>My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
