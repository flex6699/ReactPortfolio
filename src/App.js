import React from "react";

import "./App.css";
import NavMenu from "./components/NavMenu";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
