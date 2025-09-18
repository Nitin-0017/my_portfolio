import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Resume Section */}
        <section id="resume">
          <Resume />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <BackToTop />
<Footer />

    </>
  );
}

export default App;
