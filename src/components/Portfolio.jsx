import React from "react";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Inventory Management",
    description: "An inventory management project helps track, organize, and optimize stock levels to ensure smooth business operations and reduce losses.",
    tech: ["HTML","CSS","JavaScript","React"],
    image: "./inventory.png",
    github: "https://github.com/Nitin-0017/inventory_management",
    live: "https://inventory-management-e5fa-kidq3qi46-nitin-0017s-projects.vercel.app/"
  },
  {
    title: "E-Commerce Website (SwiftKart)",
    description: "It is an e-commerce website that offers a seamless shopping experience with easy browsing, secure checkout, and fast delivery.",
    tech: ["HTML","CSS","JavaScript","React"],
    image: "./swifkart.png",
    github: "https://github.com/Nitin-0017/ecommerce-assignment",
    live: "https://ecommerce-assignment-dhzx.vercel.app/"
  },

  {
    title: "Calculator App",
    description: "It is a Calculator built to perform basic arithmetic operations quickly and accurately.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./calculator.png",
    github: "https://github.com/Nitin-0017/Calculator",
    live: "https://nitin-0017.github.io/Calculator/"
  },
  {
    title: "BMI Calculator",
    description: "It  helps users check their Body Mass Index and track their health easily.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./bmicalculator.png",
    github: "https://github.com/Nitin-0017/BMI_Calculator",
    live: "https://nitin-0017.github.io/BMI_Calculator/"
  },
  {
    title: "Memphis Design",
    description: "A design project made to experiment with applying CSS creatively.",
    tech: ["HTML", "CSS"],
    image: "./memphisdesign.png",
    github: "https://github.com/Nitin-0017/Capstone_Project",
    live: "https://nitin-0017.github.io/Capstone_Project/"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="portfolio">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
            className="projects-flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
>

          {projects.map((project, index) => (
            <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // <--- scroll ke sath repeat
          >
          
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
