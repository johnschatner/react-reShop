import { useContext } from "react";
import "./ProductGrid.css";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import Product from "./Product";

function ProductGrid() {
  // Load global products
  const { PRODUCTS } = useContext(ShopContext);

  // Iterate over each product and assign a Product component to it
  const products = PRODUCTS.map((p) => {
    return <Product key={p.id} product={p} />;
  });

  return <div className="product-grid__container">{products}</div>;
}

export default ProductGrid;
