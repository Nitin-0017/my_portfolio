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
            `Hi! I'm Nitin Kumar, a Full Stack Developer passionate about building scalable and user-friendly web applications. I work with JavaScript, React, Node.js, Python, and SQL to transform ideas into real-world digital products. Alongside web development, I also explore data analysis using Pandas, NumPy, and Excel to build data-driven solutions.`
            ,
            `I’ve solved 400+ problems on LeetCode and maintain a competitive programming rating of 1530+, which strengthens my problem-solving and algorithmic thinking. I enjoy learning new technologies, collaborating with teams, and building projects that create real impact.`

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
