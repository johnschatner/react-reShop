import { useContext } from "react";
import "./CartWindow.css";
import CartItem from "./CartItem";

// Animation
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence>
        {productsInCart ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {cartEls}
            <div className="cart-total">
              Subtotal: ${subtotal}
              <button className="re-btn" onClick={() => clearCart()}>
                Clear cart
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <span className="cart-empty shop-message">
              {defaultMessages.emptyCart}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CartWindow;
