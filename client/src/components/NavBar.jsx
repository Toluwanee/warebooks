import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
    <section>
      <nav className="flex flex-col justify-between items-center max-container">
        <div className="flex justify-between items-center w-full bg-[#393280] h-auto lg:h-[46px] px-4 py-2">
          <a
            className="text-1xl text-base max-sm:text-xs p-2 text-white"
            href="tel:+234 701 312 3835"
          >
            +234 701 312 3835
          </a>
          <div className="flex">
            <a href="https://www.linkedin.com/company/utility-ware/">
              <img
                className="p-4 h-14 w-14 max-sm:w-12 max-sm:h-12"
                src={Inlogo}
                alt="Linked-logo"
              ></img>
            </a>
            <a href="https://twitter.com/UtilityWareLtd/">
              <img
                className="p-4 h-14 w-14 max-sm:w-12 max-sm:h-12"
                src={Xlogo}
                alt="Linked-logo"
              ></img>
            </a>
            <a href="https://github.com/Utility-Ware/">
              <img
                className="p-4 h-14 w-14 max-sm:w-12 max-sm:h-12"
                src={Gitlogo}
                alt="Linked-logo"
              ></img>
            </a>
            <a href="https://www.instagram.com/utilityware/">
              <img
                className="p-4 h-14 w-14 max-sm:w-12 max-sm:h-12"
                src={Iglogo}
                alt="Linked-logo"
              ></img>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center w-full max-sm:w-auto  bg-white px-4 h-auto">
          <a href="/">
            <img
              src={logo}
              alt="wareBook-logo"
              className="max-sm:w-26 max-sm:h-8"
            ></img>
          </a>
          <SearchComponent />
          <div>
            <ul className="flex divide-x-2 divide-gray-500 max-sm:text-xs text-[#393280]">
              <li className="p-6 max-sm:p-1">
                <NavLink to="login">LOGIN</NavLink>
              </li>
              <li className="p-6 max-sm:p-1">
                <NavLink to="register">REGISTER</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center bg-white">
          <hr className=" h-[1px] w-[90%] my-[0.1px] items-end justify-end bg-gray-300 border-gray-300 border-[1px]"></hr>
        </div>

        <div className="flex justify-center items-center bg-white w-full h-auto px-4">
          <div className="flex items-center justify-center max-sm:text-xs">
            <ul className="flex justify-center divide-x-2 divide-gray-500">
              <li className="p-8 max-sm:p-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="p-8 max-sm:p-2">
                <NavLink to="about">ABOUT</NavLink>
              </li>
              <li className="p-8 max-sm:p-2">
                <a href="/">PUBLISHER</a>
              </li>
              <li className="p-8 max-sm:p-2">
                <a href="/">BOOKSTORE</a>
              </li>
              <li className="p-8 max-sm:p-2">
                <NavLink to="contact">CONTACT</NavLink>
              </li>
              <li className="p-8 max-sm:p-2">
                <a href="/">BLOG</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
