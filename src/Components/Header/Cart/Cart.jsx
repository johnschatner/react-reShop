import { useContext, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

// Context
import { ShopContext } from "../../../context/ReShopContext";

function Cart(props) {
  // Context
  const { PRODUCTS, cartItems, getCartSubtotal, clearCart } =
    useContext(ShopContext);

  // Transition window
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open) {
      setOpen(false);
      props.stateChanger(false); // Update header (parent)
    } else {
      setOpen(true);
      props.stateChanger(true); // Update header (parent)
    }
  };
  const handleClose = () => {
    setOpen(false);
    props.stateChanger(false); // Update header (parent)
  };

  // Iterate over each product and assign to a CartItem component
  let cartEls = PRODUCTS.map((p) => {
    if (cartItems[p.id] !== 0) {
      return <CartItem key={p.id} product={p} />;
    }
  });

  // Get the total cart amount
  const subtotal = getCartSubtotal();

  return (
    <div className="cart-container">
      <button onClick={handleOpen} className="icon-btn">
        <ion-icon name="bag-outline"></ion-icon>
      </button>
      <div
        onMouseLeave={handleClose}
        className={`cart-window ${open ? "open" : ""}`}
      >
        {cartEls}
        <div className="cart-total">
          Subtotal: ${subtotal}
          <button onClick={() => clearCart()}>Clear cart</button>
        </div>
      </div>
      <div
        onClick={handleClose}
        className={`cart-overlay ${open ? "open" : ""}`}
      ></div>
    </div>
  );
}

export default Cart;
