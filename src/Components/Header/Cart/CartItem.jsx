import "./CartItem.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { ShopContext } from "../../../context/ReShopContext";
import { HeaderContext } from "../../../context/ReHeaderContext";

function CartItem(props) {
  // Context
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { setHeaderOpen } = useContext(HeaderContext);
  // Product destructuring
  const { id, name, price, thumbnail } = props.product;
  const quantity = cartItems[id];
  const itemTotal = price * quantity;

  // React router to navigate programmatically
  const navigate = useNavigate();
  const productNameUrl = name
    .toLowerCase()
    .replaceAll(/\s|[()/]/g, (match) => (match === " " ? "-" : ""))
    .replace(/-+/g, "-");
  const navigateToProductPage = () => {
    navigate(`/product/${productNameUrl}&id=${id}`); // Navigate using useNavigate hook
    setHeaderOpen(() => false);
  };

  return (
    <div className="cart-item">
      <div onClick={navigateToProductPage} className="cart-item__left">
        <div className="cart-item__thumb">
          <a>
            <img src={thumbnail} alt={name} />
          </a>
        </div>
        <div className="cart-item__name">{name}</div>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__quantity-container">
          <button
            className="icon-btn"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <span className="cart-item__quantity">{quantity}</span>
          <button
            className="icon-btn"
            onClick={() => {
              addToCart(id);
            }}
          >
            <ion-icon name="add-outline"></ion-icon>
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
