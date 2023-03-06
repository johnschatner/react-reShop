import { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

// Context
import { ShopContext } from "../../../context/ReShopContext";
import { HeaderContext } from "../../../context/ReHeaderContext";

function Cart() {
  // Context
  const { PRODUCTS, cartItems, getCartSubtotal, clearCart, defaultMessages } =
    useContext(ShopContext);
  const { viewingCart, handleCart } = useContext(HeaderContext);

  // Iterate over each product and assign to a CartItem component
  let cartEls = PRODUCTS.map((p) => {
    if (cartItems[p.id] !== 0) {
      return <CartItem key={p.id} product={p} />;
    }
  });

  // Get total cart quantity
  const quantity = Object.values(cartItems).reduce((a, b) => a + b, 0);

  // Get the total cart amount
  const subtotal = getCartSubtotal();

  // Check if products are in cart
  const productsInCart = Object.values(cartItems).some((num) => num > 0);

  return (
    <div className="cart-container">
      <button onClick={handleCart} className="icon-btn">
        <ion-icon name="bag-outline"></ion-icon>
        <span className="cart-count">{quantity}</span>
      </button>
      <div className={`header-window ${viewingCart ? "open" : ""}`}>
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
    </div>
  );
}

export default Cart;
