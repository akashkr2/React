import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SideBar2 from "./components/SideBar2";

import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main className="flex">
          <SideBar2 />
          <Routes>
            <Route path="/" element={<Home2 />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/certification" element={<Certifications />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
};

export default App;
