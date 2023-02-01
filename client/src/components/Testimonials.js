import React from "react";
import { motion } from "framer-motion";
import Rectangle from "./Rectangle 57.png";
const Testimonials = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative"
      >
        <img src={Rectangle} alt="team" className="h-[465px]" />
        <div className="absolute top-20 w-full">
          <h2 className="text-yellow-300 text-center py-4">Our Team</h2>
          <p className="text-center text-white md:text-3xl text-xl">
            We work with a very focused approach, Our Team heads ensure their
            departments <br /> run smoothly and the clients are satisfied with
            the progress.
          </p>
        </div>
      </motion.div>
      <motion.div className=""></motion.div>
    </div>
  );
};

export default Testimonials;
