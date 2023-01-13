import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../client";

import { Link } from "react-router-dom";
import { urlFor } from "../client";
import Choose from "./Choose";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="product"]';

    client.fetch(query).then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center py-10"
      >
        <h2 className="md:text-6xl text-2xl">Our Feature Products</h2>
      </motion.div>

      <motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 px-4 "
        >
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
            .map((currElem, ind) => (
              <motion.div
                key={ind}
                className="bg-slate-300 lg:p-4 lg:m-4 md:m-3 md:p-3  p-2 m-2 flex flex-col justify-center items-start"
              >
                <Link to="/products">
                  <img
                    src={urlFor(currElem.image).url()}
                    alt={currElem.name}
                    loading="lazy"
                    className="w-2/4"
                  />
                  <h2>{currElem.name}</h2>
                  <p>{currElem.details}</p>
                </Link>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <Choose />
    </div>
  );
};

export default Product;
