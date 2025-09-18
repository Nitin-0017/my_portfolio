import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const infoItems = [
  { label: "Location:", value: "Sonipat, Haryana" },
  { label: "Email:", value: "nitin.kumar2024@nst.rishihood.edu.in" },
  { label: "Phone:", value: "+91 9351606480" },
  { label: "Freelance:", value: "Available" },
];

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Intro paragraphs with stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {[
            `Hi! I'm Nitin Kumar, an aspiring Full Stack Developer with a passion
            for building modern, efficient, and user-friendly web applications.
            Skilled in Python, HTML, CSS, JavaScript, React, Node.js, and SQL,
            I enjoy solving challenging problems and turning ideas into functional software.`,
            `Over the years, I’ve solved 250+ Leetcode problems and maintained a strong
            competitive programming rating of 1500+. When I’m not coding, I enjoy
            exploring new technologies and working on creative side projects.`
          ].map((text, i) => (
            <motion.p
              className="about-intro"
              key={i}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.h3
          className="about-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Personal Info
        </motion.h3>

        {/* Info Grid with stagger */}
        <motion.ul
          className="about-info"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          viewport={{ once: true }}
        >
          {infoItems.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, color: "#4f46e5" }}
              style={{ cursor: "default" }}
            >
              <strong>{item.label}</strong> {item.value}
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom description */}
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My goal is to continuously grow as a developer and create impactful digital
          solutions. I love collaborating on innovative projects, and I’m always
          open to new opportunities to learn and contribute.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
