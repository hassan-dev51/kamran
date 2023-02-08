import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { client } from "../client";

import { Link } from "react-router-dom";
import { urlFor } from "../client";

import Testimonials from "./Testimonials";
import Choose from "./About";
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="product"]';

    client.fetch(query).then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center py-10  bg-[#F9F9F9]"
        >
          <h2 className="md:text-6xl text-2xl text-red-500">
            Our Feature Products
          </h2>
        </motion.div>

        <motion.div className="bg-[#F9F9F9]">
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
                  initial={{ scale: 0.9, opacity: 0.3 }}
                  whileHover={{ scale: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "backInOut" }}
                  key={ind}
                  className="backdrop-blur-sm bg-[#F9F9F9] z-10 border-[1px] lg:p-4 lg:m-4 md:m-3 md:p-3  p-2 m-2 "
                >
                  <Link to={`/${currElem.slug.current}`}>
                    <Card style={{ width: "100%", height: "100%" }}>
                      <Card.Img
                        variant="top"
                        className="h-[200px]"
                        src={urlFor(currElem.image)}
                      />
                      <Card.Body className="h-full bg-[#F9F9F9]">
                        <Card.Title className="text-blue-500">
                          Product
                        </Card.Title>
                        <Card.Subtitle className="py-2 text-red-500">
                          {currElem.name}
                        </Card.Subtitle>

                        <Card.Title className="text-gray-500">
                          Details
                        </Card.Title>
                        <Card.Text className="text-black">
                          {currElem.details}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
      {/* <Testimonials /> */}
      <Choose />
    </>
  );
};

export default Product;
