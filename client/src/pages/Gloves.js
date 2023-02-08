import React from "react";

import { motion } from "framer-motion";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import GlovesCard from "../components/GlovesCard";
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
const Gloves = () => {
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
            <h1 className="text-center">Gloves</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              Introducing our new line of baseball gloves, perfect for players
              of all levels. Made with high-quality leather and advanced
              materials, these gloves offer superior durability and performance.
              The ergonomic design ensures a comfortable fit and improved grip,
              while the strategically placed padding protects your hand from
              impact. Available in a variety of sizes and colors, our baseball
              gloves are suitable for both right and left-handed players. And
              for the goalkeepers, we present our advanced goalkeeping gloves.
              The gloves feature a professional-grade latex palm that provides
              superior grip and control, even in wet conditions. The backhand is
              made of durable and flexible material that moves with your hand,
              allowing for maximum flexibility and movement. The gloves have an
              adjustable closure that allows for a secure and customized fit.
              Whether you're a seasoned pro or just starting out, our baseball
              and goalkeeping gloves are the perfect choice for your game. Order
              yours today and take your performance to the next level!
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
        <TypingText title="Perform at your best on the court with our top-quality Gloves" />
      </motion.div>
      <hr />
      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Categories of gloves
          </h1>
        </div>
      </div>
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
            .filter((item) => item.category === "Gloves")
            .map((currItem) => (
              <GlovesCard key={currItem._id} {...currItem} />
            ))}
        </div>
      )}
    </>
  );
};

export default Gloves;
