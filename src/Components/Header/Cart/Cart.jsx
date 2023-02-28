import { useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

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

  // Change props.products.map to something that has products

  // Iterate over each product and assign to a CartItem component
  // let cartEls = props.products.map((item) => {
  //   return (
  //     <CartItem
  //       key={item.id}
  //       product={item}
  //     />
  //   );
  // });

  return (
    <div className="cart-container">
      <button onClick={handleOpen} className="icon-btn">
        <ion-icon name="bag-outline"></ion-icon>
      </button>
      <div
        onMouseLeave={handleClose}
        className={`cart-window ${open ? "open" : ""}`}
      >
        {/* {cartEls} */}
      </div>
      <div
        onClick={handleClose}
        className={`cart-overlay ${open ? "open" : ""}`}
      ></div>
    </div>
  );
}

export default Cart;
