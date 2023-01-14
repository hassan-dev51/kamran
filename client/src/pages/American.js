import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import { client } from "../client";
import AmericanCard from "../components/AmericanCard";
import { BallTriangle } from "react-loader-spinner";

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
  const [americanProducts, setAmericanProducts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setAmericanProducts(data));
  }, []);
  console.log(americanProducts.map((item) => item._id));
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

      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            American Football Categories
          </h1>
        </div>
        {!americanProducts.length ? (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={`flex justify-center items-center h-[75vh]`}
            wrapperStyle=""
            visible={true}
          />
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {americanProducts
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .filter((item) => item.category === "AmericanUniform")
              .map((currItem) => (
                <AmericanCard key={currItem.id} {...currItem} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default American;
