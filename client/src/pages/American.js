import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../src/logo.svg";
const American = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="h-[900px]"
      >
        <div className="hero-banner-container">
          <div className="flex justify-between">
            <div>
              <h1>
                AMERICAN <br /> FOOTBALL
              </h1>
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

      <motion.div id="american_catagory">
        <h1>this is just for testing purpose</h1>
      </motion.div>
    </>
  );
};

export default American;
