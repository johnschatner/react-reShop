import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import ProductLoader from "./Components/ProductLoader/ProductLoader";
import ProductGrid from "./Components/Product/ProductGrid";
import Header from "./Components/Header/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ products: [], quantity: 0, total: 0 });

  // Executes when file retrieves
  const handleFileCallback = (retrievedProducts) => {
    setProducts(retrievedProducts);
  };

  // Calculate the cart quantity
  const getCartQuantity = (arr) => {
    return arr.length;
  };

  // Calculate the cart total
  const getCartTotal = (arr) => {
    let total = 0;
    arr.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  // Add, edit and remove products from cart
  const cartProductsHandler = (p) => {
    let cart = Array.from(p.arr);
    const productToBeAdded = p.productToBeAdded;
    const indexOfProduct = p.arr.findIndex(
      (item) => item.name === productToBeAdded.name
    );
    if (indexOfProduct > -1) {
      console.log(cart[indexOfProduct]);
    } else {
      cart = [...cart, productToBeAdded];
    }

    return cart;
  };

  // Cart state handler
  const cartHandler = (added) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: cartProductsHandler({
          arr: [...prevCart.products, added],
          productToBeAdded: added,
        }),
        quantity: getCartQuantity([...prevCart.products, added]),
        total: getCartTotal([...prevCart.products, added]),
      };
    });
  };

  // log the cart
  console.log("Cart", cart);

  return (
    <div className="App">
      <ProductLoader onFileRetrieved={handleFileCallback} />
      <Header onAddedToCart={cartHandler} cart={cart} products={products} />
      <ProductGrid products={products} onAddedToCart={cartHandler} />
    </div>
  );
}

export default App;
