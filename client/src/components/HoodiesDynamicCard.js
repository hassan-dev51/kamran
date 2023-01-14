import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";

const HoodiesDynamicCard = () => {
  const [glovesProducts, setGlovesProducts] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => setGlovesProducts(data));
  }, []);

  const filteredData = glovesProducts.filter((item) => item._id === _id);

  return (
    <div>
      {filteredData.map((currElem, ind) => (
        <div key={ind}>
          <img src={urlFor(currElem.image)} alt={currElem.name} width={300} />
          <h1>{currElem.name}</h1>
          <span>{currElem.price}</span>
          <p>{currElem.decription}</p>
        </div>
      ))}
    </div>
  );
};

export default HoodiesDynamicCard;
