import logo from "../assets/img/wareBook-logo.png";
import Inlogo from "../assets/img/In-logo-white.png";
import Xlogo from "../assets/img/X-logo-white.png";
import Fblogo from "../assets/img/Fb-logo-white.png";
import Iglogo from "../assets/img/Ig-logo-white.png";
import SearchComponent from "./SearchComponent";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#393280] lg:h-[56px] p-5">
        <h1 className="text-1xl text-medium p-2 text-white ">
          +234 701 312 3835
        </h1>
        <div className="flex">
          <a href="/">
            <img className="p-4 h-14 w-14" src={Inlogo} alt="Linked-logo"></img>
          </a>
          <a href="/">
            <img className="p-4 h-14 w-14" src={Xlogo} alt="Linked-logo"></img>
          </a>
          <a href="/">
            <img className="p-4 h-14 w-14" src={Fblogo} alt="Linked-logo"></img>
          </a>
          <a href="/">
            <img className="p-4 h-14 w-14" src={Iglogo} alt="Linked-logo"></img>
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-4 h-24">
        <a href="/">
          <img src={logo} alt="wareBook-logo"></img>
        </a>
        <SearchComponent />
        <nav>
          <ul className="flex divide-x-2 divide-gray-500">
            <li className="p-6"><a href="/">ACCOUNT</a></li>
            <li className="p-6"><a href="/">CART:($0)</a></li>
            <li className="p-6"><a href="/">WISHLIST</a></li>
          </ul>
        </nav>
      </div>
      <hr className="h-[2px] justify-center my-0.3 divide-y w-[1316px] divide-gray-500 "></hr>
      <nav className="flex justify-center items-center bg-white p-4 h-24">
        <ul className="flex divide-x-2 divide-gray-500">
          <li className="p-8"><a href="/">HOME</a></li>
          <li className="p-8"><a href="/">ABOUT US</a></li>
          <li className="p-8"><a href="/">PUBLISHER</a></li>
          <li className="p-8"><a href="/">BOOKSTORE</a></li>
          <li className="p-8"><a href="/">CONTACT US</a></li>
          <li className="p-8"><a href="/">BLOG</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
