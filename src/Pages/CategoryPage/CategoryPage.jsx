import "./CategoryPage.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function CategoryPage() {
  const { pathname } = useLocation();
  const { categories } = useContext(ShopContext);

  const category = pathname.split("/category/")[1].replaceAll(/-/gm, " ");
  const matchingCategory = categories.find(
    (cat) => cat.toLowerCase() === category
  );

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="category-page-title">
        <span className="category-page-title__sub">Browsing</span>
        <span className="category-page-title__category">
          {matchingCategory}
        </span>
      </div>
      <ProductGrid category={matchingCategory} />
    </motion.div>
  );
}

export default CategoryPage;
