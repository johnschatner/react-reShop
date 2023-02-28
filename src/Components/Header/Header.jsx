import "./Header.css";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { useContext, useState } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

function Header() {
  const [headerBackground, setHeaderBackground] = useState();
  const { PRODUCTS } = useContext(ShopContext);

  return (
    <header className={`header-content ${headerBackground ? "open" : ""}`}>
      <div className="header-content__left">
        <Search searchableProducts={PRODUCTS} />
      </div>
      <div className="header-content__right">
        <Cart stateChanger={setHeaderBackground} />
      </div>
    </header>
  );
}

export default Header;
