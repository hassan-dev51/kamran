import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";

const TracksuitDynamicCard = () => {
  const [tracksuitProducts, serTracksuitProducts] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    const query = '*[_type=="products"]';
    client.fetch(query).then((data) => serTracksuitProducts(data));
  }, []);

  const filteredData = tracksuitProducts.filter((item) => item._id === _id);

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

export default TracksuitDynamicCard;
