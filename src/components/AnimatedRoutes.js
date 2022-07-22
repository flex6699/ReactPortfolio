import React from "react";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/Home";
import Projects from "../pages/projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
