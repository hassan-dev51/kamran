import React from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { urlFor } from "../client";
import { Link } from "react-router-dom";
const BasketballCard = ({ image, name, price, _id }) => {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className="bg-[rgba(255,255,255,0.1)] shadow-lg h-full rounded-3xl"
      >
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" className="h-[200px]" src={urlFor(image)} />
          <Card.Body className="h-full">
            <Card.Title className="text-blue-500">{name}</Card.Title>
            <Card.Title>$ {price}</Card.Title>

            <Link to={`/basketball/${_id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default BasketballCard;
