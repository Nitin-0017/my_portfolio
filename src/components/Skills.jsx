import React from "react";
import { motion } from "framer-motion";
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
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>

        <motion.div
  className="skills-grid"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }} // <--- scroll ke sath
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }}
>

          {skills.map((skill, index) => (
            <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
          
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
