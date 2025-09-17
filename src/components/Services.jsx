import React from "react";
import "../styles/Services.css";

function Services() {
  const services = [
    { id: 1, title: "Web Development", desc: "Building responsive and dynamic websites using React, Node.js, and modern web technologies." },
    { id: 2, title: "UI/UX Design", desc: "Designing clean, user-friendly interfaces with attention to detail and usability." },
    { id: 3, title: "App Development", desc: "Creating cross-platform mobile applications with React Native and modern frameworks." },
    { id: 4, title: "Backend Development", desc: "Developing scalable APIs and database solutions with Node.js, Express, and MongoDB." },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
