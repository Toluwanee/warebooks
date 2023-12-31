import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/wareBook-logo.png";
import Inlogo from "../assets/img/In-logo-white.png";
import Xlogo from "../assets/img/X-logo-white.png";
import Gitlogo from "../assets/img/Git-logo-white.png";
import Iglogo from "../assets/img/Ig-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#393280]">
      <div className="flex">
        <div className="p-10 pl-10 max-sm:pl-2 max-sm:p-2 w-1/3 max-sm:w-auto text-sm max-sm:text-xs">
          <Link to="/" className="bg-white">
            <img
              className="max-sm:w-26 max-sm:h-8"
              src={logo}
              alt="wareBook-logo"
            />
          </Link>
          <p className="px-4 text-left w-[256px] max-sm:w-auto text-white">
            wareBooks is a complete Book publication tool for authors, with a
            storefront for published books to be made available to readers
            worldwide
          </p>
        </div>
        <div className="justify-start items-start w-1/3 max-sm:w-auto text-sm max-sm:text-xs text-white">
          <h1 className="p-9 max-sm:p-3">COMPANY</h1>
          <nav className="">
            <ul className="flex flex-col">
              <li className="p-0.5">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="about">ABOUT</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="contact">CONTACT</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="blog">BLOG</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="justify-start items-start w-1/3 max-sm:w-auto text-sm max-sm:text-xs text-white">
          <h1 className="p-9 max-sm:p-3">COMPANY</h1>
          <nav className="">
            <ul className="flex flex-col">
              <li className="p-0.5">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="about">ABOUT</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="contact">CONTACT</NavLink>
              </li>
              <li className="p-0.5">
                <NavLink to="blog">BLOG</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex py-4 max-sm:py-1 justify-center items-center">
        <a href="https://www.linkedin.com/company/utility-ware/">
          <img
            className="p-5 h-16 w-16 max-sm:w-12 max-sm:h-12"
            src={Inlogo}
            alt="Linked-logo"
          ></img>
        </a>
        <a href="https://twitter.com/UtilityWareLtd/">
          <img
            className="p-5 h-16 w-16 max-sm:w-12 max-sm:h-12"
            src={Xlogo}
            alt="Linked-logo"
          ></img>
        </a>
        <a href="https://github.com/Utility-Ware/">
          <img
            className="p-5 h-16 w-16 max-sm:w-12 max-sm:h-12"
            src={Gitlogo}
            alt="Linked-logo"
          ></img>
        </a>
        <a href="https://www.instagram.com/utilityware/">
          <img
            className="p-5 h-16 w-16 max-sm:w-12 max-sm:h-12"
            src={Iglogo}
            alt="Linked-logo"
          ></img>
        </a>
      </div>
      <div className="pl-7 pr-7 hidden md:flex sm:hidden justify-between items-center text-sm max-sm:text-xs text-white">
        <div>
          <p>© 2023 wareBooks. All Rights Reserved.</p>
        </div>
        <div>
          <nav>
            <ul className="flex divide-x-[1px]">
              <li className="p-6">
                <NavLink to="privacy-policy">Privacy</NavLink>
              </li>
              <hr className="h-15 my-1 divide-x-2 divide-gray-500 max-sm:text-xs"></hr>
              <li className="p-6">
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="px-7 max-sm:px-3 md:hidden sm:flex  justify-between items-center max-sm:text-xs text-white">
        <div>
          <nav>
            <ul className="flex justify-between items-center divide-x-[1px]">
              <li className="p-3">
                <a href="/">Privacy</a>
              </li>
              <hr className="h-15 my-1 divide-x-4 divide-gray-500 max-sm:text-xxs"></hr>
              <li className="p-3">
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>© 2023 wareBooks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
