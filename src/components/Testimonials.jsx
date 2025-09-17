import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Aryan Sharma",
      role: "Intern @ Times of India",
      feedback:
        "Nitin is a highly dedicated developer. His problem-solving skills and consistency on projects impressed me a lot.",
      img: "/images/testimonial1.jpg",
    },
    {
      name: "Yash Verma",
      role: "Classmate @ NST",
      feedback:
        "He is super organized and ensures that everything is kept neat and efficient, both in code and in teamwork.",
      img: "/images/testimonial2.jpg",
    },
    {
      name: "Manjeet (Dolphin)",
      role: "Personal Support",
      feedback:
        "Nitin’s creativity and consistency in building projects make him stand out. He always adds a personal touch to his work.",
      img: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <p className="testimonial-feedback">“{t.feedback}”</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
