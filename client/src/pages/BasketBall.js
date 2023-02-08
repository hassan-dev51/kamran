import React from "react";

import { motion } from "framer-motion";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import BasketballCard from "../components/BasketballCard";
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
const BasketBall = () => {
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
            <h1 className="text-center ">BasketBall</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              Perform at your best on the court with our top-quality basketball
              uniforms. <br /> <br /> Experience the ultimate comfort and
              performance with our basketball uniforms. <br /> <br /> Designed
              for the modern player, our basketball uniforms combine style and
              functionality. <br /> <br /> Make a statement on the court with
              our bold and stylish basketball uniforms. <br /> <br /> Our
              basketball uniforms are trusted by top teams and players across
              the country. <br /> <br /> Get ready to dominate the competition
              with our top-of-the-line basketball uniforms. <br /> <br /> Our
              basketball uniforms are built to withstand the demands of the
              game. <br /> <br /> Take your game to the next level with our
              advanced basketball uniforms. <br /> <br /> Our basketball
              uniforms are perfect for players of all skill levels and
              positions. <br /> <br /> Join the ranks of elite athletes who
              trust our basketball uniforms to help them perform at their best.{" "}
              <br />
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
        <TypingText title="Perform at your best on the court with our top-quality basketball uniforms" />
      </motion.div>
      <hr />
      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="md:text-5xl text-xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Categories of basketball product
          </h1>
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
              .filter((item) => item.category === "BasketBallUniform")
              .map((currItem) => (
                <BasketballCard key={currItem._id} {...currItem} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BasketBall;
