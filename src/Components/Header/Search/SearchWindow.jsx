import { useContext } from "react";
import "./SearchWindow.css";
import SearchItem from "./SearchItem";

// Animation
import { AnimatePresence, motion } from "framer-motion";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";
import { useNavigate } from "react-router-dom";

function SearchWindow() {
  const { isSearching, filteredProducts } = useContext(HeaderContext);
  const navigate = useNavigate();

  const updateSearch = (e) => {
    const searchQuery = e.target.innerHTML.toLowerCase();
    navigate(`search?q=${searchQuery}`);
  };

  return (
    <AnimatePresence>
      {isSearching && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              return <SearchItem key={p.id} product={p} />;
            })
          ) : (
            <div>
              <span>Popular searches</span>
              <button onClick={updateSearch} className="search-pill re-btn">
                Pen
              </button>
              <button onClick={updateSearch} className="search-pill re-btn">
                Notepad
              </button>
              <button onClick={updateSearch} className="search-pill re-btn">
                Mouse pad
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchWindow;
