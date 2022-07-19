import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactBanner from "../components/ContactBanner";
import { motion } from "framer-motion/dist/framer-motion";

export default function Home() {
  return (
    <React.Fragment>
      <motion.div
        inital={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactBanner />
      </motion.div>
    </React.Fragment>
  );
}
