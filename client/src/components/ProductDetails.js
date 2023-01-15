import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BallTriangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";

const ProductDetails = () => {
  const [Products, setProducts] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  const filteredData = Products.filter((item) => item._id === _id);

  return (
    <div>
      {!filteredData.length ? (
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
        filteredData.map((currElem, ind) => (
          <div
            key={ind}
            className="p-8 grid"
            style={{ gridTemplateColumns: "1fr 2fr" }}
          >
            <Card style={{ width: "90%" }}>
              <Card.Img
                variant="top"
                className="h-[full]"
                src={urlFor(currElem.image)}
              />
            </Card>
            <Card.Body className="h-full">
              <Card.Title className="py-2 text-red-500 "> Category</Card.Title>
              <Card.Subtitle
                className="py-2 text-gray-400"
                style={{ fontSize: "2rem" }}
              >
                {" "}
                {currElem.category}
              </Card.Subtitle>
              <hr className="w-1/3" />
              <Card.Title className="text-red-500">Product</Card.Title>
              <Card.Subtitle
                className="py-2 text-blue-500"
                style={{ fontSize: "2rem" }}
              >
                {currElem.name}
              </Card.Subtitle>
              <hr className="w-1/3" />
              <Card.Title className="py-2 text-green-800 border w-[90px] text-center">
                $ {currElem.price}
              </Card.Title>
              <Card.Text
                className="py-2 capitalize text-gray-600 "
                style={{ fontSize: "1.3rem" }}
              >
                {currElem.decription}
              </Card.Text>
              <hr />
              <Button variant="success">Place Order</Button>
            </Card.Body>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetails;
