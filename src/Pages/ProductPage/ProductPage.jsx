import { motion } from "framer-motion";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

// Context
import { ShopContext } from "../../context/ReShopContext";

function ProductPage() {
  const { pathname } = useLocation();
  const { PRODUCTS } = useContext(ShopContext);

  console.log("In ProductPage", pathname);

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div>Hey there!</div>
    </motion.div>
  );
}

export default ProductPage;
