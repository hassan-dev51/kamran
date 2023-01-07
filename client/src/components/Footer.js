import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4">
          <div className="w-full  md:text-left">
            <h3 className="text-2xl mb-4 font-bold">About Us</h3>
            <p className="mb-4 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              laoreet, tortor id facilisis malesuada, urna lacus aliquet lectus.
            </p>
          </div>
          <div className="w-full md:text-left">
            <h3 className="text-2xl mb-4 font-bold">Contact Us</h3>
            <p className="mb-4">
              <a href="mailto:info@yourcompany.com" className="text-white">
                info@yourcompany.com
              </a>
            </p>
            <p className="mb-4">
              <a href="tel:+92 1234567890" className="text-white">
                +92 1234567890{" "}
              </a>
            </p>
          </div>
          <div className="w-full md:text-left">
            <h3 className="text-2xl mb-4 font-bold">Stay Connected</h3>
            <ul className="flex">
              <li className="mx-2">
                <a
                  href="https://www.facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  <BsTwitter />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="mb-0 text-center text-base">
          &copy; All rights reserved {year}
        </h2>
      </footer>
    </>
  );
};

export default Footer;
