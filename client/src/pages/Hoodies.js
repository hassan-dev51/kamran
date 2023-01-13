import React from "react";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

import logo from "../../src/logo.svg";

import {
  hoodies,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";

const TypingText = ({ title }) => (
  <motion.p variants={textContainer} className="md:text-center  text-left p-3">
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
        className="md:text-2xl text-xl text-gray-400 capitalize w-full break-words"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

const Hoodies = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <div className="hero-banner-container">
          <div className="flex justify-between">
            <div>
              <h1>Hoodies</h1>
              <br />
              <Link to="/products">
                <button type="button">Shop Now</button>
              </Link>
            </div>
            <div className="hero-banner-image">
              <img src={logo} alt="headphones" />
            </div>
          </div>
          <div>
            <div className="desc">
              <h5>23</h5>
              <p>details will be displayed here</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <TypingText title="Designed for everyday wear, our hoodies are perfect for any occasion" />
      </motion.div>
      <hr />
      <div className="grid lg:grid-cols-2 grid-cols-re">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="ml-4 p-2"
        >
          {hoodies.map((item, ind) => (
            <li
              className="md:text-2xl text-xl p-2 list-none flex gap-3 justify-center items-start"
              key={ind}
            >
              <FaAngleRight
                fontSize={22}
                className="text-gray-400 translate-y-2"
              />{" "}
              {item.text}
            </li>
          ))}
        </motion.div>
        <motion.div className="bg-red-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            pariatur sunt modi harum soluta dolorum reiciendis, illo quod
            aliquid maiores in doloribus. Sed alias labore dolorem, maiores
            dolore ullam amet!
          </p>
        </motion.div>
      </div>
      <Link to="/products" className="flex justify-center my-3">
        <button class="bg-[#f02d34] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full">
          View More Products
        </button>
      </Link>
    </>
  );
};

export default Hoodies;
