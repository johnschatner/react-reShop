import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import ProductLoader from "./Components/ProductLoader/ProductLoader";
import Product from "./Components/Product/Product";

function App() {
  const [products, setProducts] = useState();

  // Executes when file retrieves
  const handleFileCallback = (retrievedProducts) => {
    setProducts(retrievedProducts);
    console.log(products);
  };

  return (
    <div className="App">
      <ProductLoader onFileRetrieved={handleFileCallback} />
    </div>
  );
}

export default App;
