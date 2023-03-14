import "./YouMayLike.css";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import Product from "../Product/Product";

function YouMayLike(props) {
  const { getProduct, getProductsInCategory } = useContext(ShopContext);
  const { id } = props;
  const currentProduct = getProduct(id);

  // Get products based on current product category
  const productsInCurrentCategory = getProductsInCategory(
    currentProduct.category,
    currentProduct
  );

  // Iterate over returned array and return a product component
  const similar = productsInCurrentCategory
    .map((p, i) => {
      return <Product key={i} product={p} />;
    })
    .slice(0, 3);

  return (
    <div className="you-may-like-this">
      <div className="sp-title">You may like</div>
      <div className="sp-products">{similar}</div>
    </div>
  );
}

export default YouMayLike;
