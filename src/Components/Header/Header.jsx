import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { HeaderContext } from "../../context/ReHeaderContext";

// Components
import OpenCart from "./Cart/OpenCart";
import CartWindow from "./Cart/CartWindow";
import Search from "./Search/Search";
import SearchWindow from "./Search/SearchWindow";

function Header() {
  const { headerOpen, closeHeader, viewingCart, isSearching } =
    useContext(HeaderContext);

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <header className={`header-content ${headerOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/" className="icon-btn">
          <ion-icon name="logo-apple-ar"></ion-icon>
          <span className="logo-name">ReShop</span>
        </Link>
      </div>
      <div className="header-content__left">
        <Search />
      </div>
      <div className="header-content__right">
        <OpenCart />
      </div>
      <main className={`header-window ${headerOpen ? "open" : ""}`}>
        {viewingCart && <CartWindow />}
        {isSearching && <SearchWindow />}
      </main>
      <div
        onMouseEnter={closeHeader}
        className={`header-overlay ${headerOpen ? "open" : ""}`}
      ></div>
    </header>
  );
}

export default Header;
