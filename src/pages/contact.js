import React from "react";
import { useEffect } from 'react';
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion/dist/framer-motion";
export default function Contact() {
   useEffect(() => {
    // Set the title when the component mounts
    document.title = "Contact";

    // Optionally, you can return a cleanup function to revert the title when the component unmounts
    
  }, []);
  return (
    <motion.div
      inital={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <ContactSection />
    </motion.div>
  );
}
