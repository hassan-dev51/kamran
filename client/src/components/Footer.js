import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="bg-[#f9d342]/30 pt-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4">
          <div className="w-full  md:text-left">
            <h3 className="text-2xl mb-4 font-bold">About Us</h3>
            <p className="mb-4 text-left text-[#675c5c]/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              laoreet, tortor id facilisis malesuada, urna lacus aliquet lectus.
            </p>
          </div>
          <div className="w-full md:text-left">
            <h3 className="text-2xl mb-4 font-bold">Contact Us</h3>
            <p className="mb-4">
              <a
                href="mailto:info@yourcompany.com"
                className="text-[#675c5c]/80"
              >
                info@yourcompany.com
              </a>
            </p>
            <p className="mb-4">
              <a href="tel:+92 1234567890" className="text-[#675c5c]/80">
                +92 1234567890{" "}
              </a>
            </p>
          </div>
          <div className="w-full md:text-left">
            <h3 className="text-2xl mb-4 font-bold">Stay Connected</h3>
            <ul className="flex">
              <li className="mx-2">
                <a href="https://www.facebook.com" className="text-gray-400">
                  <BsFacebook />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.facebook.com" className="text-gray-400">
                  <BsTwitter />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.facebook.com" className="text-gray-400">
                  <BsInstagram />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.facebook.com" className="text-gray-400">
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#F9D342] py-6">
          <h2 className="mb-0 text-center text-base">
            &copy; All rights reserved {year}
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
