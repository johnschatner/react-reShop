import { useContext } from "react";
import "./CartItem.css";

// Context
import { ShopContext } from "../../../context/ReShopContext";

function CartItem(props) {
  // Context
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  // Product destructuring
  const { id, name, price, thumbnail } = props.product;
  const quantity = cartItems[id];
  const itemTotal = price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <div className="cart-item__thumb">
          <a>
            <img src={`/src/products/${thumbnail}.avif`} alt={name} />
          </a>
        </div>
        <div className="cart-item__name">{name}</div>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__quantity-container">
          <button
            className="icon-btn"
            onClick={() => {
              addToCart(id);
            }}
          >
            <ion-icon name="add-outline"></ion-icon>
          </button>
          <span className="cart-item__quantity">{quantity}</span>
          <button
            className="icon-btn"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
        </div>
        <div className="cart-item__price">${itemTotal}</div>
        <div className="cart-item__remove">
          <button
            className="icon-btn"
            onClick={() => {
              removeFromCart(id, quantity);
            }}
          >
            <ion-icon name="close-circle-outline" size="small"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
