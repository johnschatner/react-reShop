import { useState, useContext, useRef } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";

// Context
import { HeaderContext } from "../../../context/ReHeaderContext";

function Search(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isSearching, handleSearch } = useContext(HeaderContext);

  // SearchPage router param
  const [backUrl, setBackUrl] = useState();
  const navigate = useNavigate();

  // One less layer of abstraction
  const { searchableProducts } = props;

  const searchField = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const liveSearch = (e) => {
    // Store search string
    const searchString = e.target.value.toLowerCase();
    setBackUrl(searchString);
    // Filter the products based on search string
    let results = searchableProducts.filter((product) =>
      product.name.toLowerCase().includes(searchString)
    );
    // Limit arr size
    results = [...results.slice(0, 3)];
    // Store results in state
    setFilteredProducts(() => results);
  };

  const searchEventHandler = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const searchQuery = getSearchQuery(); // Gets current search query from liveSearch state
      searchQuery !== undefined && searchQuery !== "undefined" // Check if truthy str and not empty
        ? navigate(`search?q=${searchQuery}`) // Navigate using useNavigate hook
        : null;
    }
  };

  const getSearchQuery = () => {
    return backUrl !== "" ? backUrl : "undefined"; // Returns state or "undefined"
  };

  return (
    <div className="flex">
      <form
        className="search-form"
        tabIndex={"0"}
        onKeyDown={searchEventHandler}
        onBlur={handleSearch}
        onSubmit={formHandler}
      >
        <div className="search-bar__container">
          <button onClick={searchEventHandler} className="search-btn icon-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input
            ref={searchField}
            onFocus={handleSearch}
            onChange={liveSearch}
            className="form-control"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div
          // This event is required since default behaviour closes window
          // when we try to interact with it
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          className={`header-window search-results ${
            isSearching ? "open" : ""
          }`}
        >
          {isSearching &&
            filteredProducts.map((p) => {
              return <SearchItem key={p.id} product={p} />;
            })}
        </div>
      </form>
    </div>
  );
}

export default Search;
