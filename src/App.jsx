import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Resume />
      <Portfolio />


      <Contact />
      <Footer />
    </>
  );
}

export default App;
