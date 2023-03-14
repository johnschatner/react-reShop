import "./ProductCategory.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";

function ProductCategory(props) {
  const { id } = props;
  const { getProduct } = useContext(ShopContext);
  const product = getProduct(id);
  const { category } = product;

  // Regex category to parseable pathname
  const categoryPathName = category.replaceAll(/\s/gm, "-").toLowerCase();

  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(`/category/${categoryPathName}`);
  };

  return (
    <div className="product-category">
      <a onClick={goToCategory}>{category}</a>
    </div>
  );
}

export default ProductCategory;
