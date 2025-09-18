import React from "react";
import { motion } from "framer-motion";
import "../styles/Resume.css";

const educationItems = [
  {
    title: "B.Tech in Computer Science",
    year: "2024 - 2028",
    school: "Newton School of Technology",
    desc: "Focused on full-stack web development and modern technologies."
  },
  {
    title: "High School",
    year: "2019 - 2023",
    school: "RPS Public School",
    desc: "Passed my Schooling with Non-Medical Stream."
  }
];

const experienceItems = [
  {
    title: "Frontend Developer Intern",
    year: "2025",
    company: "Countrees AI Private Limited",
    desc: "Worked on building responsive React web apps with modern UI."
  }
];

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <motion.div
        className="resume-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        {/* Education Section */}
        <motion.div
          className="resume-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h3>

          {educationItems.map((item, index) => (
            <motion.div
              className="resume-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h4>{item.title}</h4>
              <h5>{item.year}</h5>
              <p><em>{item.school}</em></p>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="resume-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
          }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h3>

          {experienceItems.map((item, index) => (
            <motion.div
              className="resume-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h4>{item.title}</h4>
              <h5>{item.year}</h5>
              <p><em>{item.company}</em></p>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
