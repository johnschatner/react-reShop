import { createContext, useState } from "react";
import * as data from "../Products/products.json";
const products = data.default;

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // PRODUCTS
  const [PRODUCTS, setPRODUCTS] = useState(products);

  const getProduct = (id) => {
    // Make every input a number
    const productId = Number(id);
    // Find the index of the product with the matching ID
    const index = PRODUCTS.findIndex((item) => item.id === productId);
    return PRODUCTS[index];
  };

  // CATEGORIES
  const getCategories = () => {
    const categories = [];
    PRODUCTS.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return categories;
  };

  const [categories, setCategories] = useState(getCategories());

  const getProductsInCategory = (category, exclude) => {
    const products = PRODUCTS.filter(
      (p) => p.category === category && exclude?.id !== p.id
    );
    return products;
  };

  // ALERTS

  const defaultMessages = {
    emptyCart: "Your cart is empty",
  };

  // CART

  const initCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(initCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId, howMany = 1) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - howMany }));
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

  // Get total cart quantity
  const cartQuantity = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const clearCart = () => {
    setCartItems(() => getDefaultCart());
  };

  // REVIEWS
  const defaultReview = { rating: 5, review: "Something something" };

  const addReview = (id, review = defaultReview) => {
    // Find the index of the item with the matching ID
    const index = PRODUCTS.findIndex((item) => item.id === id);

    // Create a new copy of the items array with the updated item
    const newPRODUCTS = [...PRODUCTS];
    if (newPRODUCTS[index].reviews) {
      // If the reviews property exists, append the new review to it
      newPRODUCTS[index].reviews = [...newPRODUCTS[index].reviews, review];
    } else {
      // If the reviews property doesn't exist, create it with the new review
      newPRODUCTS[index].reviews = [review];
    }

    // Update the state with the new items array
    setPRODUCTS(newPRODUCTS);
    console.log(newPRODUCTS);
  };

  const getAvgRating = (id) => {
    const reviews = getProduct(id).reviews;
    // Calculate the average rating
    let totalRating = 0;
    let averageRating = 0;
    if (reviews && reviews.length) {
      for (let i = 0; i < reviews.length; i++) {
        totalRating += reviews[i].rating;
      }
    }
    if (reviews && reviews.length) {
      averageRating = totalRating / reviews.length;
    }
    return averageRating;
  };

  // Export
  const contextValue = {
    PRODUCTS,
    getProduct,
    categories,
    setCategories,
    getProductsInCategory,
    cartItems,
    cartQuantity,
    addToCart,
    removeFromCart,
    getCartSubtotal,
    clearCart,
    addReview,
    getAvgRating,
    defaultMessages,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
