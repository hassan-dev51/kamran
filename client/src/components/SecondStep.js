import React from "react";

const SecondStep = () => {
  return (
    <div className="grid md:grid-col-2 grid-col-1 p-2">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id=""
        className="w-[200px] p-1 m-1 bg-red-400 outline-dots"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id=""
        className="w-[200px] p-1 m-1 bg-red-500 outline-dots"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id=""
        className="w-[200px] p-1 m-1 bg-red-300 outline-dots"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id=""
        className="w-[200px] p-1 m-1 bg-red-300 outline-dots"
      />
    </div>
  );
};

export default SecondStep;
