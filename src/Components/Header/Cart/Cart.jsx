import { useState } from "react";
import "./Cart.css";

function Cart(props) {
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

  // Iterate over each product and assign a Product component to it
  let cart = [];

  return (
    <div className="cart-container">
      <button onClick={handleOpen} className="icon-btn">
        <ion-icon name="bag-outline"></ion-icon>
      </button>
      <div
        onMouseLeave={handleClose}
        className={`cart-window ${open ? "open" : ""}`}
      >
        {cart}
      </div>
      <div
        onClick={handleClose}
        className={`cart-overlay ${open ? "open" : ""}`}
      ></div>
    </div>
  );
}

export default Cart;
