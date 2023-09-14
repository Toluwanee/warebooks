import logo from "../assets/img/wareBook-logo.png";
import Inlogo from "../assets/img/In-logo-blue.png";
import Xlogo from "../assets/img/X-logo-black.png";
import Gitlogo from "../assets/img/Git-logo-black.png";
import Iglogo from "../assets/img/Ig-logo-gradient.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFE5E5] to-[#174C72] from-[#174C72] to-[#FFE5E5]">
      <div className="flex">
        <div className="p-10 pl-10 w-1/3">
          <a href="/">
            <img src={logo} alt="wareBook-logo"></img>
          </a>
          <p className="break-normal w-[256px] items-start">
            wareBooks is a complete Book publication tool for authors, with a
            storefront for published books to be made available to readers
            worldwide
          </p>
        </div>
        <div className="justify-start items-start w-1/3">
          <h1 className="p-9">COMPANY</h1>
          <nav className="">
            <ul className="flex flex-col">
              <li className="p-0.5">
                <a href="/">HOME</a>
              </li>
              <li className="p-0.5">
                <a href="/">ABOUT US</a>
              </li>
              <li className="p-0.5">
                <a href="/">CONTACT US</a>
              </li>
              <li className="p-0.5">
                <a href="/">BLOG</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="justify-start items-start w-1/3">
        <h1 className="p-9">COMPANY</h1>
          <nav className="">
            <ul className="flex flex-col">
              <li className="p-0.5">
                <a href="/">HOME</a>
              </li>
              <li className="p-0.5">
                <a href="/">ABOUT US</a>
              </li>
              <li className="p-0.5">
                <a href="/">CONTACT US</a>
              </li>
              <li className="p-0.5">
                <a href="/">BLOG</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex pt-5 pb-4 justify-center items-center">
        <a href="https://www.linkedin.com/company/utility-ware/">
          <img className="p-5 h-16 w-16" src={Inlogo} alt="Linked-logo"></img>
        </a>
        <a href="https://twitter.com/UtilityWareLtd/">
          <img className="p-5 h-16 w-16" src={Xlogo} alt="Linked-logo"></img>
        </a>
        <a href="https://github.com/Utility-Ware/">
          <img className="p-5 h-16 w-16" src={Gitlogo} alt="Linked-logo"></img>
        </a>
        <a href="https://www.instagram.com/utilityware/">
          <img className="p-5 h-16 w-16" src={Iglogo} alt="Linked-logo"></img>
        </a>
      </div>
      <div className="flex pl-7 pr-7 justify-between items-center">
        <div>
          <p>© 2023 wareBooks. All Rights Reserved.</p>
        </div>
        <div>
          <nav>
            <ul className="flex divide-x-[1px]">
              <li className="p-6">
                <a href="/">Privacy</a>
              </li>
              <hr className="h-15 my-1 divide-x-4 divide-gray-500 "></hr>
              <li className="p-6">
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
