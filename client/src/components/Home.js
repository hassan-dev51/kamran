import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

import { carouselData } from "../constants/Slider";
import "./home.css";
// import About from "./About";
import Choose from "./About";

const Home = () => {
  return (
    <div>
      <Carousel>
        {carouselData.map((currElem, index) => (
          <Carousel.Item key={index}>
            <img
              src={currElem.img}
              alt="First slide"
              className="w-full h-[700px]"
              loading="lazy"
            />
            <Carousel.Caption>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                className="backdrop-blur-sm bg-rgba(255,255,255,0.25) z-10 border-[1px] flex flex-col items-center h-[40vh] justify-evenly "
              >
                <h3 className="text-red-600">{currElem.text}</h3>
                <p className="text-sm md:text-lg text-justify p-1 md:p-4">
                  {currElem.paragraph}
                </p>
                <a href={currElem.link} target="_blank" rel="noreferrer">
                  <button>{currElem.spanText}</button>
                </a>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Choose />
    </div>
  );
};

export default Home;
