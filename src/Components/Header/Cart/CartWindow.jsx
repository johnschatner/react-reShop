import { useContext } from "react";
import "./CartWindow.css";
import CartItem from "./CartItem";

// Context
import { ShopContext } from "../../../context/ReShopContext";

function CartWindow() {
  // Context
  const { PRODUCTS, cartItems, getCartSubtotal, clearCart, defaultMessages } =
    useContext(ShopContext);

  // Iterate over each product and assign to a CartItem component
  let cartEls = PRODUCTS.map((p) => {
    if (cartItems[p.id] !== 0) {
      return <CartItem key={p.id} product={p} />;
    }
  });

  // Get the total cart amount
  const subtotal = getCartSubtotal();

  // Check if products are in cart
  const productsInCart = Object.values(cartItems).some((num) => num > 0);

  return (
    <div className="cart-container">
      {productsInCart ? (
        <div>
          {cartEls}
          <div className="cart-total">
            Subtotal: ${subtotal}
            <button className="re-btn" onClick={() => clearCart()}>
              Clear cart
            </button>
          </div>
        </div>
      ) : (
        <span className="cart-empty shop-message">
          {defaultMessages.emptyCart}
        </span>
      )}
    </div>
  );
}

export default CartWindow;
