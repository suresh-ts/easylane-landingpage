"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const FadeInSection = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
