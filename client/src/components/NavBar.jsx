// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/wareBook-logo.png";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  return (
    <section>
      <nav className="flex flex-col justify-between items-center max-container border-b-2 border-b-[#393280]">
        <div className="flex justify-between items-center w-full max-sm:w-auto bg-[#393280] px-4 h-min">
          <Link to="/">
            <img
              src={logo}
              alt="wareBook-logo"
              className="max-sm:w-26 max-sm:h-8"
            />
          </Link>
          <SearchComponent />
          <div>
            <ul className="flex divide-x-2 divide-gray-500 text-sm max-sm:text-xs text-white">
              <li className="px-2 max-sm:p-1">
                <NavLink to="login">LOGIN</NavLink>
              </li>
              <li className="px-2 max-sm:p-1">
                <NavLink to="register">REGISTER</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center bg-white">
          <hr className=" h-[1px] w-[90%] my-[0.1px] items-end justify-end bg-gray-300 border-gray-300 border-[1px]"></hr>
        </div>

        <div className="flex justify-center items-center bg-white w-full h-auto px-4">
          <div className="flex items-center justify-center text-sm max-sm:text-xs">
            <ul className="flex justify-center divide-x-2 divide-gray-500">
              <li className="px-8 py-4 max-sm:p-2">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="px-8 py-4 max-sm:p-2">
                <NavLink to="about">ABOUT</NavLink>
              </li>
              <li className="px-8 py-4 max-sm:p-2">
                <a href="#publisher">PUBLISHER</a>
              </li>
              {/* <li className="px-8 py-4 max-sm:p-2">
                <NavLink to="dashboard">PUBLISHER</NavLink>
              </li> */}
              <li className="px-8 py-4 max-sm:p-2">
                <NavLink to="bookstore">BOOKSTORE</NavLink>
              </li>
              <li className="px-8 py-4 max-sm:p-2">
                <NavLink to="contact">CONTACT</NavLink>
              </li>
              <li className="px-8 py-4 max-sm:p-2">
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
