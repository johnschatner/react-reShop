import { useContext } from "react";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";
import { ShopContext } from "../../../context/ReShopContext";

function OpenCart() {
  const { cartQuantity } = useContext(ShopContext);
  const { handleCart } = useContext(HeaderContext);

  return (
    <div className="cart-container">
      <button onClick={handleCart} className="icon-btn">
        <ion-icon name="bag-outline"></ion-icon>
        <span className="cart-count">{cartQuantity}</span>
      </button>
    </div>
  );
}

export default OpenCart;
