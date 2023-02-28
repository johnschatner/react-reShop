import { createContext, useState } from "react";
import * as data from "../Products/products.json";
const PRODUCTS = data.default;

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getCartSubtotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const clearCart = () => {
    setCartItems(() => getDefaultCart());
  };

  const contextValue = {
    PRODUCTS,
    cartItems,
    addToCart,
    removeFromCart,
    getCartSubtotal,
    clearCart,
  };

  // console.log("Products:", PRODUCTS);
  // console.log("Cart:", cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
