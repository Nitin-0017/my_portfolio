import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
