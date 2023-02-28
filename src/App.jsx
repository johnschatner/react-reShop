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
  const getCartQuantity = () => {
    let quantity = 0;
    console.log(cart);
    return quantity;
  };

  // Calculate the cart total
  const getCartTotal = () => {
    let total = 0;
    cart.products.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  useEffect(() => {
    getCartQuantity();
    getCartTotal();
  });

  // Adds a product to the cart
  const addProductHandler = (p) => {
    let cart = Array.from(p.arr);
    const productToBeAdded = p.productToBeAdded;

    console.log("Current Cart", cart);
    console.log("Product to be added", productToBeAdded);

    const indexOfProduct = p.arr.findIndex(
      (item) => item.name === productToBeAdded.name
    );
    if (indexOfProduct > -1) {
      console.log("Product is in cart already, changing quantity...");
      console.log(indexOfProduct);

      // Change quantity
      cart[indexOfProduct].quantity += 1;
    } else {
      console.log("Product isn't in cart already, adding...");
      productToBeAdded.quantity = 1; // We have one!
      cart = [...cart, productToBeAdded];
    }

    return cart;
  };

  // Cart state handler
  const cartHandler = (added) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: addProductHandler({
          arr: [...prevCart.products],
          productToBeAdded: added,
        }),
      };
    });
  };

  // log the cart
  console.log("Cart", cart);

  //  Lifted cart window logic state
  const incrementHandler = (p) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: addProductHandler({
          arr: [...prevCart.products],
          productToBeAdded: p,
        }),
      };
    });
  };
  const decrementHandler = (p) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: addProductHandler({
          arr: [...prevCart.products],
          productToBeAdded: p,
        }),
      };
    });
  };

  return (
    <div className="App">
      <ProductLoader onFileRetrieved={handleFileCallback} />
      <Header
        onAddedToCart={cartHandler}
        cart={cart}
        increment={incrementHandler}
        decrement={decrementHandler}
        products={products}
      />
      <ProductGrid products={products} onAddedToCart={cartHandler} />
    </div>
  );
}

export default App;
