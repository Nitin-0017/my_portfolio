import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Nitin Kumar | All Rights Reserved</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:example@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
