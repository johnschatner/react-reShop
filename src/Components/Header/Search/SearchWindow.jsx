import { useContext } from "react";
import "./SearchWindow.css";
import SearchItem from "./SearchItem";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";

function SearchWindow() {
  const { isSearching, filteredProducts } = useContext(HeaderContext);

  return (
    <div>
      {isSearching &&
        filteredProducts.map((p) => {
          return <SearchItem key={p.id} product={p} />;
        })}
    </div>
  );
}

export default SearchWindow;
