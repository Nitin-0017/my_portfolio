import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <p className="contact-subtitle"></p>

        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Left Side */}
          {["Address", "Call Me", "Email"].map((item, index) => {
            const details = [
              "Sonipat, Haryana, India",
              "+91 9351606480",
              "nitin.kumar2024@nst.rishihood.edu.in"
            ];
            const icons = [
              <HiLocationMarker size={24} />,
              <AiOutlinePhone size={24} />,
              <AiOutlineMail size={24} />
            ];

            return (
              <motion.div
                className="contact-info"
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="info-item">
                  <span className="icon">{icons[index]}</span>
                  <div>
                    <h4>{item}</h4>
                    <p>{details[index]}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
