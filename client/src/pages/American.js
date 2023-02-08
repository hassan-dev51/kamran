import React from "react";
import { motion } from "framer-motion";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";

import AmericanCard from "../components/AmericanCard";
import { BallTriangle } from "react-loader-spinner";
import { useCategoryContent } from "../context/categoryContext";

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
            <h1 className="text-center">AMERICAN FOOTBALL</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              Get ready for game day with our high-performance American football
              uniforms. <br />
              <br /> Make a statement on the field with our stylish and durable
              American football uniforms. <br />
              <br /> Crafted with the latest technologies and materials, our
              American football uniforms are built to last. <br />
              <br /> From practice to game day, our American football uniforms
              will keep you comfortable and focused. <br />
              <br /> Stand out from the competition with our unique and
              customizable American football uniforms. <br />
              <br /> Our American football uniforms are trusted by top teams and
              players across the country. <br />
              <br /> Designed with the athlete in mind, our American football
              uniforms will help you perform at your best. <br />
              <br /> Get the complete American football uniform package of
              jersey, pants, socks, and more. <br />
              <br /> Join the ranks of elite players who trust our American
              football uniforms to help them succeed on the field. <br />
              <br /> The perfect choice for any team. <br />
              <br /> Step onto the field with confidence in our high-performance
              American football uniforms. <br />
              <br /> Experience the ultimate comfort and durability with our
              American football uniforms. <br />
              <br /> Designed for the modern athlete, our American football
              uniforms combine style and functionality. <br />
              <br />
              Our American football uniforms are built to withstand the toughest
              tackles and hits. <br />
              <br /> Take your game to the next level with our advanced American
              football uniforms. <br />
              <br /> Our American football uniforms are perfect for players of
              all skill levels and positions. <br />
              <br /> Join the ranks of elite athletes who trust our American
              football uniforms to help them perform at their best.
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
        <TypingText title="Stand out from the competition with our unique and customizable American football uniforms" />
      </motion.div>

      <hr />

      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            American Football Categories
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
              .filter((item) => item.category === "AmericanUniform")
              .map((currItem) => (
                <AmericanCard key={currItem._id} {...currItem} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default American;
