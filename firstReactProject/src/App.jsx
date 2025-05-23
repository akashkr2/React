import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Header />

      <About />
      <Education />
      <Experience />
      <Projects />

      <Footer />
    </>
  );
};

export default App;
