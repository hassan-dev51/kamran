import React from "react";

import { motion } from "framer-motion";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import HoodiesCard from "../components/HoodiesCard";
import { BallTriangle } from "react-loader-spinner";
import { useCategoryContent } from "../context/categoryContext";

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
            <h1 className="text-center">Hoodies</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              {" "}
              Our hoodies are built to withstand the elements and keep you warm
              all season long. <br /> <br /> Elevate your everyday style with
              our advanced hoodies. <br /> <br /> Our hoodies come in a variety
              of sizes and styles, perfect for everyone. <br /> <br /> Join the
              ranks of fashion-forward individuals who trust our hoodies to keep
              them stylish and comfortable. Stay warm and stylish with our
              top-quality hoodies. <br />
              <br /> Experience the ultimate comfort and durability with our
              hoodies. <br />
              <br /> Designed for everyday wear, our hoodies are perfect for any
              occasion. <br /> <br /> Make a statement with our bold and
              fashionable hoodies. <br /> <br /> Our hoodies are made with the
              highest-quality materials for lasting comfort and style. <br />{" "}
              <br /> Get ready to conquer the cold with our top-of-the-line
              hoodies. <br /> <br /> Our hoodies are trusted by customers around
              the world. <br /> <br /> Get ready to upgrade your wardrobe with
              our top-of-the-line hoodies. <br /> <br /> Our hoodies are built
              to withstand the elements and last for years to come. <br />{" "}
              <br /> Stay comfortable and fashionable no matter where you go
              with our advanced hoodies. <br /> <br /> Our hoodies are perfect
              for any occasion and any style. <br /> <br /> Join the ranks of
              satisfied customers who trust our hoodies to keep them warm and
              stylish.
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
        <TypingText title="Designed for everyday wear, our hoodies are perfect for any occasion" />
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
            <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Categories of Hoodies
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
              .filter((item) => item.category === "Hoodies")
              .map((currItem) => (
                <HoodiesCard key={currItem._id} {...currItem} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Hoodies;
