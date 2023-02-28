import { useContext } from "react";
import "./CartItem.css";

// Context
import { ShopContext } from "../../../context/ReShopContext";

function CartItem(props) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, name, price } = props.product;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <div>
        Quantity: {cartItems[id]}
        <button
          onClick={() => {
            addToCart(id);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            removeFromCart(id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartItem;
