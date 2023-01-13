import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import logo from "../../src/logo.svg";

import {
  american,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";

const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className="p-3 md:text-center text-justify"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
        className="md:text-2xl text-xl text-gray-400 w-full break-words  capitalize "
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

const American = () => {
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
              <h1>
                AMERICAN <br /> FOOTBALL
              </h1>
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
        <TypingText title="Stand out from the competition with our unique and customizable American football uniforms" />
      </motion.div>

      <hr />

      <div className="grid lg:grid-cols-2 grid-cols-re">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="ml-4 p-2 "
        >
          {american.map((item, ind) => (
            <li
              className="md:text-2xl text-xl p-2 list-none flex gap-3 justify-center items-flex-start"
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
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            src={logo}
            alt="logo"
            className="w-[200px] h-[h-200px]"
          ></motion.img>
        </motion.div>
      </div>

      <Link to="/products" className="flex justify-center my-3">
        <button className="bg-[#f02d34] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full">
          View More Products
        </button>
      </Link>
    </>
  );
};

export default American;
