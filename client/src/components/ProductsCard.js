import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { urlFor } from "../client";

const ProductsCard = ({ image, name, price, _id, category }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" className="h-[200px]" src={urlFor(image)} />
          <Card.Body className="h-full">
            <Card.Title className="text-gray-400"> Category</Card.Title>
            <Card.Subtitle className="py-2 text-red-500">
              {" "}
              {category}
            </Card.Subtitle>
            <Card.Title className="text-blue-500">Product</Card.Title>
            <Card.Subtitle className="py-2 text-red-500">{name}</Card.Subtitle>
            <Card.Title>$ {price}</Card.Title>

            <Link to={`/products/${_id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProductsCard;
