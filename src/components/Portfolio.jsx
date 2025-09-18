import React from "react";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Weather App",
    description: "A web app that fetches live weather data based on location, displaying temperature, humidity, and forecasts.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "./calculator.png",
    github: "#",
    live: "#"
  },
  {
    title: "Resume Shortlister",
    description: "An application to automatically filter and shortlist resumes based on keywords and skills for recruiters.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "./swifkart.png",
    github: "#",
    live: "#"
  },
  {
    title: "Memphis Design",
    description: "A design project made to experiment with applying CSS creatively.",
    tech: ["HTML", "CSS"],
    image: "./memphisdesign.png",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing projects, skills, and resume.",
    tech: ["React", "CSS", "JavaScript"],
    image: "./bmicalculator.png",
    github: "#",
    live: "#"
  },
  {
    title: "Task Manager",
    description: "A productivity app for creating, updating, and organizing daily tasks with local storage support.",
    tech: ["React", "Bootstrap"],
    image: "./inventory.png",
    github: "#",
    live: "#"
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
            viewport={{ once: false, amount: 0.3 }} // <--- ye scroll ke sath repeat ke liye
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
