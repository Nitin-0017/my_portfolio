// Projects.jsx
import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "",
    description: "A web app that fetches live weather data based on location, displaying temperature, humidity, and forecasts.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "/projects/weather-app.png",
    github: "#",
    live: "#"
  },
  {
    title: "Resume Shortlister",
    description: "An application to automatically filter and shortlist resumes based on keywords and skills for recruiters.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/resume-shortlister.png",
    github: "#",
    live: "#"
  },
  {
    title: "Memphis Design",
    description: "A Design made to get an experience of applying CSS in a project",
    tech: ["HTML", "CSS"],
    image: "/projects/dot-boxes.png",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="portfolio">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
