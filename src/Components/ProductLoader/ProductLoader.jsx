import { useState, useEffect } from "react";
import NewProduct from "../NewProduct/NewProduct";

function ProductLoader(props) {
  const [products, setProducts] = useState();

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

  useEffect(() => {
    getJSON("./src/Products/products.json", function (text) {
      let data = JSON.parse(text);
      setProducts(data);
    });
  }, []);

  // Lift the state up
  props.onFileRetrieved(products);

  return;
}

export default ProductLoader;
