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
    <div className="bg-[#dcdcdc] backdrop-blur-sm">
      <div className="text-center md:py-10 py-3">
        <h2 className="md:text-6xl text-2xl text-secondary-white">About US</h2>
        <p>Let's take a look at our Company </p>
      </div>
      <motion.div className="md:grid px-6 grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div className="md:p-10 p-4">
          <TypingText para="Welcome to cosmos sports! We are a team of dedicated professionals who are passionate about bringing you the best products at affordable prices. Our mission is to provide our customers with a seamless and enjoyable shopping experience, whether they are looking for the latest fashion trends or everyday essentials." />
          <br />
          <TypingText
            para="We carefully create our product selection to ensure that we offer a wide variety of high-quality products that cater to a diverse customer base. From home decor to clothing to beauty products, we have something for everyone.We value our customers and strive to provide excellent customer service. If you have any questions or concerns, please don't hesitate to reach out to us. We are always happy to help.Thank you for choosing us as your go-to destination for all your shopping needs. We look forward to serving you and hope you have a great experience on our website.
          "
          />
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
      <Product />
    </div>
  );
};

export default About;
