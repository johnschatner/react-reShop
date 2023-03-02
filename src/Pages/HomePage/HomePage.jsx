import { motion } from "framer-motion";

// Components
import ProductGrid from "../../Components/Product/ProductGrid";

function HomePage() {
  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ProductGrid />
    </motion.div>
  );
}

export default HomePage;
