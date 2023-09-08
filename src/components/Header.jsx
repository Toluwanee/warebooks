
import logo from "../assets/img/wareBook-logo.png"

function Header() {
  return (
      <nav className="bg-red-600 flex">
        <div className="logo">
          <a href="/">
                    <img src={logo} alt="wareBook_logo">

                    </img>
                </a>
        </div>
        <div className="hamburger-menu">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="nav-menu hide">
          <a href="#">Home</a>
          <a href="#">Career</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
  );
}

export default Header;
