import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Context
import { ShopContextProvider } from "./context/ReShopContext";

// Components
import ProductGrid from "./Components/Product/ProductGrid";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <ProductGrid />
      </ShopContextProvider>
    </div>
  );
}

export default App;
