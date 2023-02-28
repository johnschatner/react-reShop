import "./Header.css";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { useState } from "react";

function Header(props) {
  const [headerBackground, setHeaderBackground] = useState();

  const cartHandler = (added) => {
    props.onAddedToCart(added);
  };

  // Lifting state
  const incrementHandler = (p) => {
    props.increment(p);
  };
  const decrementHandler = (p) => {
    props.decrement(p);
  };

  return (
    <header className={`header-content ${headerBackground ? "open" : ""}`}>
      <div className="header-content__left">
        <Search
          onAddedToCart={cartHandler}
          searchableProducts={props.products}
        />
      </div>
      <div className="header-content__right">
        <Cart
          cart={props.cart}
          increment={incrementHandler}
          decrement={decrementHandler}
          stateChanger={setHeaderBackground}
        />
      </div>
    </header>
  );
}

export default Header;
