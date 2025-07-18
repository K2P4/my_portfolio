/** @format */

import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

const FooterComponent = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full relative h-[50%] py-4  flex flex-col gap-5 justify-center projectBox shadow-xl   shadow-[#28112c]   opacity-95 ">
      <h1 className="flex items-center  mx-auto gap-1 text-xl text-yellow-400  header font-bold tracking-widest  ">
        PHYO THURA{" "}
        <span>
          <DiCodeigniter className=" w-4 " />
        </span>
      </h1>

      <div className="">
        <ul className="flex justify-center items-center space-x-4 sm:space-x-9 cardFont">
          <li
            onClick={() => scrollToSection("about")}
            className="text-gray-300 text-xs sm:text-base  select-none transition-transform  tracking-wide hover:cursor-pointer duration-700 hover:text-yellow-400  font-medium "
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("client")}
            className="text-gray-300 text-xs sm:text-base  transition-transform tracking-wide hover:cursor-pointer duration-700 hover:text-yellow-400  font-medium "
          >
            Reviews
          </li>
          <li
            onClick={() => scrollToSection("project")}
            className="text-gray-300 text-xs sm:text-base  transition-transform tracking-wide hover:cursor-pointer duration-700 hover:text-yellow-400  font-medium "
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("home")}
            className="text-gray-300 text-xs sm:text-base  transition-transform tracking-wide hover:cursor-pointer duration-700 hover:text-yellow-400  font-medium "
          >
            Resume
          </li>
          <li
            onClick={() => scrollToSection("service")}
            className="text-gray-300 text-xs   sm:text-base  transition-transform tracking-wide hover:cursor-pointer duration-700 hover:text-yellow-400  font-medium "
          >
            Service
          </li>
        </ul>
      </div>
      <div className="flex gap-4 sm:gap-7 items-center justify-center   sm:mt-4">
        <a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
          <FaFacebookF className="bg-[#2a2a2a] text-yellow-500 rounded-full h-11 w-11 p-2 hover:scale-105 transition" />
        </a>
        <a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
          <AiFillInstagram className="bg-[#2a2a2a] text-yellow-500 rounded-full h-11 w-11 p-2 hover:scale-105 transition" />
        </a>
        <a
          href="					https://www.linkedin.com/in/phyo-thura-199215278/
"
        >
          <FaLinkedinIn className="bg-[#2a2a2a] text-yellow-500 rounded-full h-11 w-11 p-2 hover:scale-105 transition" />
        </a>
        <a href="https://github.com/K2P4">
          <FaGithub className="bg-[#2a2a2a] text-yellow-500 rounded-full h-11 w-11 p-2 hover:scale-105 transition" />
        </a>
      </div>

      <svg
        onClick={() => scrollToSection("home")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8  absolute  animate-bounce -top-1 left-[47%] sm:-top-4 text-yellow-500  sm:left-[49%] h-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default FooterComponent;
