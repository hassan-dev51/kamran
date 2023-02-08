import React from "react";

import { motion } from "framer-motion";

import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import BaseBallCard from "../components/BaseBallCard";
import { BallTriangle } from "react-loader-spinner";
import { useCategoryContent } from "../context/categoryContext";

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
  const { products } = useCategoryContent();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <div className="hero-banner-container">
          <div>
            <h1 className="text-center">Baseball</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              Take the diamond by storm in our high-performance baseball
              uniforms. <br /> <br /> Experience the ultimate comfort and
              durability with our baseball uniforms. <br /> <br /> Designed for
              the modern athlete, our baseball uniforms combine style and
              functionality. <br /> <br /> Make a statement on the field with
              our bold and stylish baseball uniforms. <br /> <br /> Our baseball
              uniforms are trusted by top teams and players across the country.{" "}
              <br /> <br /> Get ready to dominate the competition with our
              top-quality baseball uniforms. <br /> <br /> Our baseball uniforms
              are built to withstand the rigors of the diamond. <br /> <br />{" "}
              Take your game to the next level with our advanced baseball
              uniforms. <br />
              <br /> Our baseball uniforms are perfect for players of all skill
              levels and positions. <br />
            </p>
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
      {!products.length ? (
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
        <div className="md:px-8 px-4">
          <div className="py-8 text-center uppercase">
            <h1 className="md:text-5xl text-xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Categories of baseball product
            </h1>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {products
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
                <BaseBallCard key={currItem._id} {...currItem} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Baseball;
