import React from "react";
import { motion } from "framer-motion";
import Product from "./Product";
const About = () => {
  const TypingText = ({ para }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="md:text-lg text-sm"
        style={{
          textAlign: "justify",
        }}
      >
        {para}
      </motion.div>
    );
  };
  return (
    <div className="glassmorphism backdrop-blur-sm">
      <div className="text-center py-10">
        <h2 className="md:text-6xl text-2xl">About US</h2>
        <p>Let's take a look at our Company </p>
      </div>
      <motion.div className="md:grid px-6 grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div className="md:p-10 p-4">
          <TypingText
            para="Zanzi Sport is a well reputed export industry. We create outstanding sports uniform and other sports related stuff and it is not only manufacturing but also we take care of our customer satisfactory
          Zanzi Sport is a well reputed export industry. We create outstanding sports uniform and other sports related stuff and it is not only manufacturing but also we take care of our customer satisfactory
          "
          />
          <br />
          <TypingText
            para="Zanzi Sport is a well reputed export industry. We create outstanding sports uniform and other sports related stuff and it is not only manufacturing but also we take care of our customer satisfactory
          Zanzi Sport is a well reputed export industry. We create outstanding sports uniform and other sports related stuff and it is not only manufacturing but also we take care of our customer satisfactory
          "
          />
        </motion.div>
        <motion.div>
          <p>this is a paragraph</p>
        </motion.div>
      </motion.div>
      <Product />
    </div>
  );
};

export default About;
