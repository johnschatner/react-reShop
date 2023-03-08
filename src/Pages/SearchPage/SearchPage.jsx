import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function SearchPage() {
  const { PRODUCTS } = useContext(ShopContext);
  const { search } = useLocation();

  console.log("In SearchPage");

  // Regex strings for search
  const searchString = search.replaceAll(/^(?:\?q=)?|%20/g, (match) =>
    match === "%20" ? " " : ""
  );

  // Search function that returns matching products
  const manualSearch = (str) => {
    if (str === "undefined") {
      return [];
    } else {
      // Filter the products based on search string
      let matches = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(str)
      );
      return matches;
    }
  };

  // Execute function and store any matches
  let results = manualSearch(searchString);

  // Convert matches to JSX elements
  let searchEls;

  // Check if we got any results
  if (results.length > 0) {
    searchEls = <ProductGrid searchResults={results} />;
  } else {
    searchEls = (
      <div className="shop-message">
        Ooops! No matching products were found...
      </div>
    );
  }

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div>
        <div>{searchEls}</div>
      </div>
    </motion.div>
  );
}

export default SearchPage;
