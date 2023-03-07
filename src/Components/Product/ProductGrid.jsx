import { useContext } from "react";
import "./ProductGrid.css";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import Product from "./Product";

function ProductGrid(props) {
  // Load global products
  const { PRODUCTS } = useContext(ShopContext);

  const { searchResults } = props;

  let products;

  // Check if we're searching or on the homepage
  if (searchResults) {
    products = searchResults.map((p) => {
      return <Product key={p.id} product={p} />;
    });
  } else {
    products = PRODUCTS.map((p) => {
      return <Product key={p.id} product={p} />;
    });
  }

  return <div className="product-grid__container">{products}</div>;
}

export default ProductGrid;
