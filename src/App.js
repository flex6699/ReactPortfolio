import React from "react";

import "./App.css";
import NavMenu from "./components/NavMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Projects from "./pages/projects";
function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
