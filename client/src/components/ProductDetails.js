import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
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
          <div key={ind} className="w-1/3">
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Img
                variant="top"
                className="h-[200px]"
                src={urlFor(currElem.image)}
              />
              <Card.Body className="h-full">
                <Card.Title className="text-gray-400"> Category</Card.Title>
                <Card.Subtitle className="py-2 text-red-500">
                  {" "}
                  {currElem.category}
                </Card.Subtitle>
                <Card.Title className="text-blue-500">Product</Card.Title>
                <Card.Subtitle className="py-2 text-red-500">
                  {currElem.name}
                </Card.Subtitle>
                <Card.Title>$ {currElem.price}</Card.Title>
                <Card.Text>{currElem.decription}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetails;
