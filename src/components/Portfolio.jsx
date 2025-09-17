import React, { useState } from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, title: "E-commerce Website", category: "web", image: "/images/portfolio1.jpg" },
    { id: 2, title: "Portfolio Website", category: "web", image: "/images/portfolio2.jpg" },
    { id: 3, title: "Mobile App UI", category: "app", image: "/images/portfolio3.jpg" },
    { id: 4, title: "Data Analytics Dashboard", category: "web", image: "/images/portfolio4.jpg" },
    { id: 5, title: "Branding Design", category: "design", image: "/images/portfolio5.jpg" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>

        <div className="portfolio-filters">
          <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("web")} className={filter === "web" ? "active" : ""}>Web</button>
          <button onClick={() => setFilter("app")} className={filter === "app" ? "active" : ""}>App</button>
          <button onClick={() => setFilter("design")} className={filter === "design" ? "active" : ""}>Design</button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.category.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
