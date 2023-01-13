import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import { client } from "../client";
import BaseBallCard from "../components/BaseBallCard";

const TypingText = ({ title }) => (
  <motion.p variants={textContainer} className="md:text-center text-left p-3">
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
const Baseball = () => {
  const [baseBallProducts, setBaseBallProducts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setBaseBallProducts(data));
  }, []);
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
              <h1>Baseball</h1>
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
        <TypingText title="Take the diamond by storm in our high performance baseball uniforms" />
      </motion.div>
      <hr />
      {/* <div className="grid lg:grid-cols-2 grid-cols-re">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="ml-4 p-2"
        >
          {baseball.map((item, ind) => (
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
      </div> */}
      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Categories of baseball product
          </h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
          {baseBallProducts
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .filter((item) => item.category === "BaseBallUniform")
            .map((currItem) => (
              <BaseBallCard key={currItem.id} {...currItem} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Baseball;
