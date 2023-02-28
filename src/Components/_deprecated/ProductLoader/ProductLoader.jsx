// DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED
// DEPRECATED COMPONENT  DEPRECATED COMPONENT  DEPRECATED COMPONENT
// DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED
// DEPRECATED COMPONENT  DEPRECATED COMPONENT  DEPRECATED COMPONENT
//
// App insteads loads relevant files inside ReShopContext.jsx
//
// DEPRECATED COMPONENT  DEPRECATED COMPONENT  DEPRECATED COMPONENT
// DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED
// DEPRECATED COMPONENT  DEPRECATED COMPONENT  DEPRECATED COMPONENT
// DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED

import { useEffect } from "react";

// Components
import NewProduct from "../NewProduct/NewProduct";

function ProductLoader(props) {
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
      // add more props here if needed
    }));
    return initialized;
  };

  useEffect(() => {
    getJSON("./src/Products/products.json", function (text) {
      let parsedProducts = JSON.parse(text);
      // Lift the state up
      props.onFileRetrieved(initializeProducts(parsedProducts));
    });
  }, []);
}

export default ProductLoader;
