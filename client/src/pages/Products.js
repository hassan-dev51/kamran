import React, { useState, useEffect } from "react";
import { client } from "../client";
import { motion } from "framer-motion";
import ProductsCard from "../components/ProductsCard";
import { BallTriangle } from "react-loader-spinner";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <motion.h1 className="py-10 text-center">
        View All Products At One Place
      </motion.h1>
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
        <div className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4 mb-4 px-8">
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
            .map((currElem) => (
              <ProductsCard key={currElem._id} {...currElem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
