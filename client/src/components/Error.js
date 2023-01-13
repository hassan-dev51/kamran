import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      page not found <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Error;
