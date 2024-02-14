import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactBanner from "../components/ContactBanner";
import { motion } from "framer-motion/dist/framer-motion";

export default function Home() {
   useEffect(() => {
    // Set the title when the component mounts
    document.title = "Home";

    // Optionally, you can return a cleanup function to revert the title when the component unmounts
    
  }, []);
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
