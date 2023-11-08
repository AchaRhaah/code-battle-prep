import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray body-font bg-white">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="fleFx title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <h1 className="font-Poppins font-bold text-xl text-black">
              Jes<span className="text-yellow">co</span>
            </h1>
          </a>
          <p className="my-2 text-sm text-gray font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            atque?
          </p>
          <h2 className="font-bold text-md text-black font-Poppins my-4">
            Follow Us:
          </h2>
          <span className="inline-flex w-full sm:ml-auto sm:mt-0 mt-2 justify-start gap-3 text-lg">
            <a className="text-white">
              <BsFacebook className=" text-[#0F8BEA]" />
            </a>
            <a className=" text-[#0F8BEA]">
              <FaTwitter />
            </a>

            <a className=" text-[#0F8BEA]">
              <FaLinkedinIn />
            </a>
          </span>{" "}
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center ">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:flex md:flex-col">
            <h2 className="title-font  text-gray-900 tracking-widest text-sm mb-3 text-black font-Poppins font-bold">
              Take a tour
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Features</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">products</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">support</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:flex md:flex-col">
            <h2 className="title-font  text-gray-900 tracking-widest text-sm mb-3 text-black font-Poppins font-bold">
              Our company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Media</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:flex md:flex-col">
            <h2 className="title-font font-Poppins font-bold text-gray-900 tracking-widest text-sm mb-3 text-black">
              Subscribe
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Subscribe to get the latest news from us
                </a>
              </li>

              <div className="w-full flex rounded-md  border-t-2 border-b-2 border-l-2  border-[#F0F0F3] overflow-hidden mt-4 ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[80%] placeholder:font-Poppins placeholder:text-sm placeholder:font-medium pl-3 outline-none"
                />
                <div className="bg-yellow  flex object-contain justify-center items-center w-[20%] p-2 rounded-xl">
                  <AiOutlineArrowRight className="text-white text-lg" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white border-t flex justify-center items-center">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center items-center sm:flex-row">
          <p className="text-gray-500 text-sm text-center ">© 2021 O & A</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
