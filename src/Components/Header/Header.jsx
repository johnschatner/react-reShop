import "./Header.css";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";
import { HeaderContext } from "../../context/ReHeaderContext";

function Header() {
  const { PRODUCTS } = useContext(ShopContext);
  const { headerOpen, closeHeader } = useContext(HeaderContext);

  return (
    <header className={`header-content ${headerOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/" className="icon-btn">
          <ion-icon name="logo-apple-ar"></ion-icon>
        </Link>
      </div>
      <div className="header-content__left">
        <Search searchableProducts={PRODUCTS} />
      </div>
      <div className="header-content__right">
        <Cart />
      </div>
      <div
        onMouseEnter={closeHeader}
        className={`header-overlay ${headerOpen ? "open" : ""}`}
      ></div>
    </header>
  );
}

export default Header;
