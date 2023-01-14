import React, { useState, useEffect } from "react";
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
          <div key={ind}>
            <img src={urlFor(currElem.image)} alt={currElem.name} width={300} />
            <h1>{currElem.category}</h1>
            <h1>{currElem.name}</h1>
            <span>{currElem.price}</span>
            <p>{currElem.decription}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetails;
