import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client } from "../client";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import GlovesCard from "../components/GlovesCard";

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
const Gloves = () => {
  const [GlovesProducts, setGlovesProducts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setGlovesProducts(data));
  }, []);
  console.log(GlovesProducts);
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
              <h1>Gloves</h1>
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
        <TypingText title="Perform at your best on the court with our top-quality Gloves" />
      </motion.div>
      <hr />
      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Categories of gloves
          </h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
          {GlovesProducts.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
            .filter((item) => item.category === "Gloves")
            .map((currItem) => (
              <GlovesCard key={currItem.id} {...currItem} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Gloves;
