import React from "react";

import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion/dist/framer-motion";
export default function Contact() {
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
