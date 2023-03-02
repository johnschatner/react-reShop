import { useContext } from "react";
import { motion } from "framer-motion";

// Context
import { ShopContext } from "../../context/ReShopContext";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function HomePage() {
  // Load global products
  const { PRODUCTS } = useContext(ShopContext);

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <ProductGrid products={PRODUCTS} />
    </motion.div>
  );
}

export default HomePage;
