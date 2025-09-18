import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background image */}
      <div className="hero-background">
        <motion.img
          src="/profile.jpeg"
          alt="Profile"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Nitin Kumar
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Aspiring Full Stack Developer skilled in Python, HTML, CSS, JavaScript, React, Node.js,
          and SQL, with over 250+ solved Leetcode questions and a Contest Rating of 1500+.
        </motion.p>

        <motion.a
          href="#portfolio"
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
