import { useState, useEffect, useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import NewProduct from "../NewProduct/NewProduct";

function ProductLoader(props) {
  const { cartItems } = useContext(ShopContext);

  const getJSON = (file, callback) => {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  };

  // Adds properties (i.e quantity) to every product
  const initializeProducts = (products) => {
    const initialized = products.map((product) => ({
      ...product,
      quantity: 0,
      // add more props here if needed
    }));
    return initialized;
  };

  useEffect(() => {
    getJSON("./src/Products/products.json", function (text) {
      let products = JSON.parse(text);
      console.log(cartItems);
      // Lift the state up
      props.onFileRetrieved(initializeProducts(products));
    });
  }, []);
}

export default ProductLoader;
