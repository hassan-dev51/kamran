import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
const ProductsCard = ({ image, name, price, _id, category, products }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className="bg-[rgba(255,255,255,0.1)] shadow-lg h-full rounded-3xl"
      >
        <div className="">
          <div className="w-1/2">
            <img className="" src={urlFor(image)} alt="Cad" />
          </div>

          <div className="px-6 py-4">
            <div className="font-medium text-xl mb-2">{category}</div>
            <div className="font-medium text-xl mb-2">{name}</div>
            <span className="text-gray-700 text-base">$ {price}</span>
          </div>
          <div className="px-6 py-4">
            <Link to={`/products/${_id}`}>View Details</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsCard;
