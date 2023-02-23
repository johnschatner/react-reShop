import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import ProductLoader from "./Components/ProductLoader/ProductLoader";
import ProductGrid from "./Components/Product/ProductGrid";
import Search from "./Components/Search/Search";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Executes when file retrieves
  const handleFileCallback = (retrievedProducts) => {
    setProducts(retrievedProducts);
  };

  const cartHandler = (added) => {
    setCart((cart) => [...cart, added]);
  };

  console.log("Products", products);
  console.log("Cart", cart);

  return (
    <div className="App">
      <ProductLoader onFileRetrieved={handleFileCallback} />
      <Search onAddedToCart={cartHandler} searchableProducts={products} />
      <ProductGrid products={products} onAddedToCart={cartHandler} />
    </div>
  );
}

export default App;
