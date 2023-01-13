import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import { Link } from "react-router-dom";
const AmericanCard = ({ image, name, price, _id }) => {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className="bg-[rgba(255,255,255,0.1)] shadow-lg h-full rounded-3xl"
      >
        <div className="">
          <img className="w-2/5 m-auto" src={urlFor(image)} alt="Cad" />
          <div className="px-6 py-4">
            <div className="font-medium text-xl mb-2">{name}</div>
            <span className="text-gray-700 text-base">$ {price}</span>
          </div>
          <div className="px-6 py-4">
            <Link to={`/american/${_id}`}>View Details</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AmericanCard;
