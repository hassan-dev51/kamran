import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center py-10"
      >
        <h2 className="md:text-6xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 mb-0 pb-3">
          Recognized by Govt Institutes
        </h2>
      </motion.div>
      <motion.div className=""></motion.div>
    </div>
  );
};

export default Testimonials;
