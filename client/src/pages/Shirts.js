import React from "react";

import { motion } from "framer-motion";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import ShirtCard from "../components/ShirtCard";
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

const Shirt = () => {
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
            <h1 className="text-center">Shirts</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500 tracking-wide">
              Introducing our latest t-shirt, the ultimate combination of style
              and comfort. Made from soft, breathable fabric, this t-shirt is
              perfect for everyday wear. The modern design features a classic
              crew neckline and short sleeves for a timeless look. The color
              options available will allow you to choose the one that suits your
              style best. The fabric is pre-shrunk to ensure a consistent fit
              wash after wash. Whether you're running errands, hanging out with
              friends, or just lounging at home, this t-shirt is sure to be your
              new go-to. Perfect for any casual occasion. Made from premium
              quality, breathable cotton, this t-shirt is both comfortable and
              durable. The classic fit and crew neck design make it versatile
              and suitable for any body type. The shirt features a variety of
              colors and designs, with a range of sizes for both men and women.
              With its soft, lightweight feel, you'll love wearing it all day
              long. Whether it's for a weekend hangout or a casual day at work,
              this t-shirt is a must-have for any wardrobe. Don't miss out on
              this great deal, get yours today!
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
        <TypingText title="Designed for everyday wear, our shirts are perfect for any occasion and event" />
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
            <h1 className="md:text-5xl text-xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Categories of Shirt
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
              .filter((item) => item.category === "T Shirts")
              .map((currItem) => (
                <ShirtCard key={currItem._id} {...currItem} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Shirt;
