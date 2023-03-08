import { useContext } from "react";
import "./SearchWindow.css";
import SearchItem from "./SearchItem";

// Animation
import { AnimatePresence, motion } from "framer-motion";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";

function SearchWindow() {
  const { isSearching, filteredProducts } = useContext(HeaderContext);

  return (
    <AnimatePresence>
      {isSearching && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {filteredProducts.map((p) => {
            return <SearchItem key={p.id} product={p} />;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchWindow;
