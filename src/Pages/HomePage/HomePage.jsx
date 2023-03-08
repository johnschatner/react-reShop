import { motion } from "framer-motion";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function HomePage() {
  console.log("In HomePage");

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
