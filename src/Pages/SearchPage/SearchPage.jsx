import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";

function SearchPage() {
  const { testValue } = useParams();
  const { search } = useLocation();
  console.log(testValue, search);

  return (
    <motion.div
      // Prop that will animate when component is removed from DOM
      exit={{ opacity: 0, scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div>
        <br />
        <br />
        <br />
        <span>
          {testValue} {search}
        </span>
      </div>
    </motion.div>
  );
}

export default SearchPage;
