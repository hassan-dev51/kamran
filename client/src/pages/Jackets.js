import React from "react";

import { motion } from "framer-motion";
import logo from "../../src/logo.svg";

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "../../src/constants/motion";
import JacketCard from "../components/JacketCard";
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

const Jackets = () => {
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
            <h1 className="text-center">Jackets</h1>
            <br />
          </div>
          <div>
            <p className="md:text-xl text-base text-gray-500">
              Introducing our new jacket, the perfect addition to your wardrobe
              for any season. This jacket is made with high-quality materials,
              ensuring durability and long-lasting wear. The unique design
              features a modern and sleek look, making it a versatile piece that
              can be dressed up or down. The jacket is insulated with a soft,
              warm filling to keep you comfortable in colder weather. It also
              has a waterproof outer layer to protect you from the elements. The
              jacket comes with a hood, adjustable cuffs, and a zippered front
              for added protection and a customizable fit. The jacket has
              multiple pockets for storing your essentials, including a zippered
              chest pocket, inner pockets, and hand warmer pockets. This jacket
              is perfect for outdoor activities such as hiking, camping, and
              skiing, as well as for everyday wear. Available in a variety of
              colors, this jacket is sure to become your go-to for any occasion.
              Order now and experience the ultimate in comfort and style.
              Introducing our new jacket, the perfect addition to your wardrobe
              for any season. Made with high-quality materials, this jacket is
              both durable and comfortable. The water-resistant outer shell will
              keep you dry in rainy weather, while the insulated interior will
              keep you warm in the colder months. The sleek and modern design
              features multiple pockets for added convenience, and the
              adjustable cuffs and hood allow for a customizable fit. Whether
              you're running errands or hitting the trails, this jacket is the
              ideal choice for any adventure. Don't miss out on this must-have
              item, order yours today!
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
        <TypingText title="Designed for seasonal wear, our jackets are perfect for any occasion" />
      </motion.div>
      <hr />
      <div className="md:px-8 px-4">
        <div className="py-8 text-center uppercase">
          <h1 className="text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Categories of JACKETS
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
              .filter((item) => item.category === "Jackets")
              .map((currItem) => (
                <JacketCard key={currItem._id} {...currItem} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Jackets;
