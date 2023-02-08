import React, { useState } from "react";
import Rectangle from "./Rectangle 15.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useCategoryContent } from "../context/categoryContext";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState();
  const [allData, setAllData] = useState([]);
  const { cartProducts } = useCategoryContent();
  const products = cartProducts.map((item) => item.name);
  const category = cartProducts.map((item) => item.category);
  console.log(products);
  const handleSubmit = (e) => {
    const newEntry = { name, email, value, message, products, category };
    setAllData([...allData, newEntry]);
    e.preventDefault();
    setEmail("");
    setName("");
    setValue(null);
    setMessage(" ");
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1032px] flex">
        <div className="md:block hidden">
          <img src={Rectangle} alt="contact" />
        </div>
        <div className="mt-10 p-5">
          <h2>Contact Us</h2>
          <p>
            Contact us for a free consultation and let our we will talk to you
            about how we can help grow your Business
          </p>

          <form method="POST" onSubmit={handleSubmit}>
            <div
              className="
            flex flex-col gap-2"
            >
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-transparent border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342]"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-white border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342]"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="md:flex flex-cols justify-center items-center gap-3">
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-gray-900"
                >
                  Product
                </label>
                <input
                  type="text"
                  className="bg-white border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342] mx-2"
                  name="product"
                  value={products}
                  readOnly
                />
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <input
                  type="text"
                  className="bg-white border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342] mx-2"
                  name="category"
                  value={category}
                  readOnly
                />
              </div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-gray-900"
              >
                WhatsApp Number
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={value}
                onChange={setValue}
                limitMaxLength={true}
                className="border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342]"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="bg-transparent border-[2px] border-gray-300 outline-none text-sm rounded-lg block w-full p-2 focus:border-[#F9D342] focus:ring-[#F9D342]"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-3 bg-[#F9D342] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
