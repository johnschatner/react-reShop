import { motion } from "framer-motion";
import { useContext } from "react";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function HomePage() {
  const { PRODUCTS } = useContext(ShopContext);
  console.log("In HomePage", PRODUCTS);

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <ProductGrid />
    </motion.div>
  );
}

export default HomePage;
