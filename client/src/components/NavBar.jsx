import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/wareBook-logo.png";
import Inlogo from "../assets/img/In-logo-white.png";
import Xlogo from "../assets/img/X-logo-white.png";
import Gitlogo from "../assets/img/Git-logo-white.png";
import Iglogo from "../assets/img/Ig-logo-white.png";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-auto bg-[#393280] lg:h-[56px] p-5">
        <a
          className="text-1xl text-medium p-2 text-white"
          href="tel:+234 701 312 3835"
        >
          +234 701 312 3835
        </a>
        <div className="flex">
          <a href="https://www.linkedin.com/company/utility-ware/">
            <img className="p-4 h-14 w-14" src={Inlogo} alt="Linked-logo"></img>
          </a>
          <a href="https://twitter.com/UtilityWareLtd/">
            <img className="p-4 h-14 w-14" src={Xlogo} alt="Linked-logo"></img>
          </a>
          <a href="https://github.com/Utility-Ware/">
            <img
              className="p-4 h-14 w-14"
              src={Gitlogo}
              alt="Linked-logo"
            ></img>
          </a>
          <a href="https://www.instagram.com/utilityware/">
            <img className="p-4 h-14 w-14" src={Iglogo} alt="Linked-logo"></img>
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-4 h-24">
        <a href="/">
          <img src={logo} alt="wareBook-logo"></img>
        </a>
        <SearchComponent />
        <div>
          <ul className="flex divide-x-2 divide-gray-500 text-[#393280]">
            <li className="p-6">
              <a href="/">ACCOUNT</a>
            </li>
            <li className="p-6">
              <a href="/">CART:($0)</a>
            </li>
            <li className="p-6">
              <a href="/">WISHLIST</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center bg-white">
        <hr className=" h-[1px] w-[90%] my-[0.1px] items-end justify-end bg-gray-300 border-gray-300 border-[1px]"></hr>
      </div>

      <div className="flex justify-end items-center bg-white p-4 h-24 px-4">
        <div className="items-center hidden justify-center md:flex divide-x-2 divide-gray-500">
        <ul className="flex justify-center">
          <li className="p-8">
            <a href="/">HOME</a>
          </li>
          <li className="p-8">
            <a href="/">ABOUT US</a>
          </li>
          <li className="p-8">
            <a href="/">PUBLISHER</a>
          </li>
          <li className="p-8">
            <a href="/">BOOKSTORE</a>
          </li>
          <li className="p-8">
            <a href="/">CONTACT US</a>
          </li>
          <li className="p-8">
            <a href="/">BLOG</a>
          </li>
        </ul>
        </div>
        <div onClick={handleNav} className="flex md:hidden justify-end items-start">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[] ease-in-out duration-500"
                : "fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 bg-[] ease-in-out duration-500"
            }
          >
            <a href="/">
              <img src={logo} alt="wareBook-logo"></img>
            </a>
            <li className="p-4 border-b border-gray-600">
              <a href="/">HOME</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/">ABOUT US</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/">PUBLISHER</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/">BOOKSTORE</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/">CONTACT US</a>
            </li>
            <li className="p-4">
              <a href="/">BLOG</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
