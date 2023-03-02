import Product from "./Product";
import "./ProductGrid.css";

import { ShopContext } from "../../context/ReShopContext";
import { useContext } from "react";

function ProductGrid(props) {
  // Load global products
  const PRODUCTS = props.products;

  // Iterate over each product and assign a Product component to it
  const products = PRODUCTS.map((p) => {
    return <Product key={p.id} product={p} />;
  });

  return <div className="product-grid__container">{products}</div>;
}

export default ProductGrid;
